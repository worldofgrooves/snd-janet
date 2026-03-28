import type { StyleOverride } from './types'

const SUPABASE_URL = 'https://elcfzffqvoogimcgufij.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsY2Z6ZmZxdm9vZ2ltY2d1ZmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNTkzMTEsImV4cCI6MjA4ODkzNTMxMX0.sxZTfSXpbMVfAby7ODi5EDwNaGtMz99hdGB6wDSjLQs'

// Cache for style overrides (5 min TTL)
const cache = new Map<string, { data: unknown; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000

function getCached<T>(key: string): T | null {
  const entry = cache.get(key)
  if (!entry) return null
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key)
    return null
  }
  return entry.data as T
}

function setCache(key: string, data: unknown) {
  cache.set(key, { data, timestamp: Date.now() })
}

/**
 * Direct PostgREST fetch -- avoids Supabase client type conflicts
 * when embedded in projects with their own typed Supabase setup.
 */
async function supabaseRest<T>(
  table: string,
  query: string
): Promise<T[]> {
  const url = `${SUPABASE_URL}/rest/v1/${table}?${query}`
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) return []
  return res.json()
}

async function supabaseRestSingle<T>(
  table: string,
  query: string
): Promise<T | null> {
  const url = `${SUPABASE_URL}/rest/v1/${table}?${query}`
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.pgrst.object+json',
    },
  })
  if (!res.ok) return null
  return res.json()
}

/**
 * Resolve a site API key to a project_id.
 */
async function resolveProjectId(siteKey: string): Promise<string | null> {
  const cacheKey = `project:${siteKey}`
  const cached = getCached<string>(cacheKey)
  if (cached) return cached

  const project = await supabaseRestSingle<{ id: string }>(
    'manuvi_projects',
    `select=id&api_key=eq.${encodeURIComponent(siteKey)}`
  )

  if (!project) return null
  setCache(cacheKey, project.id)
  return project.id
}

/**
 * Fetch style overrides for a given site key and page path.
 * Uses Supabase anon key -- RLS allows public read on style_overrides.
 */
export async function fetchOverrides(
  siteKey: string,
  pagePath: string
): Promise<StyleOverride[]> {
  const cacheKey = `overrides:${siteKey}:${pagePath}`
  const cached = getCached<StyleOverride[]>(cacheKey)
  if (cached) return cached

  const projectId = await resolveProjectId(siteKey)
  if (!projectId) return []

  const overrides = await supabaseRest<StyleOverride>(
    'manuvi_style_overrides',
    `select=element_id,property,value,breakpoint&project_id=eq.${projectId}&page_path=eq.${encodeURIComponent(pagePath)}`
  )

  setCache(cacheKey, overrides)
  return overrides
}

/**
 * Fetch content edits for a given site key and page path.
 */
export async function fetchContentEdits(
  siteKey: string,
  pagePath: string
): Promise<{ element_id: string; content_type: string; field: string; value: string }[]> {
  const cacheKey = `content:${siteKey}:${pagePath}`
  const cached = getCached<{ element_id: string; content_type: string; field: string; value: string }[]>(cacheKey)
  if (cached) return cached

  const projectId = await resolveProjectId(siteKey)
  if (!projectId) return []

  const edits = await supabaseRest<{ element_id: string; content_type: string; field: string; value: string }>(
    'manuvi_content_edits',
    `select=element_id,content_type,field,value&project_id=eq.${projectId}&page_path=eq.${encodeURIComponent(pagePath)}`
  )

  setCache(cacheKey, edits)
  return edits
}

/**
 * Fetch design tokens for a given site key.
 * Returns a map of token_name -> token_value.
 */
export async function fetchDesignTokens(
  siteKey: string
): Promise<Record<string, string>> {
  const cacheKey = `tokens:${siteKey}`
  const cached = getCached<Record<string, string>>(cacheKey)
  if (cached) return cached

  const projectId = await resolveProjectId(siteKey)
  if (!projectId) return {}

  const tokens = await supabaseRest<{ token_name: string; token_value: string }>(
    'manuvi_design_tokens',
    `select=token_name,token_value&project_id=eq.${projectId}`
  )

  const result: Record<string, string> = {}
  tokens.forEach((t) => {
    result[t.token_name] = t.token_value
  })

  setCache(cacheKey, result)
  return result
}
