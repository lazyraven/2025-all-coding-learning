const About = () => (
  <div className="grid gap-6">
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-base leading-7 text-slate-700 sm:text-lg">
        Full-stack developer with 5+ years of experience building scalable web applications using React, Vue.js, Angular, Node.js, and MongoDB.
        Strong in designing reusable UI components, optimizing performance, and implementing CI/CD pipelines.
      </p>
      <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
        Experienced in owning features end-to-end in agile environments, collaborating with cross-functional teams, and delivering production-ready solutions.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {[
        'React, Vue.js, Angular',
        'Node.js (Express) & MongoDB',
        'Jenkins, Git, Azure DevOps',
        'Agile delivery & CI/CD pipelines',
      ].map((skill) => (
        <div key={skill} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-800 shadow-sm">
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default About;
