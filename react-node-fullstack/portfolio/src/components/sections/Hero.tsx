import Badge from '../ui/Badge';

const Hero = () => (
  <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/5 p-8 shadow-soft backdrop-blur-xl sm:p-10">
    <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-slate-100/0 blur-3xl" />
    <div className="pointer-events-none absolute left-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-slate-900/40 blur-3xl" />

    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        Available for work
      </div>
      <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-800/30 transition hover:bg-slate-800">
        Book a call
      </button>
    </div>

    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
      <div className="space-y-7">
        <Badge>Full Stack Developer</Badge>

        <div className="space-y-3">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Hi, I’m Nisha Yadav.
          </h1>
          <p className="text-2xl font-semibold text-slate-700">Full Stack Developer</p>
        </div>

        <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Full-stack developer with 5+ years of experience building scalable web applications using React, Vue.js, Angular, Node.js, and MongoDB.
          Strong in designing reusable UI components, optimizing performance, and implementing CI/CD pipelines. Experienced in owning features end-to-end in agile environments.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'React, Vue.js, Angular',
            'Node.js (Express), MongoDB',
            'Jenkins, Git, Azure DevOps',
            'End-to-end feature ownership',
          ].map((item) => (
            <div key={item} className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          <span>+918107220633</span>
          <span className="text-slate-300">◇</span>
          <span>nishayadav1703@gmail.com</span>
          <span className="text-slate-300">◇</span>
          <a href="https://www.linkedin.com/in/nishayadav1703" target="_blank" rel="noreferrer" className="font-medium text-slate-900 underline decoration-primary/40 transition hover:text-primary">
            LinkedIn
          </a>
        </div>
      </div>

      <aside className="space-y-6 rounded-[2.25rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-[0_32px_60px_-24px_rgba(15,23,42,0.25)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Portfolio preview</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">Nisha Yadav</h2>
          </div>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-slate-800">
            Book call
          </button>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/5 p-4 shadow-sm">
          <div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200" />
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Summary</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Built enterprise web apps, reusable components, and CI/CD pipelines across React, Angular, Vue, Node.js, and MongoDB.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Skills</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">React · Vue.js · Angular · Node.js · MongoDB · Jenkins</p>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-5 py-4 text-white shadow-lg">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Recent brands</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-100 sm:grid-cols-2">
            <span>SquareSpace</span>
            <span>Asana</span>
            <span>Atten</span>
            <span>Figma</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;
