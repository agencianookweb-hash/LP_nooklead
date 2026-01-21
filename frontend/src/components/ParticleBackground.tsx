import React, { useEffect } from 'react'

export default function ParticleBackground() {
  useEffect(() => {
    const particles: HTMLDivElement[] = []
    const container = document.getElementById('particle-container')
    
    if (!container) return

    // Criar partÃ­culas
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.cssText = `
        position: absolute;
        width: ${2 + Math.random() * 3}px;
        height: ${2 + Math.random() * 3}px;
        background: #39ff14;
        border-radius: 50%;
        opacity: ${0.3 + Math.random() * 0.4};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${15 + Math.random() * 10}s infinite ease-in-out;
        animation-delay: ${Math.random() * 5}s;
      `
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return (
    <div 
      id="particle-container"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    />
  )
}
