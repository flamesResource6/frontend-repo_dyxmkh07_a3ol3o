import React from 'react'

const tracks = [
  { name: 'Logic', color: 'from-cyan-500 to-blue-600', desc: 'Spot patterns, deduce rules, and solve puzzles.' },
  { name: 'Creativity', color: 'from-fuchsia-500 to-rose-500', desc: 'Generate ideas, remix concepts, and diverge.' },
  { name: 'Analysis', color: 'from-amber-500 to-orange-600', desc: 'Break down arguments and evaluate claims.' },
  { name: 'Communication', color: 'from-emerald-500 to-teal-600', desc: 'Structure thoughts and explain clearly.' },
]

const Tracks = () => {
  return (
    <section id="tracks" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose your track</h2>
          <p className="mt-3 text-slate-300/90">Build a custom path or mix tracks to become a well‑rounded thinker.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((t) => (
            <div key={t.name} className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${t.color} mb-4`}></div>
              <h3 className="text-white font-semibold">{t.name}</h3>
              <p className="text-slate-300/90 text-sm mt-1">{t.desc}</p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-slate-800/60 text-slate-200 ring-1 ring-white/10 hover:bg-slate-800 transition text-sm">Preview lessons</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tracks
