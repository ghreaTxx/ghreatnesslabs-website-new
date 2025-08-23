'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
      
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      
      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-20 blur-sm"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.color,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-500/20 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-purple-500/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full"
        animate={{ 
          y: [-50, 50, -50],
          x: [-25, 25, -25]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}