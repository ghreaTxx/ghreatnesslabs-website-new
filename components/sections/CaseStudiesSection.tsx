'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Star, Globe, Smartphone, Trophy, Target, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const caseStudies = [
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

export function CaseStudiesSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedCase, setSelectedCase] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="cyber-grid opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6"
          >
            <Trophy className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <h2 className="heading-xl gradient-text mb-6">
            Success Stories
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed ideas into digital experiences that drive real results for our clients
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`glass p-8 rounded-2xl hover-lift cursor-pointer transition-all duration-500 ${
                selectedCase === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedCase(index)}>
                {/* Project Image */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`} />
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/gallery/1.png';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                      {study.type}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-blue-400 font-medium">{study.tagline}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{study.description}</p>

                  {/* Metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">{study.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{study.rating}</span>
                      </div>
                    </div>
                    
                    <Link href={`/case-studies?study=${study.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                {mounted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {caseStudies[selectedCase].title}
                </h3>
                <p className="text-blue-400 text-lg font-medium">
                  {caseStudies[selectedCase].tagline}
                </p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {caseStudies[selectedCase].description}
              </p>

              {/* Achievements */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                <div className="grid grid-cols-2 gap-3">
                  {caseStudies[selectedCase].achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[selectedCase].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6">Project Metrics</h4>
              
              <div className="grid gap-4">
                {Object.entries(caseStudies[selectedCase].metrics).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-4 rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 capitalize">{key}</span>
                      <span className="text-2xl font-bold text-blue-400">{value}</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${parseInt(value)}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={`/case-studies?study=${caseStudies[selectedCase].id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary mt-6"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="glass p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="inline-block p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-8"
            >
              <Target className="w-10 h-10 text-green-400" />
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our
              <span className="gradient-text block">Success Stories?</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 mx-auto w-fit"
              >
                Start Your Project Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Link>
            </motion.div>
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}