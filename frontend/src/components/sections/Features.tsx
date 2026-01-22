import React from 'react'
import { motion } from 'framer-motion'
import { Search, LayoutKanban, MessageSquare, Bot, BarChart3, Zap } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Gerador de Leads',
    description: '50M+ empresas brasileiras. Filtre por CNAE, localizaÃ§Ã£o, capital social, data de abertura e muito mais.',
  },
  {
    icon: LayoutKanban,
    title: 'Pipeline Visual',
    description: 'Kanban drag-and-drop. Veja exatamente onde cada lead estÃ¡ no seu funil de vendas.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Integrado',
    description: 'Dispare campanhas em massa. Conecte via QR Code ou API oficial da Meta.',
  },
  {
    icon: Bot,
    title: 'SDR Virtual com IA',
    description: 'QualificaÃ§Ã£o automÃ¡tica usando BANT. A IA analisa e prioriza os melhores leads pra vocÃª.',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Gerencial',
    description: 'MÃ©tricas do time em tempo real. Quem vende mais, quanto, como. Tudo num sÃ³ lugar.',
  },
  {
    icon: Zap,
    title: 'AutomaÃ§Ãµes',
    description: 'Configure fluxos de trabalho e deixe rodar. Follow-ups automÃ¡ticos, notificaÃ§Ãµes, e mais.',
    badge: 'Em breve',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Tudo que vocÃª precisa pra vender mais
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Uma plataforma. Zero trabalho manual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group glass-card p-8 shimmer-border overflow-hidden"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl mb-6 bg-gradient-to-br from-nook-blue-light to-nook-blue-dark flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Badge */}
                {feature.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-nook-warning/20 text-nook-warning text-xs font-medium">
                    {feature.badge}
                  </span>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
