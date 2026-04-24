import { data } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="text-center">

      <h2 className="text-3xl mb-4 font-bold">Let’s Connect</h2>

      <p className="text-gray-400">{data.contact.email}</p>

      <div className="mt-4 flex justify-center gap-6">
        <a href={data.contact.github}>GitHub</a>
        <a href={data.contact.linkedin}>LinkedIn</a>
      </div>

    </section>
  );
}

export default Contact;