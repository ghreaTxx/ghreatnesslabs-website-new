'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Users, CheckCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    value: '08164816721',
    description: 'Help Desk - Available 24/7',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Mail,
    title: 'Email Support',
    value: 'support@ghreatnesslabs.com.ng',
    description: 'We respond within 2 hours',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    value: 'Lagos, Nigeria',
    description: 'Remote team worldwide',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Website',
    value: 'www.ghreatnesslabs.com.ng',
    description: 'Visit our main site',
    color: 'from-orange-500 to-red-500'
  }
]

const globalOffices = [
  { country: 'Nigeria', city: 'Lagos', role: 'Headquarters' },
  { country: 'Kuwait', city: 'Kuwait City', role: 'Middle East Operations' },
  { country: 'Thailand', city: 'Bangkok', role: 'Asia Pacific' },
  { country: 'Germany', city: 'Berlin', role: 'European Operations' },
  { country: 'India', city: 'Mumbai', role: 'Development Center' },
  { country: 'United Kingdom', city: 'London', role: 'European Hub' },
  { country: 'United States', city: 'New York', role: 'Americas Operations' }
]

export default function ContactPage() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          urgency: 'normal'
        })
      }, 3000)
    }, 2000)
  }

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
              Get In
              <span className="gradient-text block">Touch</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We're here to help. Reach out to our global team 
              and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover-lift group cursor-pointer"
              >
                <div className={`inline-block p-4 bg-gradient-to-r ${method.color} bg-opacity-20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{method.value}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Subject and Urgency */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="How can we help?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Urgency Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      >
                        <option value="low">Low Priority</option>
                        <option value="normal">Normal</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  
                  <p className="text-gray-300">
                    Thank you for reaching out. We'll get back to you within 2 hours during business hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Response Time */}
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Response Time</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  We pride ourselves on quick response times and excellent customer service.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email Response:</span>
                    <span className="text-green-400">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Phone Support:</span>
                    <span className="text-green-400">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Project Consultation:</span>
                    <span className="text-green-400">Same day</span>
                  </div>
                </div>
              </div>

              {/* Global Presence */}
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Global Presence</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our remote team spans across multiple continents, ensuring round-the-clock support.
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {globalOffices.slice(0, 4).map((office, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-400">{office.country}</span>
                      <span className="text-blue-400">{office.city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Follow Us</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Stay connected with us on social media for updates and insights.
                </p>
                <div className="flex space-x-4">
                  {['Instagram', 'Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                    <motion.a
                      key={platform}
                      href={`https://${platform.toLowerCase()}.com/ghreatnesslabs`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-400 hover:text-white transition-colors"
                    >
                      {platform.charAt(0)}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity, but most projects are completed within 2-12 weeks."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, we offer comprehensive maintenance and support packages for all our projects."
              },
              {
                q: "Can you work with our existing team?",
                a: "Absolutely! We collaborate seamlessly with in-house teams and other vendors."
              },
              {
                q: "What technologies do you specialize in?",
                a: "We work with modern technologies including React, Next.js, Python, Node.js, and more."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}