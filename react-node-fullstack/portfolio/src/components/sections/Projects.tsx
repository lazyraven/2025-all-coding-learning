import Card from '../ui/Card';

const Projects = () => (
  <div className="grid gap-6 lg:grid-cols-2">
    <Card title="Aero Alliance, GE ELITE & PRISM+" subtitle="Enterprise web applications">
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>Built reusable Angular Material components and responsive UIs for multiple enterprise modules.</p>
        <p>Enhanced UX with dynamic binding, drag-and-drop tables, in-cell filters, and advanced dashboards.</p>
        <p>Created admin modules for user management, notifications, and Excel export with strong test coverage.</p>
        <p className="font-medium text-slate-900">Tech Stack: Angular, JavaScript, Node.js, HTML/CSS, Bootstrap, Karma, Jasmine.</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {['Angular', 'Material', 'Karma', 'Jasmine', 'Dashboard'].map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </Card>
    <Card title="React Projects" subtitle="Open Retro, Just Vegan, MERN Auth">
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        <p>Open Retro: Real-time collaboration tool built with React and Firebase for team retrospectives.</p>
        <p>Just Vegan: Learning project with authentication, cart, and API integrations.</p>
        <p>MERN Auth: Secure authentication with JWT and optimized concurrent API handling.</p>
        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-semibold">Repos:</p>
          <p className="text-slate-600">github.com/lazyraven/open-retro-react</p>
          <p className="text-slate-600">gitlab.com/lazyraven/just-vegan-react</p>
          <p className="text-slate-600">github.com/lazyraven/mern-ai-features</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {['React', 'Firebase', 'JWT', 'MERN', 'UI'].map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </Card>
  </div>
);

export default Projects;
