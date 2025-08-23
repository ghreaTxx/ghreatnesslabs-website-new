'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-32 h-32 mb-8 relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="glass p-4 rounded-2xl"
            >
              <Image
                src="/images/logo.jpeg"
                alt="Ghreatness Labs Logo"
                width={128}
                height={128}
                className="object-contain w-full h-full rounded-xl"
              />
            </motion.div>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold gradient-text mb-4"
          >
            Ghreatness Labs
          </motion.h1>

          {/* Loading Bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-sm"
          >
            Loading... {progress}%
          </motion.p>

          {/* Floating Particles */}
          {isMounted && (
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full"
                  initial={{
                    x: (i * 60) % window.innerWidth,
                    y: window.innerHeight + 10,
                  }}
                  animate={{
                    y: -10,
                    x: ((i * 60) % window.innerWidth) + (i % 2 === 0 ? 50 : -50),
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}