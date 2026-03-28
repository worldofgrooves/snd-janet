'use client'

import { useContext } from 'react'
import { ManuviContext } from './provider'
import type { ManuviContextValue } from './types'

export function useManuvi(): ManuviContextValue {
  const context = useContext(ManuviContext)
  if (!context) {
    throw new Error('useManuvi must be used within a ManuviProvider')
  }
  return context
}
