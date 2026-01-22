import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    text: 'Antes da Nooklead, eu passava 4h/dia no LinkedIn mandando mensagem. Agora passo 4h/semana revisando o que a IA filtrou.',
    author: 'JoÃ£o Silva',
    role: 'SDR na TechCorp',
    rating: 5,
  },
  {
    text: 'Fechei 3 contratos no primeiro mÃªs. O gerador de leads Ã© absurdo de bom.',
    author: 'Maria Santos',
    role: 'Consultora de Vendas',
    rating: 5,
  },
  {
    text: 'Meu time de 5 pessoas agora prospecta como se fossem 20.',
    author: 'Carlos Mendes',
    role: 'Diretor Comercial',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-nook-navy/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 md:p-12"
              >
                {/* Quote */}
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-nook-warning text-nook-warning" />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <div className="font-semibold text-white">{testimonials[currentIndex].author}</div>
                  <div className="text-white/60 text-sm">{testimonials[currentIndex].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-nook-blue-light w-8' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
