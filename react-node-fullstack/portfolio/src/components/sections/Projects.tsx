import Card from '../ui/Card';

const Projects = () => (
  <div className="grid gap-6 lg:grid-cols-2">
    <Card title="OpenRetro" subtitle="Personal project" >
      <p className="text-sm leading-7 text-slate-600">
        Developed a collaborative retrospective board with React, responsive UI, and GitHub deployment. Focused on clean design, performance, and maintainability.
      </p>
    </Card>
    <Card title="Other GitHub projects" subtitle="Portfolio showcase">
      <p className="text-sm leading-7 text-slate-600">
        Built several personal apps that highlight reusable component libraries, API integrations, and modern React best practices.
      </p>
    </Card>
  </div>
);

export default Projects;
