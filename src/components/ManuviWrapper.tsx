'use client'

import { ManuviProvider } from '@manuvi/sdk'

export default function ManuviWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const siteKey = process.env.NEXT_PUBLIC_MANUVI_SITE_KEY
  if (!siteKey) return <>{children}</>
  return <ManuviProvider siteKey={siteKey}>{children}</ManuviProvider>
}
