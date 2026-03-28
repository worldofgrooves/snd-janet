'use client'

import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import type {
  ManuviContextValue,
  ManuviProviderProps,
  RegisteredElement,
  ManuviMessage,
  ElementMetadata,
  ElementContentInfo,
  StyleOverride,
} from './types'
import {
  MANUVI_QUERY_PARAM,
  MANUVI_DATA_ID,
  MANUVI_DATA_EDITABLE,
  MANUVI_DATA_LOCKED,
  STYLE_PROPERTIES,
} from './constants'
import { fetchOverrides, fetchContentEdits, fetchDesignTokens } from './fetcher'

export const ManuviContext = createContext<ManuviContextValue>({
  isEditorMode: false,
  selectedElementId: null,
  registeredElements: [],
})

export function ManuviProvider({
  siteKey,
  enabled,
  children,
}: ManuviProviderProps) {
  const [isEditorMode, setIsEditorMode] = useState(false)
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null)
  const [registeredElements, setRegisteredElements] = useState<RegisteredElement[]>([])
  const overridesApplied = useRef(false)

  // Determine if editor mode should be active
  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)
    const manuviParam = params.get(MANUVI_QUERY_PARAM)
    const isInIframe = window.self !== window.top

    // Editor mode activates when ?manuvi=1 is present OR when loaded from manuvi.studio
    const shouldActivate =
      enabled !== undefined
        ? enabled
        : manuviParam === '1' || isInIframe

    setIsEditorMode(shouldActivate)
  }, [enabled])

  // Apply persisted overrides on page load (always, not just editor mode)
  useEffect(() => {
    if (!siteKey || overridesApplied.current) return
    overridesApplied.current = true

    const applyPersistedOverrides = async () => {
      try {
        // Fetch and apply style overrides
        const overrides = await fetchOverrides(siteKey, window.location.pathname)
        applyStyleOverrides(overrides)

        // Fetch and apply content edits
        const edits = await fetchContentEdits(siteKey, window.location.pathname)
        applyContentEdits(edits)

        // Fetch and apply design tokens
        const tokens = await fetchDesignTokens(siteKey)
        applyDesignTokens(tokens)
      } catch (err) {
        console.warn('[Manuvi SDK] Failed to fetch overrides:', err)
      }
    }

    applyPersistedOverrides()
  }, [siteKey])

  // Scan DOM for manuvi elements and set up editor mode
  useEffect(() => {
    if (!isEditorMode || typeof window === 'undefined') return

    const elements = scanElements()
    setRegisteredElements(elements)

    // Send ready message to parent editor
    sendMessage({
      type: 'sdk:ready',
      source: 'manuvi-sdk',
      payload: {
        elements: elements.map((el) => ({
          id: el.id,
          componentName: el.componentName,
          editableType: el.editableType,
          locked: el.locked,
        })),
        pagePath: window.location.pathname,
        siteKey,
      },
    })
  }, [isEditorMode, siteKey])

  // Listen for postMessages from the editor
  useEffect(() => {
    if (!isEditorMode || typeof window === 'undefined') return

    const handleMessage = (event: MessageEvent) => {
      const msg = event.data as ManuviMessage
      if (!msg || msg.source !== 'manuvi-editor') return

      switch (msg.type) {
        case 'editor:select': {
          const { elementId } = msg.payload as { elementId: string }
          setSelectedElementId(elementId)
          highlightElement(elementId, true)
          break
        }
        case 'editor:deselect': {
          setSelectedElementId(null)
          clearHighlights()
          break
        }
        case 'editor:patch': {
          const patch = msg.payload as {
            elementId: string
            property: string
            value: string
          }
          applyPatch(patch.elementId, patch.property, patch.value)
          sendMessage({
            type: 'sdk:patched',
            source: 'manuvi-sdk',
            payload: patch,
          })
          break
        }
        case 'editor:reset': {
          const reset = msg.payload as {
            elementId: string
            property: string
          }
          resetProperty(reset.elementId, reset.property)
          break
        }
        case 'editor:tokens': {
          const { tokens } = msg.payload as { tokens: Record<string, string> }
          applyDesignTokens(tokens)
          break
        }
        case 'editor:content-patch': {
          const contentPatch = msg.payload as {
            elementId: string
            contentType: 'text' | 'image' | 'link'
            field: string
            value: string
          }
          applyContentPatch(contentPatch)
          sendMessage({
            type: 'sdk:content-patched',
            source: 'manuvi-sdk',
            payload: contentPatch,
          })
          break
        }
        case 'editor:request-elements': {
          const elements = scanElements()
          setRegisteredElements(elements)
          sendMessage({
            type: 'sdk:ready',
            source: 'manuvi-sdk',
            payload: {
              elements: elements.map((el) => ({
                id: el.id,
                componentName: el.componentName,
                editableType: el.editableType,
                locked: el.locked,
              })),
              pagePath: window.location.pathname,
              siteKey,
            },
          })
          break
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [isEditorMode, siteKey])

  // Set up hover/click handling for element selection in editor mode
  useEffect(() => {
    if (!isEditorMode || typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(`[${MANUVI_DATA_ID}]`)
      if (!target) {
        clearHoverHighlight()
        return
      }

      const elementId = target.getAttribute(MANUVI_DATA_ID)
      if (!elementId) return

      // Send hover info to editor
      const rect = target.getBoundingClientRect()
      sendMessage({
        type: 'sdk:element-hovered',
        source: 'manuvi-sdk',
        payload: {
          elementId,
          componentName: elementId,
          boundingBox: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          },
        },
      })
    }

    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      const target = (e.target as HTMLElement).closest(`[${MANUVI_DATA_ID}]`)
      if (!target) {
        setSelectedElementId(null)
        sendMessage({
          type: 'sdk:element-deselected',
          source: 'manuvi-sdk',
        })
        return
      }

      const elementId = target.getAttribute(MANUVI_DATA_ID)
      if (!elementId) return

      const locked = target.getAttribute(MANUVI_DATA_LOCKED) === 'true'
      if (locked) return

      setSelectedElementId(elementId)

      // Gather element metadata
      const computed = window.getComputedStyle(target)
      const computedStyles: Record<string, string> = {}
      STYLE_PROPERTIES.forEach((prop) => {
        computedStyles[prop] = computed.getPropertyValue(prop)
      })

      const rect = target.getBoundingClientRect()
      const editableAttr = target.getAttribute(MANUVI_DATA_EDITABLE)
      const parentChain = getParentChain(target as HTMLElement)

      // Gather content info
      const htmlEl = target as HTMLElement
      const contentInfo: ElementContentInfo = {
        tagName: htmlEl.tagName.toLowerCase(),
      }
      if (htmlEl instanceof HTMLImageElement) {
        contentInfo.imageSrc = htmlEl.src
        contentInfo.imageAlt = htmlEl.alt
      } else if (htmlEl instanceof HTMLAnchorElement) {
        contentInfo.linkHref = htmlEl.href
        contentInfo.text = htmlEl.textContent || ''
      } else {
        contentInfo.text = htmlEl.textContent || ''
      }

      const metadata: ElementMetadata = {
        elementId,
        componentName: elementId,
        computedStyles,
        boundingBox: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
        editableProperties: STYLE_PROPERTIES,
        editableType: (editableAttr as 'style' | 'content' | 'both') || 'style',
        locked: false,
        parentChain,
        content: contentInfo,
      }

      sendMessage({
        type: 'sdk:element-selected',
        source: 'manuvi-sdk',
        payload: metadata,
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick, true)
    }
  }, [isEditorMode])

  const contextValue: ManuviContextValue = {
    isEditorMode,
    selectedElementId,
    registeredElements,
  }

  return (
    <ManuviContext.Provider value={contextValue}>
      {children}
    </ManuviContext.Provider>
  )
}

// ============================================================
// Helper Functions
// ============================================================

function sendMessage(msg: ManuviMessage) {
  if (typeof window === 'undefined') return
  window.parent.postMessage(msg, '*')
}

function scanElements(): RegisteredElement[] {
  const elements: RegisteredElement[] = []
  const nodes = document.querySelectorAll(`[${MANUVI_DATA_ID}]`)

  nodes.forEach((node) => {
    const id = node.getAttribute(MANUVI_DATA_ID)
    if (!id) return

    const editableAttr = node.getAttribute(MANUVI_DATA_EDITABLE)
    const locked = node.getAttribute(MANUVI_DATA_LOCKED) === 'true'

    elements.push({
      id,
      componentName: id,
      editableType: (editableAttr as 'style' | 'content') || 'style',
      locked,
      boundingBox: node.getBoundingClientRect(),
    })
  })

  return elements
}

function applyPatch(elementId: string, property: string, value: string) {
  const el = document.querySelector(`[data-manuvi-id="${elementId}"]`) as HTMLElement
  if (!el) return
  el.style.setProperty(property, value)
}

function applyContentPatch(patch: {
  elementId: string
  contentType: 'text' | 'image' | 'link'
  field: string
  value: string
}) {
  const el = document.querySelector(
    `[${MANUVI_DATA_ID}="${patch.elementId}"]`
  ) as HTMLElement
  if (!el) return

  switch (patch.contentType) {
    case 'text':
      el.textContent = patch.value
      break
    case 'image':
      if (el instanceof HTMLImageElement) {
        if (patch.field === 'src') el.src = patch.value
        if (patch.field === 'alt') el.alt = patch.value
      }
      break
    case 'link':
      if (el instanceof HTMLAnchorElement) {
        if (patch.field === 'href') el.href = patch.value
        if (patch.field === 'text') el.textContent = patch.value
      }
      break
  }
}

function resetProperty(elementId: string, property: string) {
  const el = document.querySelector(`[data-manuvi-id="${elementId}"]`) as HTMLElement
  if (!el) return
  el.style.removeProperty(property)
}

function applyStyleOverrides(overrides: StyleOverride[]) {
  // Get current viewport width for breakpoint matching
  const width = typeof window !== 'undefined' ? window.innerWidth : 1200
  const activeBreakpoint =
    width <= 375 ? 'mobile' : width <= 768 ? 'tablet' : 'base'

  // Group by element and apply cascading (base -> tablet -> mobile)
  const grouped = new Map<string, StyleOverride[]>()
  overrides.forEach((o) => {
    const list = grouped.get(o.element_id) || []
    list.push(o)
    grouped.set(o.element_id, list)
  })

  grouped.forEach((elementOverrides, elementId) => {
    const el = document.querySelector(
      `[data-manuvi-id="${elementId}"]`
    ) as HTMLElement
    if (!el) return

    // Apply base first, then tablet if applicable, then mobile
    const breakpointOrder = ['base', 'tablet', 'mobile']
    const activeIndex = breakpointOrder.indexOf(activeBreakpoint)

    elementOverrides
      .filter((o) => breakpointOrder.indexOf(o.breakpoint) <= activeIndex)
      .sort(
        (a, b) =>
          breakpointOrder.indexOf(a.breakpoint) -
          breakpointOrder.indexOf(b.breakpoint)
      )
      .forEach((o) => {
        el.style.setProperty(o.property, o.value)
      })
  })
}

function applyContentEdits(
  edits: { element_id: string; content_type: string; field: string; value: string }[]
) {
  edits.forEach((edit) => {
    const el = document.querySelector(
      `[data-manuvi-id="${edit.element_id}"]`
    ) as HTMLElement
    if (!el) return

    switch (edit.content_type) {
      case 'text':
        el.textContent = edit.value
        break
      case 'image':
        if (el instanceof HTMLImageElement) {
          if (edit.field === 'src') el.src = edit.value
          if (edit.field === 'alt') el.alt = edit.value
        }
        break
      case 'link':
        if (el instanceof HTMLAnchorElement) {
          if (edit.field === 'href') el.href = edit.value
          if (edit.field === 'text') el.textContent = edit.value
        }
        break
    }
  })
}

function applyDesignTokens(tokens: Record<string, string>) {
  const root = document.documentElement
  Object.entries(tokens).forEach(([name, value]) => {
    root.style.setProperty(`--${name}`, value)
  })
}

function highlightElement(_elementId: string, _selected: boolean) {
  // Highlighting is handled by the editor overlay, not the SDK
}

function clearHoverHighlight() {
  // Handled by editor overlay
}

function clearHighlights() {
  // Handled by editor overlay
}

function getParentChain(element: HTMLElement): { id: string; name: string }[] {
  const chain: { id: string; name: string }[] = []
  let current = element.parentElement

  while (current) {
    const id = current.getAttribute('data-manuvi-id')
    if (id) {
      chain.unshift({ id, name: id })
    }
    current = current.parentElement
  }

  return chain
}
