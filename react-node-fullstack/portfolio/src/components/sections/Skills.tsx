const Skills = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: 'Frontend',
        text: 'JavaScript (ES6+), React (Primary), Vue.js, Angular',
        accent: 'from-sky-400 to-cyan-500',
      },
      {
        title: 'Backend',
        text: 'Node.js (Express), MongoDB',
        accent: 'from-violet-400 to-fuchsia-500',
      },
      {
        title: 'Tools & DevOps',
        text: 'Jenkins, Git, Azure DevOps',
        accent: 'from-emerald-400 to-lime-500',
      },
    ].map((card) => (
      <div key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className={`mb-4 h-2 w-24 rounded-full bg-gradient-to-r ${card.accent}`} />
        <h3 className="mb-3 text-lg font-semibold text-slate-900">{card.title}</h3>
        <p className="text-sm leading-7 text-slate-600">{card.text}</p>
      </div>
    ))}
  </div>
);

export default Skills;
