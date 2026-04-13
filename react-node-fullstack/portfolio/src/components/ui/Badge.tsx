import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => (
  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{children}</span>
);

export default Badge;
