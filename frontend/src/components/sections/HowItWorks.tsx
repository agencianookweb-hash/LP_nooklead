import React from 'react'
import { motion } from 'framer-motion'
import { Target, Sparkles, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Target,
    title: 'Defina seu cliente ideal',
    description: 'Selecione CNAE, localizaÃ§Ã£o, porte, capital social. O sistema busca em 50M+ de empresas brasileiras.',
  },
  {
    number: 2,
    icon: Sparkles,
    title: 'A IA qualifica automaticamente',
    description: 'O SDR Virtual analisa cada lead usando BANT e dÃ¡ uma pontuaÃ§Ã£o de prioridade.',
  },
  {
    number: 3,
    icon: TrendingUp,
    title: 'VocÃª sÃ³ fecha',
    description: 'Receba leads quentes no seu pipeline. WhatsApp integrado pra abordagem instantÃ¢nea.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nook-navy/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            3 passos pra sua primeira venda com IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-nook-blue-light to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nook-blue-light to-nook-blue-dark flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-nook-blue-light" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-nook-blue-light">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
