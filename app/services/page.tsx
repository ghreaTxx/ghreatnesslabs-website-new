'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Palette, Code, Video, Share2, Shield, Smartphone, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'UI/UX Design',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    image: '/images/services/Ghreatness Lab2.png',
    summary: 'Tailored designs that blend beauty and usability.',
    description: 'At Ghreatness Labs, we take pride in delivering UI/UX designs that are fully customized to your unique business needs. Our team of skilled designers blends creativity, innovation, and user-centered design principles to craft digital experiences that are not only visually striking but also intuitive and easy to navigate. From websites and mobile apps to complex digital platforms, we focus on creating interfaces that enhance usability, increase engagement, and strengthen your brand identity. Every design is thoughtfully developed to align with your goals, connect with your audience, and provide a seamless journey across all digital touchpoints. With Ghreatness Labs, your vision is transformed into a dynamic, interactive, and impactful digital experience that leaves a lasting impression.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing',
      'Responsive Design',
      'Design Systems'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
    pricing: 'Starting from $164'
  },
  {
    id: 2,
    title: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    image: '/images/services/Ghreatness Lab3.png',
    summary: 'Fast, secure, and responsive websites.',
    description: 'Delivering web development solutions meticulously designed to match your business\'s unique needs, Ghreatness Labs combines the latest technologies, innovative techniques, and industry best practices to create websites that are visually striking, fast, secure, and highly functional. From responsive corporate websites and e-commerce platforms to complex web applications, each project is thoughtfully crafted to enhance user experience, boost engagement, and help you achieve your business objectives. Beyond just functionality and design, we focus on creating digital experiences that reflect your brand identity, inspire trust, and foster long-term connections with your audience. By merging seamless functionality with modern design principles and scalable architecture, Ghreatness Labs transforms ideas into dynamic, reliable, and impactful digital solutions that leave a lasting impression in the online world, helping your business grow and thrive in today\'s competitive digital landscape.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization',
      'SEO Implementation'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PHP', 'WordPress'],
    pricing: 'Starting from $314'
  },
  {
    id: 3,
    title: 'Graphic Design',
    icon: Palette,
    color: 'from-purple-500 to-violet-500',
    image: '/images/services/Ghreatness Lab4.png',
    summary: 'Striking visuals that define your brand.',
    description: 'At Ghreatness Labs, we create graphic design solutions that bring your brand\'s unique identity to life. Combining creativity, modern design principles, and innovative techniques, we produce visuals that are striking, memorable, and highly effective. From logos and brand materials to digital graphics and marketing collateral, every design is carefully crafted to communicate your message clearly, engage your audience, and elevate your brand presence. By blending artistic vision with strategic thinking, Ghreatness Labs transforms concepts into compelling visual experiences that leave a lasting impression, helping your business stand out and connect with its audience in meaningful ways.',
    features: [
      'Logo & Brand Identity',
      'Marketing Materials',
      'Digital Graphics',
      'Print Design',
      'Packaging Design',
      'Brand Guidelines'
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Canva Pro', 'Sketch', 'CorelDRAW'],
    pricing: 'Starting from $23'
  },
  {
    id: 4,
    title: 'Video Editing',
    icon: Video,
    color: 'from-green-500 to-emerald-500',
    image: '/images/services/Ghreatness Lab5.png',
    summary: 'Polished videos that captivate audiences.',
    description: 'We deliver video editing solutions designed to bring your vision to life with clarity and impact. Combining creative storytelling, advanced editing techniques, and the latest software tools, we transform raw footage into engaging, professional-quality videos that captivate your audience. From promotional content and corporate videos to social media clips and multimedia presentations, every project is carefully crafted to communicate your message effectively, maintain viewer attention, and enhance your brand presence. By blending creativity with technical precision, Ghreatness Labs turns ideas into dynamic, visually stunning videos that leave a lasting impression and help your business connect with its audience on a deeper level.',
    features: [
      'Professional Video Editing',
      'Motion Graphics',
      'Color Correction',
      'Audio Enhancement',
      'Social Media Content',
      'Corporate Videos'
    ],
    technologies: ['Adobe Premiere Pro', 'After Effects', 'Final Cut Pro', 'DaVinci Resolve'],
    pricing: 'Starting from $173'
  },
  {
    id: 5,
    title: 'Social Media Marketing',
    icon: Share2,
    color: 'from-orange-500 to-red-500',
    image: '/images/services/Ghreatness Firm Socialmedia marketing-04.jpg',
    summary: 'Campaigns that grow and engage.',
    description: 'We provide social media marketing solutions designed to elevate your brand\'s presence and engagement across all digital platforms. Leveraging data-driven strategies, creative content, and cutting-edge tools, we craft campaigns that resonate with your target audience, increase visibility, and drive meaningful interactions. From content creation and platform management to analytics and performance optimization, every campaign is thoughtfully planned to achieve your business goals and strengthen your online influence. By combining strategic insights with creative storytelling, Ghreatness Labs transforms your social media presence into a powerful channel for brand awareness, customer engagement, and long-term growth.',
    features: [
      'Content Strategy & Creation',
      'Social Media Management',
      'Paid Advertising Campaigns',
      'Analytics & Reporting',
      'Community Management',
      'Influencer Partnerships'
    ],
    technologies: ['Facebook Ads', 'Google Ads', 'Instagram', 'LinkedIn', 'TikTok', 'Twitter'],
    pricing: 'Starting from $21/month'
  },
  {
    id: 6,
    title: 'Software Development',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    image: '/images/services/b2781142-6011-4e0e-96de-3cbf4c280c5a.jpeg',
    summary: 'Scalable software built for your needs.',
    description: 'At Ghreatness Labs, we deliver software development solutions tailored to solve your unique business challenges. Our team combines innovative thinking, industry best practices, and advanced technologies to design and build applications that are robust, scalable, and user-friendly. From custom business software and mobile applications to enterprise-level systems, every project is developed with precision to enhance efficiency, streamline processes, and deliver measurable results. We focus on creating software that not only meets your technical requirements but also aligns seamlessly with your business goals. By blending technical expertise with a deep understanding of user needs, Ghreatness Labs transforms ideas into reliable, high-performance software solutions that empower your business to grow and thrive in the digital era.',
    features: [
      'Custom Software Development',
      'Mobile App Development',
      'Enterprise Solutions',
      'Database Design',
      'System Integration',
      'Maintenance & Support'
    ],
    technologies: ['React Native', 'Flutter', 'Python', 'Java', 'C#', '.NET', 'MongoDB'],
    pricing: 'Starting from $480'
  },
  {
    id: 7,
    title: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    image: '/images/services/Ghreatness Firm Cybersecurity-05.jpg',
    summary: 'Protection for businesses and individuals.',
    description: 'We provide cybersecurity solutions designed to safeguard businesses and individuals from evolving digital threats. Our services include advanced threat detection, vulnerability management, data protection, and secure network architecture, ensuring your digital assets remain safe at all times. For individuals, we also offer affordable cybersecurity leasing services, granting access to premium security tools and expertise without heavy upfront costs. Whether protecting a company\'s sensitive data or securing personal devices, we combine cutting-edge technology with proactive strategies to deliver reliable, round-the-clock protection. With Ghreatness Labs, you gain the confidence to operate in the digital space securely and without compromise.',
    features: [
      'Threat Detection & Response',
      'Vulnerability Assessment',
      'Data Protection',
      'Network Security',
      'Security Audits',
      'Compliance Management'
    ],
    technologies: ['Firewall Systems', 'SIEM Tools', 'Penetration Testing', 'Encryption'],
    pricing: 'Starting from $517'
  }
]

