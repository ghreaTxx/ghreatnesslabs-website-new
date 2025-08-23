'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Globe, Zap, Shield, Heart, Star, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'David Okafor',
    role: 'CEO & Founder',
    image: '/images/team/ceo.jpg',
    bio: 'Visionary leader with 10+ years in tech innovation and business strategy.',
    expertise: ['Strategic Planning', 'Business Development', 'Innovation']
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: '/images/team/cto.jpg',
    bio: 'Technical expert specializing in cutting-edge software architecture.',
    expertise: ['Software Architecture', 'AI/ML', 'Cloud Computing']
  },
  {
    name: 'Michael Chen',
    role: 'Lead Designer',
    image: '/images/team/designer.jpg',
    bio: 'Creative director with expertise in UI/UX and brand design.',
    expertise: ['UI/UX Design', 'Brand Identity', 'User Research']
  },
  {
    name: 'Amara Okonkwo',
    role: 'Marketing Director',
    image: '/images/team/marketing.jpg',
    bio: 'Digital marketing strategist with proven track record in growth.',
    expertise: ['Digital Marketing', 'Growth Strategy', 'Analytics']
  }
]

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Our clients success is our success. We build lasting partnerships based on trust and results.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We create solutions that make a positive impact on businesses and communities worldwide.'
  }
]

const achievements = [
  { number: '1000+', label: 'Projects Completed' },
  { number: '500+', label: 'Happy Clients' },
  { number: '50+', label: 'Team Members' },
  { number: '5+', label: 'Years Experience' }
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Heart size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">About Ghreatness Labs</span>
          </motion.div>

          <h1 className="heading-lg gradient-text mb-6">
            Empowering Digital Transformation
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            At Ghreatness Labs, we are passionate about transforming businesses through innovative 
            technology solutions. Founded with a vision to bridge the gap between cutting-edge 
            technology and practical business needs, we have grown into a trusted partner for 
            companies seeking digital excellence.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
                <div className="text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-8 rounded-3xl border border-white/10"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              enhance efficiency, and create meaningful digital experiences. We are committed 
              to delivering exceptional value through innovation, expertise, and unwavering 
              dedication to our clients success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="glass p-8 rounded-3xl border border-white/10"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading technology partner for businesses across Africa and beyond, 
              recognized for our innovative solutions, exceptional service, and positive impact 
              on the digital transformation landscape. We envision a future where technology 
              seamlessly enhances every aspect of business operations.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="glass p-6 rounded-2xl border border-white/10 text-center hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Ghreatness Labs?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              What sets us apart in the competitive technology landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                'Proven track record with 1000+ successful projects',
                'Expert team with diverse technical expertise',
                'Client-centric approach with 98% satisfaction rate',
                'Cutting-edge technology and innovative solutions',
                'Comprehensive support and maintenance services',
                'Competitive pricing with transparent communication'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="glass p-8 rounded-3xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We are committed to delivering exceptional results that exceed expectations. 
                Our success is measured by the success of our clients, and we take pride in 
                building long-term partnerships based on trust, transparency, and mutual growth.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-gray-800" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">4.9/5 Client Rating</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <div className="glass p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                >
                  Get Started Today
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  View Our Services
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}