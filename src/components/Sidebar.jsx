import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Sidebar() {
  return (
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[300px] h-screen sticky top-0 p-6 bg-[#020617]/80 backdrop-blur-xl border-r border-cyan-500/20"
    >
      <div className="text-center">

        {/* ✅ FIXED IMAGE */}
        <img
          src={profile}
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-cyan-400 object-cover shadow-[0_0_20px_cyan]"
        />

        <h1 className="mt-4 text-xl font-bold">
          Thilak Kusampudi
        </h1>

        <p className="text-cyan-400 text-sm">
          Full Stack Developer | AI Enthusiast
        </p>

        <p className="text-gray-400 text-xs mt-2">
          Hyderabad, India
        </p>

        {/* ✅ FIXED DOWNLOAD BUTTON */}
        <a
          href="/resume.pdf"
          download="Thilak_Kusampudi_Resume.pdf"
          className="mt-4 inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400 rounded-lg hover:bg-cyan-500/40 text-sm"
        >
          Download Resume
        </a>

      </div>

      <div className="mt-10 space-y-4 text-sm">
        <a href="#about" className="block hover:text-cyan-400">About</a>
        <a href="#stats" className="block hover:text-cyan-400">Stats</a>
        <a href="#projects" className="block hover:text-cyan-400">Projects</a>
        <a href="#skills" className="block hover:text-cyan-400">Skills</a>
        <a href="#education" className="block hover:text-cyan-400">Education</a>
        <a href="#contact" className="block hover:text-cyan-400">Contact</a>
      </div>

      <div className="mt-10 space-y-2 text-sm">
        <a href="https://github.com/Thilak-15" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/thilak-kusampudi-1b054b333/" target="_blank">LinkedIn</a>
      </div>

    </motion.div>
  );
}

export default Sidebar;