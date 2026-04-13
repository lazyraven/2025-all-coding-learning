import type { ReactNode } from 'react';

type SectionWrapperProps = {
  title: string;
  children: ReactNode;
};

const SectionWrapper = ({ title, children }: SectionWrapperProps) => (
  <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
    <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-primary" />
      </div>
    </header>
    <div className="space-y-6">{children}</div>
  </section>
);

export default SectionWrapper;
