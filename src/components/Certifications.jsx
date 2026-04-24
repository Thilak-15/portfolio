import { data } from "../data/portfolioData";

function Certifications() {
  return (
    <section>

      <h2 className="text-3xl mb-6 font-bold">Certifications</h2>

      <ul className="space-y-2 text-gray-400">
        {data.certifications.map((c, i) => (
          <li key={i}>• {c}</li>
        ))}
      </ul>

    </section>
  );
}

export default Certifications;