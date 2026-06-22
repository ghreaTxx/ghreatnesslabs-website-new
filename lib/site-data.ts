export type ManagedCollection = 'services' | 'caseStudies' | 'testimonials'

export interface ManagedService {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  iconName: 'Palette' | 'Code' | 'Layers' | 'Video' | 'TrendingUp' | 'Smartphone' | 'Shield'
  color: string
  gradient: string
  features: string[]
  stats: { label: string; value: string }[]
  image: string
  pricing: string
}

export interface ManagedCaseStudy {
  id: number
  title: string
  tagline: string
  description: string
  users: string
  rating: number
  type: string
  image: string
  color: string
  achievements: string[]
  technologies: string[]
  metrics: Record<string, string>
}

export interface ManagedTestimonial {
  id: number
  text: string
  author: string
  position: string
  rating: number
  company: string
  industry: string
}

export interface SiteData {
  services: ManagedService[]
  caseStudies: ManagedCaseStudy[]
  testimonials: ManagedTestimonial[]
}

export const defaultSiteData: SiteData = {
  services: [
    { id: 'uiux', title: 'UI/UX Design', shortDescription: 'Tailored designs that blend beauty and usability.', fullDescription: 'Custom interfaces for websites, apps, and platforms that improve usability, engagement, and brand trust.', iconName: 'Palette', color: 'from-pink-500 to-rose-500', gradient: 'from-pink-500/20 to-rose-500/20', features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design Systems', 'Usability Testing', 'Mobile-First Design', 'Accessibility Compliance'], stats: [{ label: 'Projects', value: '200+' }, { label: 'Satisfaction', value: '98%' }], image: '/images/services/Ghreatness Lab2.png', pricing: 'Starting from $164' },
    { id: 'web', title: 'Web Development', shortDescription: 'Fast, secure, and responsive websites.', fullDescription: 'Responsive corporate websites, e-commerce platforms, and web applications built for performance and conversion.', iconName: 'Code', color: 'from-blue-500 to-cyan-500', gradient: 'from-blue-500/20 to-cyan-500/20', features: ['React & Next.js', 'Full-Stack Development', 'E-commerce Solutions', 'CMS Integration', 'API Development', 'Performance Optimization'], stats: [{ label: 'Websites Built', value: '150+' }, { label: 'Uptime', value: '99.9%' }], image: '/images/services/Ghreatness Lab3.png', pricing: 'Starting from $314' },
    { id: 'graphic', title: 'Graphic Design', shortDescription: 'Striking visuals that define your brand.', fullDescription: 'Brand identity, digital graphics, and marketing collateral designed to make your message memorable.', iconName: 'Layers', color: 'from-purple-500 to-indigo-500', gradient: 'from-purple-500/20 to-indigo-500/20', features: ['Brand Identity Design', 'Logo Creation', 'Marketing Materials', 'Digital Graphics', 'Print Design', 'Brand Guidelines'], stats: [{ label: 'Designs Created', value: '500+' }, { label: 'Brands Served', value: '100+' }], image: '/images/services/Ghreatness Lab4.png', pricing: 'Starting from $23' },
    { id: 'video', title: 'Video Editing', shortDescription: 'Polished videos that captivate audiences.', fullDescription: 'Promotional, corporate, and social video edits with clean storytelling, audio polish, and platform-ready formats.', iconName: 'Video', color: 'from-green-500 to-emerald-500', gradient: 'from-green-500/20 to-emerald-500/20', features: ['Professional Editing', 'Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Social Media Formats', '4K Production'], stats: [{ label: 'Videos Edited', value: '300+' }, { label: 'Watch Time', value: '10M+ hrs' }], image: '/images/services/Ghreatness Lab5.png', pricing: 'Starting from $173' },
    { id: 'social', title: 'Social Media Marketing', shortDescription: 'Campaigns that grow and engage.', fullDescription: 'Data-driven content, community management, paid campaigns, and reporting that grow online presence.', iconName: 'TrendingUp', color: 'from-orange-500 to-red-500', gradient: 'from-orange-500/20 to-red-500/20', features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting', 'Influencer Partnerships', 'Brand Monitoring'], stats: [{ label: 'Campaigns Run', value: '250+' }, { label: 'Engagement Rate', value: '8.5%' }], image: '/images/services/Ghreatness Firm Socialmedia marketing-04.jpg', pricing: 'Starting from $21/month' },
    { id: 'software', title: 'Software Development', shortDescription: 'Scalable software built for your needs.', fullDescription: 'Custom applications, mobile apps, cloud solutions, and integrations tailored to business workflows.', iconName: 'Smartphone', color: 'from-teal-500 to-blue-500', gradient: 'from-teal-500/20 to-blue-500/20', features: ['Custom Applications', 'Mobile Development', 'Cloud Solutions', 'Database Design', 'API Integration', 'DevOps & Deployment'], stats: [{ label: 'Apps Built', value: '80+' }, { label: 'Users Served', value: '1M+' }], image: '/images/services/Ghreatness Firm-01.jpg', pricing: 'Starting from $480' },
    { id: 'cybersecurity', title: 'Cybersecurity', shortDescription: 'Protection for businesses and individuals.', fullDescription: 'Threat detection, vulnerability management, data protection, and secure architecture for digital assets.', iconName: 'Shield', color: 'from-red-500 to-pink-500', gradient: 'from-red-500/20 to-pink-500/20', features: ['Threat Detection', 'Vulnerability Assessment', 'Data Protection', 'Network Security', 'Compliance Auditing', '24/7 Monitoring'], stats: [{ label: 'Systems Secured', value: '500+' }, { label: 'Threats Blocked', value: '99.8%' }], image: '/images/services/Ghreatness Firm Cybersecurity-05.jpg', pricing: 'Starting from $517' }
  ],
  caseStudies: [
    { id: 1, title: 'AthleGame Esports', tagline: 'Leveling up the future of gaming and athleticism', description: 'An esports team and community owned by Ghreatness Labs.', users: '77+ athletes', rating: 4.3, type: 'Website', image: '/images/esports/45f992fa-b197-45d2-9644-4a4d716d5667.jpeg', color: 'from-purple-600 to-pink-600', achievements: ['Continental esports powerhouse', 'Structured training programs', 'Custom esports platform', 'Lifestyle brand development'], technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io'], metrics: { engagement: '95%', growth: '300%', retention: '87%' } },
    { id: 2, title: 'Civyn', tagline: 'Where students meet careers', description: 'A student hub connecting students to internships, jobs, and career opportunities.', users: '700+ community members', rating: 4.7, type: 'Web Platform', image: '/images/logos/civyn.png', color: 'from-blue-600 to-cyan-600', achievements: ['Verified internships', 'Networking platform', 'Skill resources', 'Expert mentorship'], technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'], metrics: { placements: '85%', satisfaction: '4.7/5', partnerships: '50+' } }
  ],
  testimonials: [
    { id: 1, text: "They didn't just give us a website; they gave us a tool that drives revenue and builds brand trust.", author: 'Chidinma O.', position: 'CEO at BrightPath Consults', rating: 5, company: 'BrightPath Consults', industry: 'Consulting' },
    { id: 2, text: "From our first meeting to the final launch, their professionalism was unmatched.", author: 'Obinna K.', position: 'Founder at GreenTech Africa', rating: 5, company: 'GreenTech Africa', industry: 'Technology' },
    { id: 3, text: 'Their creativity and attention to detail exceeded expectations.', author: 'Amarachi N.', position: 'Managing Partner at EliteCare Solutions', rating: 5, company: 'EliteCare Solutions', industry: 'Healthcare' }
  ]
}
