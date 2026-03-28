export const MANUVI_QUERY_PARAM = 'manuvi'
export const MANUVI_ORIGIN = process.env.NEXT_PUBLIC_MANUVI_URL || 'https://manuvi.studio'
export const MANUVI_DATA_ID = 'data-manuvi-id'
export const MANUVI_DATA_EDITABLE = 'data-manuvi-editable'
export const MANUVI_DATA_LOCKED = 'data-manuvi-locked'
export const MANUVI_SUPABASE_URL = 'https://elcfzffqvoogimcgufij.supabase.co'

export const STYLE_PROPERTIES = [
  // Spacing
  'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  // Typography
  'font-size', 'font-weight', 'line-height', 'letter-spacing',
  'text-align', 'text-transform', 'color',
  // Colors
  'background-color', 'border-color',
  // Borders
  'border-width', 'border-style', 'border-radius',
  'border-top-left-radius', 'border-top-right-radius',
  'border-bottom-left-radius', 'border-bottom-right-radius',
  // Sizing
  'width', 'max-width', 'height', 'min-height',
  'display', 'flex-direction', 'justify-content', 'align-items', 'flex-wrap', 'gap',
  // Effects
  'opacity', 'box-shadow',
]
