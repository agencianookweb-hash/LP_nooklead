import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Crown, Check } from 'lucide-react'

const plans = [
  {
    name: 'Individual',
    icon: Zap,
    description: 'Pra quem trabalha sozinho e precisa de leads todo mÃªs',
    price: 89,
    features: [
      '1 usuÃ¡rio',
      '2 pipelines',
      '50k crÃ©ditos/mÃªs',
      '500 msgs WhatsApp',
    ],
    cta: 'ComeÃ§ar agora',
    popular: false,
  },
  {
    name: 'Pro+',
    icon: Crown,
    description: 'Pra times que querem escalar',
    price: 219,
    features: [
      '5 usuÃ¡rios',
      'Pipelines ilimitados',
      '200k crÃ©ditos/mÃªs',
      '2k msgs WhatsApp',
      'SDR Virtual (IA)',
      '20 automaÃ§Ãµes',
      'API WhatsApp',
      'Dashboard gerencial',
    ],
    cta: 'ComeÃ§ar agora',
    popular: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Escolha o ideal e comece hoje.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative glass-card p-8 ${plan.popular ? 'scale-105 shimmer-border active' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-nook-blue-light to-nook-blue-dark text-white text-sm font-semibold">
                    â­ MAIS POPULAR
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nook-blue-light to-nook-blue-dark flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Name & Description */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">R$ {plan.price}</span>
                  <span className="text-white/60">/mÃªs</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-nook-success flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </button>

                {/* Trial Badge */}
                <p className="text-center text-white/60 text-sm mt-4">
                  7 dias grÃ¡tis
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