export default function ServicesPage() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedService, setSelectedService] = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  
  // Handle URL parameter to expand specific service
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get('service')
    if (serviceParam) {
      const serviceIndex = services.findIndex(s => s.id === parseInt(serviceParam))
      if (serviceIndex !== -1) {
        setSelectedService(serviceIndex)
        setExpandedService(serviceIndex)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section ref={ref} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our
              <span className="gradient-text block">Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Website development, software solutions, design services, marketing, and more — delivering exceptional UI/UX design, 
              robust cybersecurity solutions, and innovative development experiences. Your vision, our expertise — together, let's build the future.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift cursor-pointer group"
                onClick={() => setSelectedService(index)}
              >
                <div className={`inline-block p-4 bg-gradient-to-r ${service.color} bg-opacity-20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.summary}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedService(expandedService === index ? null : index)
                    }}
                  >
                    <span className="text-sm">
                      {expandedService === index ? 'Show Less' : 'Read More'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Expanded Content */}
                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-700"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-xs text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Service Image */}
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={services[selectedService].image}
                    alt={services[selectedService].title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${services[selectedService].color} opacity-20`} />
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {services[selectedService].title}
                  </h2>
                  <p className="text-blue-400 text-lg font-medium mb-6">
                    {services[selectedService].summary}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {services[selectedService].description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {services[selectedService].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[selectedService].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      {services[selectedService].pricing}
                    </span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex justify-center space-x-3 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedService === index
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results every time
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Strategy', desc: 'Crafting the perfect solution approach' },
              { step: '03', title: 'Development', desc: 'Building with precision and care' },
              { step: '04', title: 'Launch', desc: 'Delivering and supporting your success' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}