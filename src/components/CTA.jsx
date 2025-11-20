import React from 'react'

const CTA = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 ring-1 ring-white/10 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Start your 7‑day free trial</h2>
              <p className="mt-3 text-slate-300/90 max-w-xl">Unlimited workouts, creative labs, and your personalized path. Cancel anytime.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition">Get started</button>
              <button className="px-5 py-3 rounded-xl bg-slate-800/60 text-slate-200 ring-1 ring-white/10 hover:bg-slate-800 transition">View plans</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
