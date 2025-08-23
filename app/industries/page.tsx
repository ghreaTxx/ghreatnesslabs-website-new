'use client'

import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Heart, GraduationCap, Car, Plane, Factory, Gamepad2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    description: 'Digital solutions for hospitals, clinics, and healthcare providers.',
    services: ['Patient Management Systems', 'Telemedicine Platforms', 'Medical Records', 'Healthcare Analytics'],
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    icon: ShoppingCart,
    description: 'Complete online retail solutions and marketplace platforms.',
    services: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Customer Analytics'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    description: 'Learning management systems and educational technology.',
    services: ['LMS Platforms', 'Online Courses', 'Student Portals', 'Educational Apps'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'fintech',
    title: 'Financial Services',
    icon: Building2,
    description: 'Secure financial technology and banking solutions.',
    services: ['Banking Apps', 'Payment Systems', 'Investment Platforms', 'Blockchain Solutions'],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    icon: Car,
    description: 'Digital solutions for automotive industry and dealerships.',
    services: ['Dealership Management', 'Vehicle Tracking', 'Service Booking', 'Fleet Management'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'esports',
    title: 'Esports & Gaming',
    icon: Gamepad2,
    description: 'Gaming platforms and esports tournament management.',
    services: ['Tournament Platforms', 'Gaming Communities', 'Live Streaming', 'Player Analytics'],
    color: 'from-teal-500 to-blue-500'
  }
]

export default function IndustriesPage() {
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
            <Factory size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Industry Expertise</span>
          </motion.div>

          <h1 className="heading-lg gradient-text mb-6">
            Industries We Serve
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide specialized digital solutions across various industries, 
            understanding unique challenges and delivering tailored technology solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Icon Header */}
              <div className={`relative h-32 bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                >
                  <industry.icon size={32} className="text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {industry.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Services */}
                <div className="space-y-2 mb-6">
                  {industry.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                      {service}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight size={14} />
                </button>
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
              Don't See Your Industry?
            </h3>
            <p className="text-gray-300 mb-6">
              We work with businesses across all sectors. Contact us to discuss your specific industry needs.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
              >
                Get In Touch
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}