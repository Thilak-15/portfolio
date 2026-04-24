import { data } from "../data/portfolioData";

function Skills() {
  return (
    <section>

      <h2 className="text-3xl mb-6 font-bold">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(data.skills).map(([key, value]) => (
          <div key={key} className="card">

            <h3 className="capitalize mb-3">{key}</h3>

            <div className="flex flex-wrap gap-2">
              {value.map((skill, i) => (
                <span key={i} className="bg-gray-800 px-3 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;