'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Palette, Code, Video, TrendingUp, Smartphone, Shield, ChevronRight, Star, Layers, ArrowRight } from 'lucide-react'
import { useSiteData } from '@/components/useSiteData'
import type { ManagedService } from '@/lib/site-data'

const icons = { Palette, Code, Layers, Video, TrendingUp, Smartphone, Shield }

type Service = ManagedService & { icon: typeof Palette }

function ServiceCard({ service, index }: { 
  service: Service
  index: number
}) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative"
    >
      <Link href={`/services?service=${service.id}`} className="block">
        <motion.div
          whileHover={{ y: -10, rotateY: 5 }}
          className="relative glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
        >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${service.color.includes('pink') ? '#ec4899' : 
                                                                   service.color.includes('blue') ? '#3b82f6' : 
                                                                   service.color.includes('purple') ? '#8b5cf6' : 
                                                                   service.color.includes('green') ? '#10b981' : 
                                                                   service.color.includes('orange') ? '#f97316' : 
                                                                   service.color.includes('teal') ? '#14b8a6' : '#ef4444'} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${service.color.includes('pink') ? '#f43f5e' : 
                                                                   service.color.includes('blue') ? '#06b6d4' : 
                                                                   service.color.includes('purple') ? '#6366f1' : 
                                                                   service.color.includes('green') ? '#059669' : 
                                                                   service.color.includes('orange') ? '#ef4444' : 
                                                                   service.color.includes('teal') ? '#3b82f6' : '#ec4899'} 0%, transparent 50%)`
          }} />
        </div>

        {/* Icon Container */}
        <div className="relative mb-6">
          <motion.div
            className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <service.icon size={32} className="text-white" />
          </motion.div>
        </div>

        {/* Service Title */}
        <motion.h3 
          className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
        >
          {service.title}
        </motion.h3>

        {/* Short Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-6">
          {service.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {service.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
              {feature}
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <span className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
            {service.pricing}
          </span>
        </div>



        {/* Read More Button */}
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className={`w-full mt-6 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl cursor-pointer`}
        >
          Read More
          <ChevronRight size={16} />
        </motion.div>

        </motion.div>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const { services: managedServices } = useSiteData()
  const services = managedServices.map((service) => ({
    ...service,
    icon: icons[service.iconName] || Code,
  }))

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.08 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Star size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Our Expertise</span>
          </motion.div>

          <h2 className="heading-lg gradient-text mb-6">
            Our Services
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and accelerate growth 
            through cutting-edge technology and innovative strategies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <div className="glass p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our services can help you achieve your goals and drive growth.
            </p>
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:from-blue-400 hover:to-purple-500 flex items-center gap-2 mx-auto group w-fit"
              >
                Start Your Project Today
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={20} className="group-hover:animate-pulse" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}