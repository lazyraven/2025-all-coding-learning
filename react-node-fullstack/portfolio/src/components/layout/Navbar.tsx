const navLinks = [
  { label: 'Summary', href: '#summary' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interests', href: '#interests' },
];

const Navbar = () => (
  <header className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-[2rem] border border-slate-200 bg-white/95 px-5 py-4 shadow-soft backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-slate-900 text-white shadow-lg shadow-primary/20">
        N
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">Nisha Yadav</p>
        <p className="text-xs text-slate-500">Full Stack Developer</p>
      </div>
    </div>

    <nav className="hidden items-center gap-6 md:flex">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
          {link.label}
        </a>
      ))}
    </nav>

    <div className="inline-flex items-center gap-3">
      <a href="mailto:nishayadav1703@gmail.com" className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200">
        Contact
      </a>
      <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
        Resume
      </button>
    </div>
  </header>
);

export default Navbar;
