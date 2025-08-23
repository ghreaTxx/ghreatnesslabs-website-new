'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { Palette, Code, Globe, Video, TrendingUp, Smartphone, Shield, ChevronRight, Star, Users, Award, Zap, Eye, MousePointer, Layers, Database, Lock, Camera, Share2, BarChart3, ArrowRight } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import Image from 'next/image'

interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: any
  color: string
  gradient: string
  features: string[]
  stats: { label: string; value: string }[]
  image: string
  pricing: string
}

const services: Service[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    shortDescription: 'Tailored designs that blend beauty and usability.',
    fullDescription: 'At Ghreatness Labs, we take pride in delivering UI/UX designs that are fully customized to your unique business needs. Our team of skilled designers blends creativity, innovation, and user-centered design principles to craft digital experiences that are not only visually striking but also intuitive and easy to navigate. From websites and mobile apps to complex digital platforms, we focus on creating interfaces that enhance usability, increase engagement, and strengthen your brand identity. Every design is thoughtfully developed to align with your goals, connect with your audience, and provide a seamless journey across all digital touchpoints. With Ghreatness Labs, your vision is transformed into a dynamic, interactive, and impactful digital experience that leaves a lasting impression.',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    gradient: 'from-pink-500/20 to-rose-500/20',
    features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design Systems', 'Usability Testing', 'Mobile-First Design', 'Accessibility Compliance'],
    stats: [{ label: 'Projects', value: '200+' }, { label: 'Satisfaction', value: '98%' }],
    image: '/images/services/Ghreatness Lab2.png',
    pricing: 'Starting from $164'
  },
  {
    id: 'web',
    title: 'Web Development',
    shortDescription: 'Fast, secure, and responsive websites.',
    fullDescription: 'Delivering web development solutions meticulously designed to match your business\'s unique needs, Ghreatness Labs combines the latest technologies, innovative techniques, and industry best practices to create websites that are visually striking, fast, secure, and highly functional. From responsive corporate websites and e-commerce platforms to complex web applications, each project is thoughtfully crafted to enhance user experience, boost engagement, and help you achieve your business objectives. Beyond just functionality and design, we focus on creating digital experiences that reflect your brand identity, inspire trust, and foster long-term connections with your audience.',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    features: ['React & Next.js', 'Full-Stack Development', 'E-commerce Solutions', 'CMS Integration', 'API Development', 'Performance Optimization'],
    stats: [{ label: 'Websites Built', value: '150+' }, { label: 'Uptime', value: '99.9%' }],
    image: '/images/services/Ghreatness Lab3.png',
    pricing: 'Starting from $314'
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    shortDescription: 'Striking visuals that define your brand.',
    fullDescription: 'At Ghreatness Labs, we create graphic design solutions that bring your brand\'s unique identity to life. Combining creativity, modern design principles, and innovative techniques, we produce visuals that are striking, memorable, and highly effective. From logos and brand materials to digital graphics and marketing collateral, every design is carefully crafted to communicate your message clearly, engage your audience, and elevate your brand presence. By blending artistic vision with strategic thinking, Ghreatness Labs transforms concepts into compelling visual experiences that leave a lasting impression, helping your business stand out and connect with its audience in meaningful ways.',
    icon: Layers,
    color: 'from-purple-500 to-indigo-500',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    features: ['Brand Identity Design', 'Logo Creation', 'Marketing Materials', 'Digital Graphics', 'Print Design', 'Brand Guidelines'],
    stats: [{ label: 'Designs Created', value: '500+' }, { label: 'Brands Served', value: '100+' }],
    image: '/images/services/Ghreatness Lab4.png',
    pricing: 'Starting from $23'
  },
  {
    id: 'video',
    title: 'Video Editing',
    shortDescription: 'Polished videos that captivate audiences.',
    fullDescription: 'We deliver video editing solutions designed to bring your vision to life with clarity and impact. Combining creative storytelling, advanced editing techniques, and the latest software tools, we transform raw footage into engaging, professional-quality videos that captivate your audience. From promotional content and corporate videos to social media clips and multimedia presentations, every project is carefully crafted to communicate your message effectively, maintain viewer attention, and enhance your brand presence. By blending creativity with technical precision, Ghreatness Labs turns ideas into dynamic, visually stunning videos that leave a lasting impression and help your business connect with its audience on a deeper level.',
    icon: Video,
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-500/20 to-emerald-500/20',
    features: ['Professional Editing', 'Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Social Media Formats', '4K Production'],
    stats: [{ label: 'Videos Edited', value: '300+' }, { label: 'Watch Time', value: '10M+ hrs' }],
    image: '/images/services/Ghreatness Lab5.png',
    pricing: 'Starting from $173'
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    shortDescription: 'Campaigns that grow and engage.',
    fullDescription: 'We provide social media marketing solutions designed to elevate your brand\'s presence and engagement across all digital platforms. Leveraging data-driven strategies, creative content, and cutting-edge tools, we craft campaigns that resonate with your target audience, increase visibility, and drive meaningful interactions. From content creation and platform management to analytics and performance optimization, every campaign is thoughtfully planned to achieve your business goals and strengthen your online influence. By combining strategic insights with creative storytelling, Ghreatness Labs transforms your social media presence into a powerful channel for brand awareness, customer engagement, and long-term growth.',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-500/20 to-red-500/20',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting', 'Influencer Partnerships', 'Brand Monitoring'],
    stats: [{ label: 'Campaigns Run', value: '250+' }, { label: 'Engagement Rate', value: '8.5%' }],
    image: '/images/services/Ghreatness Firm Socialmedia marketing-04.jpg',
    pricing: 'Starting from $21/month'
  },
  {
    id: 'software',
    title: 'Software Development',
    shortDescription: 'Scalable software built for your needs.',
    fullDescription: 'At Ghreatness Labs, we deliver software development solutions tailored to solve your unique business challenges. Our team combines innovative thinking, industry best practices, and advanced technologies to design and build applications that are robust, scalable, and user-friendly. From custom business software and mobile applications to enterprise-level systems, every project is developed with precision to enhance efficiency, streamline processes, and deliver measurable results. We focus on creating software that not only meets your technical requirements but also aligns seamlessly with your business goals. By blending technical expertise with a deep understanding of user needs, Ghreatness Labs transforms ideas into reliable, high-performance software solutions that empower your business to grow and thrive in the digital era.',
    icon: Smartphone,
    color: 'from-teal-500 to-blue-500',
    gradient: 'from-teal-500/20 to-blue-500/20',
    features: ['Custom Applications', 'Mobile Development', 'Cloud Solutions', 'Database Design', 'API Integration', 'DevOps & Deployment'],
    stats: [{ label: 'Apps Built', value: '80+' }, { label: 'Users Served', value: '1M+' }],
    image: '/images/services/Ghreatness Firm-01.jpg',
    pricing: 'Starting from $480'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Protection for businesses and individuals.',
    fullDescription: 'We provide cybersecurity solutions designed to safeguard businesses and individuals from evolving digital threats. Our services include advanced threat detection, vulnerability management, data protection, and secure network architecture, ensuring your digital assets remain safe at all times. For individuals, we also offer affordable cybersecurity leasing services, granting access to premium security tools and expertise without heavy upfront costs.',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    gradient: 'from-red-500/20 to-pink-500/20',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Data Protection', 'Network Security', 'Compliance Auditing', '24/7 Monitoring'],
    stats: [{ label: 'Systems Secured', value: '500+' }, { label: 'Threats Blocked', value: '99.8%' }],
    image: '/images/services/Ghreatness Firm Cybersecurity-05.jpg',
    pricing: 'Starting from $517'
  }
]

function Service3D({ color }: { color: string }) {
  const colorValue = color.includes('pink') ? '#ec4899' : 
                    color.includes('blue') ? '#3b82f6' : 
                    color.includes('purple') ? '#8b5cf6' : 
                    color.includes('green') ? '#10b981' : 
                    color.includes('orange') ? '#f97316' : 
                    color.includes('teal') ? '#14b8a6' : '#ef4444'
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[0.5, 32, 32]} scale={1.5}>
        <MeshDistortMaterial
          color={colorValue}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

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
      transition={{ duration: 0.8, delay: index * 0.2 }}
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
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
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
          transition={{ delay: 1.5 }}
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