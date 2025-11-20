import React from 'react'

const Navbar = () => {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-cyan-400 p-[2px]">
            <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center">
              {/* Spark icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-300">
                <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">SparkMind</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300/90">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#tracks" className="hover:text-white transition">Tracks</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-lg text-slate-200 hover:text-white transition">Sign in</button>
          <button className="inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition">Start free</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
