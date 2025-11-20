import React from 'react'

const features = [
  {
    title: 'Daily Workouts',
    desc: '5–10 minute sessions that build reasoning, creativity, and problem‑solving — just like fitness for your mind.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-400" fill="currentColor"><path d="M7 10h10v4H7z"/><path d="M6 3h2v5H6zM16 3h2v5h-2zM6 16h2v5H6zM16 16h2v5h-2z"/></svg>
    )
  },
  {
    title: 'Adaptive Path',
    desc: 'Smart levels adjust to your performance so you’re always challenged, never overwhelmed.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-fuchsia-400" fill="currentColor"><path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0zm9-6v6l4 2"/></svg>
    )
  },
  {
    title: 'Streaks & XP',
    desc: 'Keep momentum with streaks, XP, and friendly leaderboards that make thinking addictive.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-400" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
    )
  },
  {
    title: 'Creative Labs',
    desc: 'Open‑ended prompts, brainstorming sprints, and imagination drills to flex divergent thinking.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-rose-400" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 3.87 3.13 5.5 3.13 5.5H10v3h4v-3h1.87S19 12.87 19 9a7 7 0 00-7-7z"/></svg>
    )
  },
]

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Learning that feels like play</h2>
          <p className="mt-3 text-slate-300/90">No lectures, just interactive challenges that sharpen how you think.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-cyan-500/30 transition">
              <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
