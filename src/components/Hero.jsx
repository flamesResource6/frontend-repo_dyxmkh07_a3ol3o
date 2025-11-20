import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-96 w-[36rem] bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 h-96 w-[36rem] bg-fuchsia-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8 pb-24 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 ring-1 ring-white/10 text-xs text-slate-300 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              New: Daily thinking workouts
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Train your mind like a muscle
            </h1>
            <p className="mt-5 text-lg text-slate-300/90 max-w-xl">
              A playful learning app that turns critical thinking and creativity into a daily habit — bite‑sized challenges, adaptive paths, and streaks that keep you going.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition">
                Start free
              </button>
              <button className="px-5 py-3 rounded-xl bg-slate-800/60 text-slate-200 ring-1 ring-white/10 hover:bg-slate-800 transition">
                See how it works
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-400 text-sm">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 ring-2 ring-slate-900 text-[10px] text-slate-300">{i+1}</span>
                ))}
              </div>
              <span>10k+ learners building sharper minds</span>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-fuchsia-500/30 blur"></div>
              <div className="relative rounded-[28px] bg-slate-900 ring-1 ring-white/10 p-4 shadow-2xl">
                {/* Mocked phone UI */}
                <div className="rounded-3xl bg-slate-800 ring-1 ring-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80">
                    <div className="flex items-center gap-2 text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      Daily Workout
                    </div>
                    <div className="text-xs text-slate-400">Streak 12 🔥</div>
                  </div>

                  <div className="p-4 space-y-3">
                    {[
                      {title: 'Pattern Hunt', tag: 'logic'},
                      {title: 'Reverse the Story', tag: 'creativity'},
                      {title: 'Assumption Breaker', tag: 'analysis'},
                    ].map((c, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 ring-1 ring-white/10">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600"></div>
                        <div className="flex-1">
                          <div className="text-slate-200 text-sm font-semibold">{c.title}</div>
                          <div className="text-[11px] uppercase tracking-wide text-slate-400">{c.tag}</div>
                        </div>
                        <button className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 ring-1 ring-white/10">Play</button>
                      </div>
                    ))}

                    <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 ring-1 ring-white/10">
                      <div className="text-xs text-slate-300">Tip</div>
                      <div className="text-sm text-white">Switch perspectives to see new paths.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
