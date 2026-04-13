import Card from '../ui/Card';

const Experience = () => (
  <div className="grid gap-6 lg:grid-cols-2">
    <Card title="Genpact (GE Project)" subtitle="Full-stack / Frontend Engineering">
      <p className="text-sm leading-7 text-slate-600">
        Delivered React and Node.js features for enterprise workflows, collaborating with design and backend teams to build scalable UI flows.
      </p>
    </Card>
    <Card title="R Systems International" subtitle="Software Engineer">
      <p className="text-sm leading-7 text-slate-600">
        Built web applications with reusable components, optimized performance, and maintained quality through testing and CI pipelines.
      </p>
    </Card>
  </div>
);

export default Experience;
