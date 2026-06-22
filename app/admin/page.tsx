'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { defaultSiteData, type ManagedCollection, type SiteData } from '@/lib/site-data'

const collections: ManagedCollection[] = ['services', 'caseStudies', 'testimonials']

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [activeCollection, setActiveCollection] = useState<ManagedCollection>('services')
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [editorValue, setEditorValue] = useState('')
  const [message, setMessage] = useState('')

  const activeItems = siteData[activeCollection]
  const selectedItem = activeItems[selectedIndex]

  useEffect(() => {
    fetch('/api/site-data', { cache: 'no-store' })
      .then((response) => response.json())
      .then(setSiteData)
      .catch(() => setMessage('Could not load live data, using defaults.'))
  }, [])

  useEffect(() => {
    setSelectedIndex(0)
  }, [activeCollection])

  useEffect(() => {
    setEditorValue(JSON.stringify(selectedItem || {}, null, 2))
  }, [selectedItem])

  const previewTitle = useMemo(() => {
    if (!selectedItem) return 'No item selected'
    return 'title' in selectedItem ? selectedItem.title : 'author' in selectedItem ? selectedItem.author : 'Selected item'
  }, [selectedItem])

  const updateCollection = (items: SiteData[ManagedCollection]) => {
    setSiteData((current) => ({ ...current, [activeCollection]: items }))
  }

  const saveCurrentItem = () => {
    try {
      const parsed = JSON.parse(editorValue)
      const nextItems = [...activeItems]
      nextItems[selectedIndex] = parsed
      updateCollection(nextItems as SiteData[ManagedCollection])
      setMessage('Draft updated. Click “Publish changes” to save it to the backend.')
    } catch {
      setMessage('Invalid JSON. Fix the editor before saving this item.')
    }
  }

  const addItem = () => {
    const template = activeCollection === 'services'
      ? { id: `service-${Date.now()}`, title: 'New Service', shortDescription: 'Short description', fullDescription: 'Full description', iconName: 'Code', color: 'from-blue-500 to-cyan-500', gradient: 'from-blue-500/20 to-cyan-500/20', features: ['Feature'], stats: [{ label: 'Projects', value: '1+' }], image: '/images/services/Ghreatness Lab3.png', pricing: 'Starting from $0' }
      : activeCollection === 'caseStudies'
        ? { id: Date.now(), title: 'New Case Study', tagline: 'Project tagline', description: 'Project description', users: '0 users', rating: 5, type: 'Website', image: '/images/gallery/1.png', color: 'from-blue-600 to-cyan-600', achievements: ['Achievement'], technologies: ['Next.js'], metrics: { growth: '0%' } }
        : { id: Date.now(), text: 'Client feedback', author: 'Client Name', position: 'Founder', rating: 5, company: 'Company', industry: 'Industry' }

    const nextItems = [...activeItems, template]
    updateCollection(nextItems as SiteData[ManagedCollection])
    setSelectedIndex(nextItems.length - 1)
  }

  const deleteItem = () => {
    const nextItems = activeItems.filter((_, index) => index !== selectedIndex)
    updateCollection(nextItems as SiteData[ManagedCollection])
    setSelectedIndex(Math.max(0, selectedIndex - 1))
  }

  const publish = async (event: FormEvent) => {
    event.preventDefault()
    const response = await fetch('/api/site-data', {
      method: 'PUT',
      headers: { 'content-type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify(siteData),
    })
    const result = await response.json()
    setMessage(response.ok ? 'Published successfully.' : result.error || 'Publish failed.')
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Secure admin</p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Ghreatness Labs content panel</h1>
          <p className="mt-4 max-w-3xl text-slate-300">Log in with the backend admin password, then add, edit, remove, and publish site services, case studies, and testimonials. Set ADMIN_PASSWORD in production before using this panel.</p>
        </div>

        <form onSubmit={publish} className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <label className="mb-4 block text-sm font-semibold text-slate-200">Admin password
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-400" placeholder="Enter password" />
            </label>

            <div className="mb-4 grid gap-2">
              {collections.map((collection) => (
                <button key={collection} type="button" onClick={() => setActiveCollection(collection)} className={`rounded-xl px-4 py-3 text-left font-semibold transition ${activeCollection === collection ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}>{collection}</button>
              ))}
            </div>

            <button type="button" onClick={addItem} className="mb-2 w-full rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white">Add item</button>
            <button type="button" onClick={deleteItem} disabled={!activeItems.length} className="w-full rounded-xl bg-rose-500 px-4 py-3 font-bold text-white disabled:opacity-40">Delete selected</button>
          </aside>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-6">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-blue-300">Editing {activeCollection}</p>
                <h2 className="text-2xl font-bold">{previewTitle}</h2>
              </div>
              <button type="submit" className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-bold text-white">Publish changes</button>
            </div>

            <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
              {activeItems.map((item, index) => (
                <button key={index} type="button" onClick={() => setSelectedIndex(index)} className={`shrink-0 rounded-full px-4 py-2 text-sm ${index === selectedIndex ? 'bg-white text-slate-950' : 'bg-slate-900 text-slate-300'}`}>{'title' in item ? item.title : 'author' in item ? item.author : `Item ${index + 1}`}</button>
              ))}
            </div>

            <textarea value={editorValue} onChange={(event) => setEditorValue(event.target.value)} className="min-h-[520px] w-full rounded-2xl border border-white/10 bg-slate-950 p-4 font-mono text-sm text-slate-100 outline-none focus:border-blue-400" />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" onClick={saveCurrentItem} className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950">Save item draft</button>
              {message && <p className="text-sm text-slate-300">{message}</p>}
            </div>
          </section>
        </form>
      </div>
    </main>
  )
}
