import { data } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects">

      <h2 className="text-3xl mb-6 font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {data.projects.map((p, i) => (
          <div key={i} className="card hover:scale-105 transition">

            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>

            <ul className="mt-3 text-sm text-gray-500 list-disc ml-5">
              {p.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>

            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tech.map((t, idx) => (
                <span key={idx} className="bg-gray-800 px-2 py-1 text-xs rounded">
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;