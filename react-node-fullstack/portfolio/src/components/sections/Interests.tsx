const Interests = () => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {['Sketching', 'Painting', 'Cooking', 'Creativity', 'Learning new things'].map((interest) => (
      <div key={interest} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700 shadow-sm">
        {interest}
      </div>
    ))}
  </div>
);

export default Interests;
