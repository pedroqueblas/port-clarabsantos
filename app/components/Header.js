'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-10 border-b border-[#1e293b] bg-black/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3 text-lg font-semibold tracking-wide">
          <img 
            src="/favicon.png" 
            alt="Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] bg-clip-text text-transparent animate-pulse">
<<<<<<< HEAD
            Java Back-End
=======
            Clara Santos
>>>>>>> 4af76d1 (Atualização do projeto: melhorias no layout / novos componentes)
          </span>
        </div>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex flex-wrap items-center gap-3 text-base">
          <a className="rounded-full px-5 py-2.5 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white hover:scale-105 hover:shadow-lg" href="#sobre">Sobre</a>
          <a className="rounded-full px-5 py-2.5 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white hover:scale-105 hover:shadow-lg" href="#skills">Skills</a>
<<<<<<< HEAD
          <a className="rounded-full px-5 py-2.5 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white hover:scale-105 hover:shadow-lg" href="#projetos">Projetos</a>
=======

>>>>>>> 4af76d1 (Atualização do projeto: melhorias no layout / novos componentes)
          <a className="rounded-full px-5 py-2.5 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white hover:scale-105 hover:shadow-lg" href="#mentorias">Mentorias</a>
        </nav>

        {/* Menu Hamburger Mobile */}
        <button 
          className="md:hidden p-2 text-[#93c5fd] hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#1e293b] bg-black/95 backdrop-blur">
          <nav className="flex flex-col p-4 space-y-3">
            <a className="rounded-lg px-4 py-3 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white" href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a className="rounded-lg px-4 py-3 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white" href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
<<<<<<< HEAD
            <a className="rounded-lg px-4 py-3 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white" href="#projetos" onClick={() => setIsMenuOpen(false)}>Projetos</a>
=======

>>>>>>> 4af76d1 (Atualização do projeto: melhorias no layout / novos componentes)
            <a className="rounded-lg px-4 py-3 bg-[#1e293b] text-[#93c5fd] border border-[#1e40af] transition-all hover:bg-[#2563eb] hover:text-white" href="#mentorias" onClick={() => setIsMenuOpen(false)}>Mentorias</a>
          </nav>
        </div>
      )}
    </header>
  );
}