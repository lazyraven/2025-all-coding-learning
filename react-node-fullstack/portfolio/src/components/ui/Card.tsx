import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const Card = ({ title, subtitle, children }: CardProps) => (
  <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-colors duration-200 hover:bg-white">
    <div className="mb-3 flex items-center justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
      </div>
    </div>
    <div className="text-slate-700">{children}</div>
  </article>
);

export default Card;
