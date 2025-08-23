'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, Home, Briefcase, Building, FileText, Users, Phone } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Industries', href: '/industries', icon: Building },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Company', href: '/company', icon: Building },
    { name: 'Contact', href: '/contact', icon: Phone }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-auto glass p-2 shadow-sm">
              <Image
                src="https://ghreatnesslab.vercel.app/assets/GhreatnessLabsLogo-2IaUT3cV.png"
                alt="Ghreatness Labs"
                width={400}
                height={40}
                className="object-contain h-full w-auto brightness-0 invert brightness-200"
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700/50 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700 z-50 md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">GL</span>
                  </div>
                  <span className="text-white font-semibold">Menu</span>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                        <item.icon size={18} className="text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <ArrowRight size={16} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-3">Ready to get started?</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      setIsOpen(false)
                      window.location.href = '/contact'
                    }}
                  >
                    Start Your Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}