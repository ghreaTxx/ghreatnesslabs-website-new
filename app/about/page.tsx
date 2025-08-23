'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Zap, Globe, Award, TrendingUp, Code, Palette, Shield, Smartphone, User, Crown, Settings, Megaphone } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Clients', value: '1000+', icon: Users },
  { label: 'Industry Experts', value: '50', icon: Award },
  { label: 'Years Experience', value: '1+', icon: TrendingUp },
  { label: 'Projects Completed', value: '500+', icon: Target }
]

const services = [
  {
    title: 'UI/UX Design',
    description: 'Tailored designs that blend beauty and usability.',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    stats: [{ label: 'Projects', value: '200+' }, { label: 'Satisfaction', value: '98%' }],
    features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design Systems', 'Usability Testing']
  },
  {
    title: 'Web Development',
    description: 'Fast, secure, and responsive websites.',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    stats: [{ label: 'Websites Built', value: '150+' }, { label: 'Uptime', value: '99.9%' }],
    features: ['React & Next.js', 'Full-Stack Development', 'E-commerce Solutions', 'CMS Integration']
  },
  {
    title: 'Graphic Design',
    description: 'Striking visuals that define your brand.',
    icon: Palette,
    color: 'from-purple-500 to-indigo-500',
    stats: [{ label: 'Designs Created', value: '500+' }, { label: 'Brands Served', value: '100+' }],
    features: ['Brand Identity Design', 'Logo Creation', 'Marketing Materials', 'Digital Graphics']
  },
  {
    title: 'Video Editing',
    description: 'Polished videos that captivate audiences.',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500',
    stats: [{ label: 'Videos Edited', value: '300+' }, { label: 'Watch Time', value: '10M+ hrs' }],
    features: ['Professional Editing', 'Motion Graphics', 'Color Grading', 'Audio Enhancement']
  },
  {
    title: 'Social Media Marketing',
    description: 'Campaigns that grow and engage.',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    stats: [{ label: 'Campaigns Run', value: '250+' }, { label: 'Engagement Rate', value: '8.5%' }],
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    title: 'Software Development',
    description: 'Scalable software built for your needs.',
    icon: Code,
    color: 'from-teal-500 to-blue-500',
    stats: [{ label: 'Apps Built', value: '80+' }, { label: 'Users Served', value: '1M+' }],
    features: ['Custom Applications', 'Mobile Development', 'Cloud Solutions', 'Database Design']
  },
  {
    title: 'Cybersecurity',
    description: 'Protection for businesses and individuals.',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    stats: [{ label: 'Systems Secured', value: '500+' }, { label: 'Threats Blocked', value: '99.8%' }],
    features: ['Threat Detection', 'Vulnerability Assessment', 'Data Protection', 'Network Security']
  }
]

const team = [
  {
    name: 'Tunde Olamide Charles',
    role: 'CEO',
    icon: Crown,
    color: 'from-yellow-500 to-orange-500',
    expertise: ['Cybersecurity Expert', 'Cloud Security Engineer', 'Penetration Testing', 'IT Leadership', 'Project Management', 'Business Strategy', 'Esports Enthusiast'],
    certifications: '61+ Tech Certifications'
  },
  {
    name: 'Olaniyan Moyosore',
    role: 'COO',
    icon: Settings,
    color: 'from-blue-500 to-cyan-500',
    expertise: ['Web Development', 'Media Creative', 'Strategic Planning', 'Technology Expert', 'Esports Enthusiast'],
    certifications: 'Tech Enthusiast'
  },
  {
    name: 'Olawale Timileyin Emmanuel',
    role: 'CTO',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    expertise: ['Web3 Expert', 'Cybersecurity Expert', 'Innovation Leader', 'Creative Technology', 'Esports Enthusiast'],
    certifications: 'Technology Innovator'
  },
  {
    name: 'Janet Anderson',
    role: 'Marketing Advisor',
    icon: Megaphone,
    color: 'from-green-500 to-emerald-500',
    expertise: ['Marketing Strategy', 'Brand Development', 'Digital Marketing', 'Growth Strategy'],
    certifications: 'Marketing Expert'
  }
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About
                <span className="gradient-text block">Ghreatness Labs</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Ghreatness Labs is a premier digital and IT solutions provider, empowering businesses to thrive in the ever-evolving online landscape. Operating on a Platform-as-a-Service (PaaS) model, we offer a consolidated solution combining multiple essential services under one roof, providing a one-stop hub for all your digital and IT needs. This streamlined approach allows businesses to focus on their core operations while we seamlessly handle their digital transformation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Our Services
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="glass p-8 rounded-2xl">
                  <Image
                    src="/about.jpeg"
                    alt="Ghreatness Labs Team"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/about/Ghreatness Lab1.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                </div>
                <div className="absolute -bottom-4 -right-4 glass p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-300">Innovating Since 2023</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering exceptional results across industries and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover-lift"
              >
                <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses and individuals with cutting-edge technology solutions that drive growth and innovation. 
                We provide comprehensive digital services, build robust technological foundations, and deliver strategic solutions 
                that transform challenges into opportunities for sustainable success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="inline-block p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology solutions provider that bridges the gap between innovation and implementation, 
                creating digital experiences that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and accelerate growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
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
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift group"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-r ${member.color} bg-opacity-20 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-blue-400 mb-4">{member.certifications}</p>
                    <div className="space-y-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Join the Community
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with our latest projects, insights, and opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}