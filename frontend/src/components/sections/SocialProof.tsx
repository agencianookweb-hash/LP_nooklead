import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nook-navy/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-white/60 text-lg">
            Mais de <span className="font-semibold text-white"><AnimatedCounter end={4127} /></span> empresas jÃ¡ prospectam com Nooklead
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'empresas ativas', value: 4127, suffix: '', decimals: 0 },
            { label: 'leads gerados', value: 2.3, suffix: 'M', decimals: 1 },
            { label: 'conversÃ£o mÃ©dia', value: 23.8, suffix: '%', decimals: 1 },
            { label: 'rating mÃ©dio', value: 4.8, suffix: 'â˜…', decimals: 1 },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter end={metric.value} decimals={metric.decimals} />
                {metric.suffix}
              </div>
              <div className="text-white/60 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
