import { data } from "../data/portfolioData";

function Hero() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>{data.name}</h1>
      <p>{data.role}</p>
    </div>
  );
}

export default Hero;