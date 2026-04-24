import { data } from "../data/portfolioData";

function About() {
  return (
    <section id="about">

      <h2 className="text-3xl mb-6 font-bold">About Me</h2>

      <p className="text-gray-400 mb-10 max-w-2xl">{data.about}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {data.education.map((edu, i) => (
          <div key={i} className="card">
            <h3 className="font-semibold">{edu.title}</h3>
            <p className="text-gray-400">{edu.org}</p>
            <p className="text-gray-500">{edu.score} | {edu.year}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default About;