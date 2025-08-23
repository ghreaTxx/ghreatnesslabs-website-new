'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform Transformation',
    client: 'TechMart Nigeria',
    category: 'Web Development',
    description: 'Complete redesign and development of a modern e-commerce platform with advanced features.',
    image: '/images/case-studies/ecommerce.jpg',
    results: [
      { metric: 'Sales Increase', value: '300%' },
      { metric: 'Page Load Speed', value: '2.1s' },
      { metric: 'User Engagement', value: '+85%' }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    duration: '4 months',
    year: '2024'
  },
  {
    id: 2,
    title: 'Corporate Identity & Branding',
    client: 'Innovate Solutions',
    category: 'Graphic Design',
    description: 'Complete brand identity design including logo, marketing materials, and digital assets.',
    image: '/images/case-studies/branding.jpg',
    results: [
      { metric: 'Brand Recognition', value: '+250%' },
      { metric: 'Customer Trust', value: '+180%' },
      { metric: 'Market Reach', value: '+200%' }
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Illustrator'],
    duration: '2 months',
    year: '2024'
  },
  {
    id: 3,
    title: 'Cybersecurity Infrastructure',
    client: 'SecureBank Ltd',
    category: 'Cybersecurity',
    description: 'Implementation of comprehensive cybersecurity solutions for financial institution.',
    image: '/images/case-studies/cybersecurity.jpg',
    results: [
      { metric: 'Threat Prevention', value: '99.9%' },
      { metric: 'System Uptime', value: '99.8%' },
      { metric: 'Security Score', value: 'A+' }
    ],
    technologies: ['Firewall Systems', 'Encryption', 'Monitoring Tools'],
    duration: '6 months',
    year: '2023'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    client: 'HealthCare Plus',
    category: 'Software Development',
    description: 'Cross-platform mobile application for healthcare management and patient care.',
    image: '/images/case-studies/mobile-app.jpg',
    results: [
      { metric: 'App Downloads', value: '50K+' },
      { metric: 'User Rating', value: '4.8/5' },
      { metric: 'Daily Active Users', value: '15K+' }
    ],
    technologies: ['React Native', 'Firebase', 'Node.js'],
    duration: '5 months',
    year: '2024'
  },
  {
    id: 5,
    title: 'Digital Marketing Campaign',
    client: 'Fashion Forward',
    category: 'Social Media Marketing',
    description: 'Comprehensive digital marketing strategy and social media campaign execution.',
    image: '/images/case-studies/marketing.jpg',
    results: [
      { metric: 'Reach Increase', value: '400%' },
      { metric: 'Engagement Rate', value: '12.5%' },
      { metric: 'Conversion Rate', value: '+320%' }
    ],
    technologies: ['Social Media Platforms', 'Analytics Tools', 'Content Creation'],
    duration: '3 months',
    year: '2024'
  },
  {
    id: 6,
    title: 'Video Production & Editing',
    client: 'Creative Studios',
    category: 'Video Editing',
    description: 'Professional video production and post-production for marketing campaigns.',
    image: '/images/case-studies/video.jpg',
    results: [
      { metric: 'Video Views', value: '2M+' },
      { metric: 'Engagement Rate', value: '18%' },
      { metric: 'Brand Awareness', value: '+150%' }
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', '4K Production'],
    duration: '2 months',
    year: '2024'
  }
]

// Case studies from the section component
const sectionCaseStudies = [
  {
    id: 1,
    title: "AthleGame Esports",
    tagline: "Leveling up the future of gaming and athleticism",
    description: "An esports team and community owned by Ghreatness Labs, dedicated to promoting competitive gaming and athleticism while nurturing emerging talent.",
    users: "77+ athletes",
    rating: 4.3,
    type: "Website",
    image: "/images/esports/45f992fa-b197-45d2-9644-4a4d716d5667.jpeg",
    color: "from-purple-600 to-pink-600",
    achievements: [
      "Continental esports powerhouse",
      "Structured training programs",
      "Custom esports platform",
      "Lifestyle brand development"
    ],
    technologies: ["React", "Node.js", "WebRTC", "Socket.io"],
    metrics: {
      engagement: "95%",
      growth: "300%",
      retention: "87%"
    }
  },
  {
    id: 2,
    title: "Civyn",
    tagline: "Where students meet careers",
    description: "A dynamic student hub connecting students to internships, jobs, and career development opportunities, bridging the gap between education and employment.",
    users: "700+ community members",
    rating: 4.7,
    type: "Web Platform",
    image: "/images/logos/civyn.png",
    color: "from-blue-600 to-cyan-600",
    achievements: [
      "Direct access to verified internships",
      "Professional networking platform",
      "Skill development resources",
      "Industry expert mentorship"
    ],
    technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    metrics: {
      placements: "85%",
      satisfaction: "4.7/5",
      partnerships: "50+"
    }
  },
  {
    id: 3,
    title: "Univyx",
    tagline: "Redefining the private university experience",
    description: "A dedicated student hub designed to enhance the private university experience, offering academic resources, networking, and engagement opportunities for students.",
    users: "Projected 100,000 students",
    rating: 4.9,
    type: "Web & Software App",
    image: "/images/logos/univyx.png",
    color: "from-green-600 to-teal-600",
    achievements: [
      "Academic resource platform",
      "Student networking hub",
      "Engagement opportunities",
      "University integration"
    ],
    technologies: ["React Native", "GraphQL", "MongoDB", "Firebase"],
    metrics: {
      adoption: "92%",
      engagement: "88%",
      satisfaction: "4.9/5"
    }
  }
]

function CaseStudiesContent() {
  const searchParams = useSearchParams()
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null)
  
  useEffect(() => {
    const studyParam = searchParams.get('study')
    if (studyParam) {
      const studyId = parseInt(studyParam)
      const study = sectionCaseStudies.find(s => s.id === studyId)
      if (study) {
        setSelectedStudy(studyId)
      }
    }
  }, [searchParams])

  // If a specific study is selected, show detailed view
  if (selectedStudy) {
    const study = sectionCaseStudies.find(s => s.id === selectedStudy)
    if (study) {
      return (
        <div className="min-h-screen pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span>Back to Case Studies</span>
              </button>
            </motion.div>

            {/* Detailed Study View */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-12 rounded-3xl"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Study Image */}
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`} />
                  </div>
                </div>

                {/* Study Details */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-4">{study.title}</h1>
                    <p className="text-blue-400 text-lg font-medium mb-6">{study.tagline}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{study.description}</p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {study.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Project Metrics</h4>
                    <div className="grid gap-4">
                      {Object.entries(study.metrics).map(([key, value], index) => (
                        <div key={key} className="glass p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 capitalize">{key}</span>
                            <span className="text-2xl font-bold text-blue-400">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Award size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Success Stories</span>
          </motion.div>

          <h1 className="heading-lg gradient-text mb-6">
            Case Studies
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects and discover how we've helped businesses 
            transform their digital presence and achieve remarkable results.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500/20 to-purple-600/20' : 'from-purple-500/20 to-pink-600/20'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                  {study.year}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Award size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                    {study.category}
                  </span>
                  <span className="text-gray-400 text-sm">{study.client}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{result.value}</div>
                      <div className="text-xs text-gray-400">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {study.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={14} />
                    {study.duration}
                  </div>
                  <button 
                    onClick={() => setSelectedStudy(study.id)}
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="text-sm">View Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="glass p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
              >
                Start Your Project
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading case studies...</p>
        </div>
      </div>
    }>
      <CaseStudiesContent />
    </Suspense>
  )
}