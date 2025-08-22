import { useMemo, useState } from 'react'
import { Search, RefreshCcw } from 'lucide-react'
import Roadmap from './Roadmap'
import plan from './plan'

export default function App(){
  const [q, setQ] = useState('')
  const [nonce, setNonce] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950/80 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50">
      <header className="sticky top-0 z-10 backdrop-blur border-b border-slate-700/40 bg-slate-900/70 shadow-soft">
        <div className="max-w-6xl mx-auto px-5 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold tracking-tight">30‑Day Interview Preparation Roadmap</h1>
              <p className="text-slate-300 text-sm">JavaScript • React • Vue • Node.js — track your progress daily ✅</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-600/50 bg-slate-800/60 min-w-[260px]">
                <Search size={18} className="opacity-70" />
                <input
                  className="bg-transparent outline-none flex-1 text-sm placeholder:text-slate-400"
                  placeholder="Search topics, tasks, days…"
                  value={q}
                  onChange={(e)=>setQ(e.target.value)}
                />
              </div>
              <button
                onClick={()=>{ localStorage.clear(); setNonce(x=>x+1); }}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-rose-500/40 bg-rose-900/30 hover:bg-rose-900/40 text-sm font-semibold"
                title="Clear saved progress"
              >
                <RefreshCcw size={16}/> Reset
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-6">
        <Roadmap key={nonce} query={q} plan={plan} />
      </main>
    </div>
  )
}
