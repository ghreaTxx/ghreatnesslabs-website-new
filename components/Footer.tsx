'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Globe,
  Code,
  Palette,
  Shield,
  Smartphone
} from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'UI/UX Design', href: '/services#uiux' },
    { name: 'Web Development', href: '/services#web' },
    { name: 'Mobile Apps', href: '/services#mobile' },
    { name: 'Graphic Design', href: '/services#graphic' },
    { name: 'Video Editing', href: '/services#video' },
    { name: 'Social Media Marketing', href: '/services#social' },
    { name: 'Software Development', href: '/services#software' },
    { name: 'Cybersecurity', href: '/services#security' }
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '/contact' }
  ],
  projects: [
    { name: 'AthleGame Esports', href: '#' },
    { name: 'Civyn Platform', href: '#' },
    { name: 'Univyx Hub', href: '#' },
    { name: 'All Projects', href: '#' }
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ghreatnesslabs', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ghreatnesslabs', color: 'hover:text-sky-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ghreatnesslabs', color: 'hover:text-pink-500' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ghreatnesslabs', color: 'hover:text-blue-600' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@ghreatnesslabs', color: 'hover:text-red-500' }
]

const quickStats = [
  { label: 'Happy Clients', value: '1000+', icon: Globe },
  { label: 'Projects Completed', value: '500+', icon: Code },
  { label: 'Team Members', value: '50+', icon: Palette },
  { label: 'Countries Served', value: '25+', icon: Shield }
]

export function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <footer ref={ref} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.05),transparent_50%)]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-blue-500/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-purple-500/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 border-b border-gray-800"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Stay Updated with Ghreatness Labs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get the latest insights, project updates, and industry trends delivered to your inbox
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                <span>Subscribe</span>              <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Join 5,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16 border-b border-gray-800"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <div className="h-16 w-auto glass p-3 shadow-sm mb-4 inline-block">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Ghreatness Labs"
                    width={200}
                    height={40}
                    className="object-contain h-full w-auto rounded-lg"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Empowering businesses with cutting-edge digital solutions. From innovative web development 
                  to comprehensive cybersecurity, we transform visions into reality.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">08164816721</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">support@ghreatnesslabs.com.ng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Lagos, Nigeria (Remote Team Worldwide)</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-white mb-6 mt-8">Projects</h3>
              <ul className="space-y-3">
                {footerLinks.projects.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Ghreatness Labs. All rights reserved. Built with ❤️ in Nigeria.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}