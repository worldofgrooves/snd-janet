export interface ManuviProviderProps {
  siteKey: string
  enabled?: boolean
  children: React.ReactNode
}

export interface ManuviContextValue {
  isEditorMode: boolean
  selectedElementId: string | null
  registeredElements: RegisteredElement[]
}

export interface RegisteredElement {
  id: string
  componentName: string
  editableType: 'style' | 'content' | 'both'
  locked: boolean
  boundingBox: DOMRect | null
}

export interface StyleOverride {
  element_id: string
  property: string
  value: string
  breakpoint: 'base' | 'tablet' | 'mobile'
}

export interface ContentEdit {
  element_id: string
  content_type: 'text' | 'image' | 'link'
  field: string
  value: string
}

export interface ElementContentInfo {
  tagName: string
  text?: string
  imageSrc?: string
  imageAlt?: string
  linkHref?: string
}

// PostMessage types
export type ManuviMessageType =
  | 'sdk:ready'
  | 'sdk:element-hovered'
  | 'sdk:element-selected'
  | 'sdk:element-deselected'
  | 'sdk:patched'
  | 'sdk:content-patched'
  | 'editor:select'
  | 'editor:deselect'
  | 'editor:patch'
  | 'editor:reset'
  | 'editor:tokens'
  | 'editor:content-patch'
  | 'editor:request-elements'

export interface ManuviMessage {
  type: ManuviMessageType
  source: 'manuvi-sdk' | 'manuvi-editor'
  payload?: unknown
}

export interface ElementMetadata {
  elementId: string
  componentName: string
  computedStyles: Record<string, string>
  boundingBox: { top: number; left: number; width: number; height: number }
  editableProperties: string[]
  editableType: 'style' | 'content' | 'both'
  locked: boolean
  parentChain: { id: string; name: string }[]
  content?: ElementContentInfo
}
