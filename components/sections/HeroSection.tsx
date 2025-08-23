'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Globe, Shield } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'







export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])



  return (
    <section 
      ref={containerRef}
      className="min-h-[110vh] flex items-center justify-center relative overflow-hidden pt-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
    >
      
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Cutting-Edge Technology Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="heading-xl gradient-text leading-tight"
          >
            Empowering Businesses with{' '}
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Cutting-Edge Solutions
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            Website development, software solutions, design services, marketing, and more
            delivering exceptional UI/UX design, robust cybersecurity solutions, and innovative 
            development experiences. Your vision, our expertise together, let's build the future.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: Zap, text: "Lightning Fast" },
              { icon: Shield, text: "Secure & Reliable" },
              { icon: Globe, text: "Global Reach" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg backdrop-blur-sm">
                <feature.icon size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link href="/company">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white flex items-center gap-2"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span>Learn More</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-8 justify-center lg:justify-start pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50</div>
              <div className="text-sm text-gray-400">Industry Experts</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[400px] sm:h-[500px] lg:h-[600px] relative order-last lg:order-last"
        >
          <div className="relative h-full rounded-3xl overflow-hidden">
            <Image
              src="https://ghreatnesslab.vercel.app/assets/aboutCover-By__m7AD.png"
              alt="Ghreatness Labs Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 glass p-4 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white">System Online</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-10 glass p-4 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm text-white">AI Powered</span>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />
    </section>
  )
}