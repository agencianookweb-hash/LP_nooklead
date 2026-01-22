import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import LaptopAnimation from '../ui/LaptopAnimation'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80"
            >
              ProspecÃ§Ã£o B2B com InteligÃªncia Artificial
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              A IA prospecta.{' '}
              <span className="gradient-text">VocÃª fecha.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              Plataforma completa de prospecÃ§Ã£o B2B. Encontre leads qualificados entre 50M+ de empresas brasileiras, automatize o primeiro contato e foque no que importa: fechar negÃ³cios.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary">
                ComeÃ§ar grÃ¡tis â†’
              </button>
              <button className="btn-secondary">
                Ver demonstraÃ§Ã£o
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/60"
            >
              <span className="flex items-center gap-2">
                <span className="text-nook-success">âœ“</span> 7 dias grÃ¡tis
              </span>
              <span className="flex items-center gap-2">
                <span className="text-nook-success">âœ“</span> Sem cartÃ£o inicial
              </span>
              <span className="flex items-center gap-2">
                <span className="text-nook-success">âœ“</span> Cancela quando quiser
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Laptop Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <LaptopAnimation />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/40"
        >
          <span className="text-sm mb-2">Role para explorar</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
