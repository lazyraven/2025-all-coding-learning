import { useEffect, useMemo, useState } from 'react'
import type { DayItem } from './plan'
import { ChevronRight } from 'lucide-react'

type Props = { query: string; plan: DayItem[] }

const KEY = 'roadmap.progress.v1'

type State = Record<string, boolean | string>

function usePersistentState() {
  const [state, setState] = useState<State>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} }
  })
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(state)) }, [state])
  return [state, setState] as const
}

function Task({ id, label, checked, onChange }: { id: string, label: string, checked: boolean, onChange: (b: boolean) => void }) {
  return (
    <label className="flex items-center gap-3 text-sm">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-slate-500/60 bg-slate-900/60"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  )
}

function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-3 rounded-full border border-slate-600/50 bg-slate-800/60 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export default function Roadmap({ query, plan }: Props) {
  const [state, setState] = usePersistentState()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return plan
    return plan.filter(p => `${p.title} ${p.coding.join(' ')} ${p.theory.join(' ')} ${p.mini.join(' ')} ${p.tags.join(' ')}`.toLowerCase().includes(q))
  }, [query, plan])

  // compute progress
  const weekStats = useMemo(() => {
    const stats = new Map<number, { done: number, total: number }>()
    for (const w of [1, 2, 3, 4, 5]) stats.set(w, { done: 0, total: 0 })
    for (const p of plan) {
      const total = (p.coding.length + p.theory.length + p.mini.length)
      let done = 0
      for (const [i, _] of p.coding.entries()) if (state[`w${p.week}-d${p.day}-coding-${i}`]) done++
      for (const [i, _] of p.theory.entries()) if (state[`w${p.week}-d${p.day}-theory-${i}`]) done++
      for (const [i, _] of p.mini.entries()) if (state[`w${p.week}-d${p.day}-mini-${i}`]) done++
      const s = stats.get(p.week)!
      s.done += done; s.total += total
    }
    return stats
  }, [state, plan])

  const overall = useMemo(() => {
    let done = 0, total = 0
    for (const p of plan) {
      total += p.coding.length + p.theory.length + p.mini.length
      for (const [i, _] of p.coding.entries()) if (state[`w${p.week}-d${p.day}-coding-${i}`]) done++
      for (const [i, _] of p.theory.entries()) if (state[`w${p.week}-d${p.day}-theory-${i}`]) done++
      for (const [i, _] of p.mini.entries()) if (state[`w${p.week}-d${p.day}-mini-${i}`]) done++
    }
    return total ? Math.round((done / total) * 100) : 0
  }, [state, plan])

  // group by week
  const byWeek = useMemo(() => {
    const m = new Map<number, DayItem[]>()
    for (const w of [1, 2, 3, 4, 5]) m.set(w, [])
    for (const p of filtered) m.get(p.week)!.push(p)
    return m
  }, [filtered])

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4">
      {/* Sidebar */}
      <aside className="sticky top-24 self-start hidden md:block rounded-2xl border border-slate-700/50 bg-slate-900/50 p-3">
        <h3 className="text-sm text-primary px-2 py-1">Weeks Overview</h3>
        <nav className="flex flex-col gap-1 max-h-[68vh] overflow-auto pr-1">
          {[1, 2, 3, 4, 5].map(w => {
            const s = weekStats.get(w)!
            const pct = s.total ? Math.round((s.done / s.total) * 100) : 0
            return (
              <a key={w} href={`#week-${w}`} className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-slate-800/60 border border-transparent hover:border-slate-600/40">
                <span className="font-medium">Week {w}</span>
                <span className="text-xs text-slate-300">{pct}%</span>
              </a>
            )
          })}
        </nav>
        <div className="text-xs text-slate-400 mt-2 px-2">Progress persists locally in your browser.</div>
      </aside>

      {/* Content */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-300">Overall Progress</div>
            <div className="text-sm">{overall}%</div>
          </div>
          <div className="mt-2"><Progress value={overall} /></div>
        </div>

        {[1, 2, 3, 4, 5].map(w => {
          const days = byWeek.get(w)!
          const s = weekStats.get(w)!
          const pct = s.total ? Math.round((s.done / s.total) * 100) : 0
          return (
            <section id={`week-${w}`} key={w} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-slate-700/50 p-4">
                <div>
                  <h2 className="text-lg font-semibold">✅ Week {w} – {['', 'Core JavaScript', 'React + Vue Basics', 'Node.js + Backend', 'Advanced + System Design + Mock', 'JS And Other Topics'][w]}</h2>
                  <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
                    <span>Week {w} Progress</span><span className="ml-auto">{pct}%</span>
                  </div>
                  <div className="mt-2"><Progress value={pct} /></div>
                </div>
                <div className="text-sm text-slate-300 md:self-end">
                  {['', 'Focus: fundamentals, async, event loop', 'Focus: components, state, routing, store', 'Focus: Express, DB, auth, validation', 'Focus: perf, streams, security, design', 'Focus: array methods, loops, one-two binding, storage'][w]}
                </div>
              </div>

              <div className="grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-3">
                {days.map(p => {
                  return (
                    <article key={p.day} className="rounded-xl border border-slate-700/50 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
                      <header className="flex items-start justify-between gap-3">
                        <h4 className="font-medium">{p.title}</h4>
                        <div className="flex flex-wrap gap-1">
                          {p.tags.map(t => (
                            <span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-600/50 text-primary bg-slate-800/50">{t}</span>
                          ))}
                        </div>
                      </header>

                      <section className="mt-3 space-y-2">
                        <b className="text-primary">Coding</b>
                        <div className="grid gap-2">
                          {p.coding.map((label, i) => {
                            const id = `w${p.week}-d${p.day}-coding-${i}`
                            return <Task key={id} id={id} label={label} checked={!!state[id]} onChange={(b) => setState(s => ({ ...s, [id]: b }))} />
                          })}
                        </div>
                      </section>

                      <section className="mt-3 space-y-2">
                        <b className="text-primary">Theory</b>
                        <div className="grid gap-2">
                          {p.theory.map((label, i) => {
                            const id = `w${p.week}-d${p.day}-theory-${i}`
                            return <Task key={id} id={id} label={label} checked={!!state[id]} onChange={(b) => setState(s => ({ ...s, [id]: b }))} />
                          })}
                        </div>
                      </section>

                      <section className="mt-3 space-y-2">
                        <b className="text-primary">Mini‑Task</b>
                        <div className="grid gap-2">
                          {p.mini.map((label, i) => {
                            const id = `w${p.week}-d${p.day}-mini-${i}`
                            return <Task key={id} id={id} label={label} checked={!!state[id]} onChange={(b) => setState(s => ({ ...s, [id]: b }))} />
                          })}
                        </div>
                      </section>

                      <details className="mt-3 border-t border-slate-700/50 pt-3 group">
                        <summary className="list-none flex items-center gap-2 cursor-pointer text-slate-300 hover:text-slate-200">
                          <ChevronRight className="size-4 transition-transform group-open:rotate-90" /> Notes
                        </summary>
                        <textarea
                          className="mt-2 w-full min-h-[80px] rounded-xl border border-slate-700/60 bg-slate-900/60 p-2 text-sm outline-none focus:ring-2"
                          placeholder="Key takeaways, pitfalls, and links…"
                          value={String(state[`note-${p.week}-${p.day}`] || '')}
                          onChange={(e) => setState(s => ({ ...s, [`note-${p.week}-${p.day}`]: e.target.value }))}
                        />
                      </details>

                      <footer className="mt-3 flex items-center justify-between text-xs text-slate-400">
                        <span>Week {p.week} • Day {p.day}</span>
                        <span>3 sections</span>
                      </footer>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
