import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="min-h-screen dark:bg-izai-dark bg-white relative overflow-x-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Hero 
          title="Nooklead"
          subtitle="Sua AgÃªncia Digital"
          description="Transformamos ideias em realidade digital. Desenvolvimento, design e estratÃ©gia em um sÃ³ lugar."
          ctaPrimaryText="ComeÃ§ar Agora"
          ctaSecondaryText="Ver Recursos"
        />
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default App
