import React from 'react'

const steps = [
  {
    step: '1',
    title: 'Pick a track',
    desc: 'Logic, creativity, analysis, or communication — choose your focus or mix them all.'
  },
  {
    step: '2',
    title: 'Play short challenges',
    desc: 'Interactive questions and prompts keep you engaged for 5–10 minutes a day.'
  },
  {
    step: '3',
    title: 'Grow your streak',
    desc: 'Earn XP, unlock levels, and watch your thinking get sharper over time.'
  },
]

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
            <p className="mt-3 text-slate-300/90">A simple daily ritual that compounds.</p>
            <div className="mt-8 space-y-5">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex-shrink-0 h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center">{s.step}</div>
                  <div>
                    <h3 className="text-white font-semibold">{s.title}</h3>
                    <p className="text-slate-300/90 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl bg-slate-900 ring-1 ring-white/10 p-6">
              <div className="grid grid-cols-2 gap-3">
                {['Logic Grid','Idea Sprint','Bias Check','Story Flip'].map((t,i)=>(
                  <div key={i} className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-500 mb-3"></div>
                    <div className="text-slate-200 text-sm font-semibold">{t}</div>
                    <div className="text-[11px] uppercase tracking-wide text-slate-400">Level {i+1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
