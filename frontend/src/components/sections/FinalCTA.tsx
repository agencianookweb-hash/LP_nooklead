import React from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-cta" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Pronto pra prospectar com IA?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comece agora e veja resultados em 7 dias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              ComeÃ§ar meu trial grÃ¡tis â†’
            </button>
          </div>
          <p className="text-white/60 text-sm">
            Sem compromisso. Cancela quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
