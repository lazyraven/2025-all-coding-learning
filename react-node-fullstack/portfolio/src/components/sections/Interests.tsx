const Interests = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {['Sketching', 'Dancing', 'Running marathons', 'Cooking', 'Learning new things'].map((interest) => (
      <div key={interest} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        {interest}
      </div>
    ))}
  </div>
);

export default Interests;
