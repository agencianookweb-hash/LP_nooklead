import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gradient-green">
            Nooklead
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Landing Page desenvolvida com React + Vite + Tailwind CSS
          </p>
          <button className="btn-primary">
            ComeÃ§ar Agora
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
