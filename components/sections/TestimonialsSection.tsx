'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "They didn't just give us a website; they gave us a tool that drives revenue and builds brand trust. Exceptional work.",
    author: "Chidinma O.",
    position: "CEO at BrightPath Consults",
    rating: 5,
    company: "BrightPath Consults",
    industry: "Consulting"
  },
  {
    id: 2,
    text: "From our first meeting to the final launch, their professionalism was unmatched. They turned our vision into a platform we're proud of.",
    author: "Obinna K.",
    position: "Founder at GreenTech Africa",
    rating: 5,
    company: "GreenTech Africa",
    industry: "Technology"
  },
  {
    id: 3,
    text: "Their creativity and attention to detail exceeded expectations. The website they built has transformed how we connect with our clients.",
    author: "Amarachi N.",
    position: "Managing Partner at EliteCare Solutions",
    rating: 5,
    company: "EliteCare Solutions",
    industry: "Healthcare"
  },
  {
    id: 4,
    text: "It wasn't just about design — they understood our business goals and created something that truly works for us.",
    author: "Grace L.",
    position: "Founder of EduPro",
    rating: 5,
    company: "EduPro",
    industry: "Education"
  },
  {
    id: 5,
    text: "Ghreatness Labs took our startup from concept to market-ready in record time. Their UI/UX team is simply outstanding.",
    author: "Victor E.",
    position: "CEO of UrbanCart",
    rating: 5,
    company: "UrbanCart",
    industry: "E-commerce"
  },
  {
    id: 6,
    text: "I've worked with several tech companies, but Ghreatness Labs stands out. They're proactive, innovative, and genuinely invested in client success.",
    author: "Ngozi P.",
    position: "COO of SwiftMed",
    rating: 5,
    company: "SwiftMed",
    industry: "Healthcare"
  },
  {
    id: 7,
    text: "From ideation to execution, they walked with us every step of the way. The result? A platform that our users love and our competitors envy.",
    author: "Olawale S.",
    position: "Director at LearnSphere",
    rating: 5,
    company: "LearnSphere",
    industry: "EdTech"
  }
]

export function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 border border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-blue-500/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6"
          >
            <MessageCircle className="w-8 h-8 text-purple-400" />
          </motion.div>
          
          <h2 className="heading-xl gradient-text mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about working with Ghreatness Labs
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass p-12 rounded-3xl relative overflow-hidden">
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-8 left-8 opacity-20"
            >
              <Quote className="w-16 h-16 text-purple-400" />
            </motion.div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-blue-400 font-medium">
                    {testimonials[currentIndex].position}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <span>{testimonials[currentIndex].company}</span>
                    <span>•</span>
                    <span>{testimonials[currentIndex].industry}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </motion.div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-purple-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover-lift cursor-pointer group"
              onClick={() => goToTestimonial(index)}
            >
              {/* Mini Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Mini Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Mini Author */}
              <div className="border-t border-gray-700 pt-4">
                <h5 className="font-semibold text-white text-sm">{testimonial.author}</h5>
                <p className="text-blue-400 text-xs">{testimonial.position}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">4.8/5 Average Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">100+ Happy Clients</span>
            </div>
            <div className="w-px h-6 bg-gray-600" />
            <div className="flex items-center space-x-2">
              <Quote className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">98% Satisfaction Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}