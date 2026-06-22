import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { defaultSiteData, type SiteData } from '@/lib/site-data'

export const dynamic = 'force-dynamic'

const dataFile = path.join(process.cwd(), 'data', 'site-data.json')
const adminPassword = process.env.ADMIN_PASSWORD || 'change-this-password'

async function readData(): Promise<SiteData> {
  try {
    const raw = await fs.readFile(dataFile, 'utf8')
    const parsed = JSON.parse(raw) as Partial<SiteData>
    return {
      services: parsed.services?.length ? parsed.services : defaultSiteData.services,
      caseStudies: parsed.caseStudies?.length ? parsed.caseStudies : defaultSiteData.caseStudies,
      testimonials: parsed.testimonials?.length ? parsed.testimonials : defaultSiteData.testimonials,
    }
  } catch {
    return defaultSiteData
  }
}

function isAuthorized(request: NextRequest) {
  return request.headers.get('x-admin-password') === adminPassword
}

export async function GET() {
  return NextResponse.json(await readData(), { headers: { 'Cache-Control': 'no-store' } })
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Invalid admin password.' }, { status: 401 })
  }

  const body = await request.json() as SiteData
  if (!Array.isArray(body.services) || !Array.isArray(body.caseStudies) || !Array.isArray(body.testimonials)) {
    return NextResponse.json({ error: 'Invalid site data shape.' }, { status: 400 })
  }

  await fs.mkdir(path.dirname(dataFile), { recursive: true })
  await fs.writeFile(dataFile, JSON.stringify(body, null, 2))
  return NextResponse.json({ ok: true, data: body })
}
