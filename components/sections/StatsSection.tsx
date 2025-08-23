'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, Award, Clock, Globe, Zap, Shield, Code, TrendingUp, ArrowRight } from 'lucide-react'
import CountUp from 'react-countup'
import Link from 'next/link'

interface StatCardProps {
  icon: React.ComponentType<any>
  number: number
  suffix?: string
  label: string
  description: string
  delay: number
  gradient: string
}

function StatCard({ icon: Icon, number, suffix = '', label, description, delay, gradient }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setStartAnimation(true), delay * 1000)
    }
  }, [isInView, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
        
        {/* Icon Container */}
        <motion.div
          animate={startAnimation ? { 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300`}
        >
          <Icon size={32} className="text-white" />
        </motion.div>

        {/* Number Display */}
        <div className="mb-4">
          <motion.div
            className="text-5xl font-bold text-white mb-2"
            initial={{ scale: 0 }}
            animate={startAnimation ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {startAnimation ? (
              <CountUp
                end={number}
                duration={2.5}
                separator=","
                suffix={suffix}
                useEasing={true}
              />
            ) : (
              0
            )}
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0 }}
            animate={startAnimation ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold text-blue-300 mb-3"
          >
            {label}
          </motion.h3>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-gray-400 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(45deg, transparent, ${gradient.includes('blue') ? '#3b82f6' : gradient.includes('purple') ? '#8b5cf6' : '#f59e0b'}, transparent)`,
            padding: '2px',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          }}
          animate={startAnimation ? {
            rotate: [0, 360],
          } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" })

  const stats = [
    {
      icon: Users,
      number: 1000,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses worldwide trust us with their digital transformation journey, from startups to enterprise solutions.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Award,
      number: 50,
      suffix: '',
      label: 'Industry Experts',
      description: 'Our diverse team of specialists brings decades of combined experience across multiple technology domains.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Clock,
      number: 1,
      suffix: '+',
      label: 'Years Experience',
      description: 'Delivering cutting-edge solutions with proven methodologies and innovative approaches to complex challenges.',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      icon: Globe,
      number: 7,
      suffix: '',
      label: 'Countries Served',
      description: 'Global presence with team members in Nigeria, Kuwait, Thailand, Germany, India, UK, and USA.',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: Zap,
      number: 99,
      suffix: '%',
      label: 'Success Rate',
      description: 'Exceptional project delivery rate with client satisfaction and long-term partnership focus.',
      gradient: 'from-yellow-500 to-yellow-700',
    },
    {
      icon: Shield,
      number: 24,
      suffix: '/7',
      label: 'Security Support',
      description: 'Round-the-clock cybersecurity monitoring and support for all our enterprise clients.',
      gradient: 'from-red-500 to-red-700',
    },
  ]

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
      
      {/* Animated Grid Background */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <TrendingUp size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Our Impact in Numbers</span>
          </motion.div>

          <h2 className="heading-lg gradient-text mb-6">
            Trusted by Businesses Worldwide
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the numbers. From successful project deliveries 
            to satisfied clients across the globe, these metrics showcase our dedication to transforming 
            businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index * 0.2}
              gradient={stat.gradient}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:from-blue-400 hover:to-purple-500 flex items-center gap-2 mx-auto w-fit"
              >
                Start Your Project Today
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-purple-500/20 rounded-full"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-blue-500/20 rounded-full"
      />
    </section>
  )
}