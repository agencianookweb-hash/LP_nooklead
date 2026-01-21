import React from 'react'

interface Feature {
  icon: string
  title: string
  description: string
  highlight?: boolean
}

const features: Feature[] = [
  {
    icon: 'âš¡',
    title: 'Desenvolvimento RÃ¡pido',
    description: 'Entregamos projetos 10x mais rÃ¡pido com ferramentas modernas e automaÃ§Ã£o inteligente.',
    highlight: true
  },
  {
    icon: 'ðŸŽ¨',
    title: 'Design Moderno',
    description: 'Interfaces bonitas e funcionais que convertem visitantes em clientes.',
    highlight: true
  },
  {
    icon: 'ðŸš€',
    title: 'Deploy AutomÃ¡tico',
    description: 'Do cÃ³digo Ã  produÃ§Ã£o em minutos, sem complicaÃ§Ã£o.',
    highlight: false
  },
  {
    icon: 'ðŸ”’',
    title: 'SeguranÃ§a',
    description: 'Seus dados protegidos com as melhores prÃ¡ticas de seguranÃ§a.',
    highlight: false
  },
  {
    icon: 'ðŸ“±',
    title: 'Responsivo',
    description: 'Funciona perfeitamente em todos os dispositivos e tamanhos de tela.',
    highlight: false
  },
  {
    icon: 'ðŸ’¡',
    title: 'InovaÃ§Ã£o',
    description: 'Sempre usando as tecnologias mais recentes e melhores prÃ¡ticas.',
    highlight: false
  },
  {
    icon: 'ðŸ¤',
    title: 'Suporte',
    description: 'Equipe dedicada para ajudar vocÃª em cada etapa do projeto.',
    highlight: false
  },
  {
    icon: 'ðŸ“Š',
    title: 'Analytics',
    description: 'Acompanhe o desempenho do seu site com mÃ©tricas detalhadas.',
    highlight: false
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recursos Poderosos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tudo que vocÃª precisa para ter sucesso online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card p-6 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group ${
                feature.highlight ? 'ring-2 ring-accent/20' : ''
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-2xl ${
                  feature.highlight
                    ? 'bg-accent text-primary'
                    : 'text-accent'
                }`}
              >
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
