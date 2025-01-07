interface ActorsProps {
  casts?: {
    firstName: string;
    lastName: string;
    role: string;
  }[];
}

const Actors = ({ casts }: ActorsProps) => {
  return (
    <section>
      <h2 className="font-bold text-2xl mb-4">| Top Cast:</h2>
      <div className="grid grid-cols-2 gap-4">
        {casts?.map(({ role, firstName, lastName }) => (
          <div key={role} className="space-y-1">
            <div className="font-bold text-lg">{role}</div>
            <span>
              {firstName} {lastName}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Actors;
