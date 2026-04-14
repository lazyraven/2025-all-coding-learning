import Card from '../ui/Card';

const Experience = () => (
  <div className="grid gap-6 lg:grid-cols-2">
    <Card title="Genpact" subtitle="Software Engineer (Full-Stack Developer) · Jun '22 — Present">
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>Built and enhanced features in Angular-based enterprise apps for GE (ARMS & Aero Store), improving usability and performance.</p>
        <p>Developed reusable UI components with Angular Material, reducing development time and increasing consistency.</p>
        <p>Conducted unit testing with Karma & Jasmine and integrated CI/CD pipelines using Jenkins.</p>
        <p>Implemented backend APIs using Node.js and MongoDB for internal modules.</p>
        <p>Collaborated in Agile sprints with cross-functional teams using Rally and Azure DevOps.</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {['Angular', 'Node.js', 'MongoDB', 'Karma', 'Azure DevOps'].map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </Card>
    <Card title="R Systems International | Smart 2.0 (USMed Equip)" subtitle="Software Engineer (Frontend Developer) · Feb '20 — Mar '22">
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>Developed core modules using Vue.js and Kendo UI for healthcare logistics applications.</p>
        <p>Delivered high-reliability features for inventory and service management systems.</p>
        <p>Integrated REST APIs and improved data handling efficiency using Swagger.</p>
        <p>Worked closely with QA and backend teams to ensure smooth production releases.</p>
        <p>Managed tasks, sprint cycles, and delivery tracking using Azure DevOps.</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {['Vue.js', 'Kendo UI', 'Swagger', 'REST APIs', 'Azure DevOps'].map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  </div>
);

export default Experience;
