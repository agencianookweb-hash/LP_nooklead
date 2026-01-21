import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient-green mb-4">Nooklead</h3>
            <p className="text-gray-400">
              Transformando ideias em realidade digital.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-accent transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contato@nooklead.com</li>
              <li>WhatsApp: (00) 00000-0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2026 Nooklead. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
