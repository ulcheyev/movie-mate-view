const Actors = () => {
  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">| Top Cast:</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { role: "Cobb", actor: "Leonardo DiCaprio" },
          { role: "Arthur", actor: "Joseph Gordon-Levitt" },
          { role: "Ariadne", actor: "Elliot Page" },
        ].map(({ role, actor }) => (
          <div key={role} className="space-y-1">
            <div className="font-bold text-lg">{role}</div>
            <span>{actor}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Actors;
