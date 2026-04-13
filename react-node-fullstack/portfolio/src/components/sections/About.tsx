const About = () => (
  <div className="space-y-5 text-slate-700">
    <p>
      Full-stack developer with 5+ years of experience building scalable web applications using React, Vue.js, Angular, Node.js, and MongoDB.
      I focus on designing reusable UI components, optimizing performance, and implementing CI/CD pipelines.
    </p>
    <p>
      My approach combines polished user experiences with production-ready architecture and strong collaboration across agile teams.
    </p>
    <ul className="grid gap-3 sm:grid-cols-2">
      <li className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
        Reusable component design
      </li>
      <li className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
        Performance optimization
      </li>
      <li className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
        CI/CD and deployment
      </li>
      <li className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
        Agile feature delivery
      </li>
    </ul>
  </div>
);

export default About;
