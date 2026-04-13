import Badge from '../ui/Badge';

const Hero = () => (
  <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-50 p-8 shadow-soft">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <Badge>Frontend Portfolio</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Hi, my name is Nisha.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          I build clean, scalable React applications with a strong focus on reusable components, performance optimization, and modern UX design.
        </p>
      </div>
      <div className="rounded-3xl bg-primary px-6 py-5 text-white shadow-lg shadow-primary/20 sm:px-8 sm:py-7">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/20">Quick facts</p>
        <div className="mt-4 space-y-3 text-base leading-7">
          <p>• Full-stack developer</p>
          <p>• React, Vue, Angular, Node.js, MongoDB</p>
          <p>• End-to-end feature ownership</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
