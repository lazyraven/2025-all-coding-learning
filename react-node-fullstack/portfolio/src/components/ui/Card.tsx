import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const Card = ({ title, subtitle, children }: CardProps) => (
  <article className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-sm transition duration-200 hover:shadow-md">
    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="mt-2 text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      <div className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
        Highlight
      </div>
    </div>
    <div className="text-slate-700">{children}</div>
  </article>
);

export default Card;
