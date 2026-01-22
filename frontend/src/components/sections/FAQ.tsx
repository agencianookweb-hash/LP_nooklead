import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona o perÃ­odo de trial?',
    answer: 'VocÃª tem 7 dias pra testar todas as funcionalidades do plano escolhido. NÃ£o cobramos nada antes disso. Se nÃ£o gostar, Ã© sÃ³ cancelar.',
  },
  {
    question: 'Preciso de cartÃ£o de crÃ©dito pra comeÃ§ar?',
    answer: 'Pedimos o cartÃ£o no cadastro, mas sÃ³ cobramos apÃ³s os 7 dias de trial. VocÃª pode cancelar a qualquer momento antes disso.',
  },
  {
    question: 'De onde vÃªm os dados dos leads?',
    answer: 'Trabalhamos com bases pÃºblicas da Receita Federal (CNPJ) combinadas com enriquecimento de dados prÃ³prio. SÃ£o mais de 50 milhÃµes de empresas brasileiras atualizadas.',
  },
  {
    question: 'O que Ã© o SDR Virtual?',
    answer: 'Ã‰ nossa IA que qualifica leads automaticamente usando a metodologia BANT. Ela analisa cada lead e dÃ¡ uma pontuaÃ§Ã£o de 0-100, priorizando os mais propensos a comprar.',
  },
  {
    question: 'Posso integrar com meu CRM atual?',
    answer: 'Sim, temos integraÃ§Ãµes via API e webhooks. TambÃ©m exportamos para Excel se preferir.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
