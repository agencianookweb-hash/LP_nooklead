import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function LaptopAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Laptop opens from 15Â° (closed) to 0Â° (open) as user scrolls
  const screenAngle = useTransform(scrollYProgress, [0, 0.3], [15, 0])
  const screenOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1])

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto" style={{ perspective: '1000px' }}>
      {/* Laptop Screen */}
      <motion.div
        style={{
          rotateX: screenAngle,
          transformStyle: 'preserve-3d',
          transformOrigin: 'bottom center',
        }}
        className="relative"
      >
        {/* Screen Content */}
        <motion.div
          style={{ opacity: screenOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-nook-navy to-nook-blue-dark rounded-lg p-4 border-2 border-white/20 z-10"
        >
          {/* Mock Dashboard */}
          <div className="h-full bg-white/5 rounded backdrop-blur-sm p-6 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold">Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <div className="text-white/60 text-sm mb-2">Leads Gerados</div>
                <div className="text-2xl font-bold text-nook-blue-light">2.3M</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-white/60 text-sm mb-2">Taxa ConversÃ£o</div>
                <div className="text-2xl font-bold text-nook-success">23.8%</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-white/60 text-sm mb-2">Empresas</div>
                <div className="text-2xl font-bold text-white">4.127</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-white/60 text-sm mb-2">AvaliaÃ§Ã£o</div>
                <div className="text-2xl font-bold text-nook-warning">4.8â˜…</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Screen Frame */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-1 shadow-2xl">
          <div className="bg-black rounded-t-lg h-8 flex items-center justify-center">
            <div className="w-12 h-1 bg-gray-700 rounded-full" />
          </div>
          <div className="bg-gray-900 rounded-b-lg aspect-video" />
        </div>
      </motion.div>

      {/* Laptop Base */}
      <div className="mt-2 bg-gradient-to-b from-gray-700 to-gray-900 h-2 rounded-b-lg shadow-xl" />
    </div>
  )
}
