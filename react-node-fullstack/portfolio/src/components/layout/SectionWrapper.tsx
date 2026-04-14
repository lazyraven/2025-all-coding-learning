import type { ReactNode } from 'react';

type SectionWrapperProps = {
  title: string;
  id?: string;
  children: ReactNode;
};

const SectionWrapper = ({ title, id, children }: SectionWrapperProps) => (
  <section id={id} className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
    <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Section</p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-slate-300" />
      </div>
    </header>
    <div className="space-y-6">{children}</div>
  </section>
);

export default SectionWrapper;
