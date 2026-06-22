'use client'

import { useEffect, useState } from 'react'
import { defaultSiteData, type SiteData } from '@/lib/site-data'

export function useSiteData() {
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData)

  useEffect(() => {
    let isActive = true
    fetch('/api/site-data', { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : defaultSiteData)
      .then((data: SiteData) => {
        if (isActive) setSiteData(data)
      })
      .catch(() => undefined)

    return () => {
      isActive = false
    }
  }, [])

  return siteData
}
