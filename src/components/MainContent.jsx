import { motion } from "framer-motion";

function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_25px_cyan] transition"
    >
      {children}
    </motion.div>
  );
}

function MainContent() {
  return (
    <div className="flex-1 p-12">

      {/* ABOUT */}
      <Section id="about" title="About Me">
        <Card>
          <p className="text-gray-300 leading-relaxed">
            I am an enthusiastic Computer Science student at Mahindra University
            with a strong interest in Full Stack Development and Artificial Intelligence.
            I enjoy building real-world applications, solving complex technical problems,
            and working in collaborative environments.
          </p>

          <p className="text-gray-400 mt-4">
            My focus areas include scalable web systems, machine learning pipelines,
            and intelligent automation solutions that deliver real impact.
          </p>
        </Card>
      </Section>

      {/* STATS */}
      <Section id="stats" title="Stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["4+", "Major Projects"],
            ["3+", "AI Models Built"],
            ["8+", "Technologies"],
            ["1", "Hackathon"]
          ].map(([num, label]) => (
            <Card key={label}>
              <h3 className="text-2xl font-bold text-cyan-400">{num}</h3>
              <p className="text-gray-400 text-sm">{label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8">

          <Card>
            <h3 className="text-xl font-semibold">
              Hybrid Predictive Maintenance System
            </h3>
            <ul className="text-gray-400 text-sm mt-3 space-y-2">
              <li>• Built ML pipeline using K-Means, Logistic Regression & Random Forest</li>
              <li>• Developed time-to-failure prediction models</li>
              <li>• Used PCA visualization and evaluated with RMSE, MAE, R²</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">
              Power Demand Forecasting Dashboard
            </h3>
            <ul className="text-gray-400 text-sm mt-3 space-y-2">
              <li>• Implemented SARIMA & GRU models for forecasting</li>
              <li>• Built anomaly detection using z-score analysis</li>
              <li>• Created Streamlit dashboard with real-time KPIs</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">
              Driver Drowsiness Detection
            </h3>
            <ul className="text-gray-400 text-sm mt-3 space-y-2">
              <li>• Built CNN model using TensorFlow & OpenCV</li>
              <li>• Real-time detection from live camera feed</li>
              <li>• Integrated alert system for driver safety</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">
              AI Interview Agent
            </h3>
            <ul className="text-gray-400 text-sm mt-3 space-y-2">
              <li>• Built using Flask + OpenAI API</li>
              <li>• Supports multi-round interviews & evaluation</li>
              <li>• Includes admin dashboard & analytics</li>
            </ul>
          </Card>

        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <h3 className="font-semibold mb-2">Languages</h3>
            <p className="text-gray-400">C, Java, JavaScript, Python, HTML, CSS</p>
          </Card>

          <Card>
            <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
            <p className="text-gray-400">
              Django, Flask, NumPy, Pandas, Matplotlib, Scikit-learn, Keras
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold mb-2">Databases</h3>
            <p className="text-gray-400">MySQL, SQLite</p>
          </Card>

          <Card>
            <h3 className="font-semibold mb-2">Tools</h3>
            <p className="text-gray-400">VS Code, Google Colab, Power BI</p>
          </Card>

        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="space-y-6">

          <Card>
            <h3 className="font-semibold">Mahindra University</h3>
            <p className="text-gray-400 text-sm">
              B.Tech in Computer Science — CGPA: 6.62 (2023–2027)
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold">Sri Chaitanya Junior College</h3>
            <p className="text-gray-400 text-sm">
              Intermediate — 96.1%
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold">Sri Chaitanya Techno School</h3>
            <p className="text-gray-400 text-sm">
              10th Grade — 100%
            </p>
          </Card>

        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" title="Certifications">
        <Card>
          <ul className="text-gray-400 space-y-2">
            <li>• AI Hackathon — Microsoft Hyderabad</li>
            <li>• Data Analytics Essentials — Cisco</li>
            <li>• Ethical Hacking Workshop — BITS Hyderabad</li>
          </ul>
        </Card>
      </Section>

      {/* COURSEWORK */}
      <Section id="coursework" title="Coursework">
        <Card>
          <p className="text-gray-400">
            Data Structures, Object-Oriented Programming, Machine Learning Basics
          </p>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Card>
          <p className="text-gray-400">📧 thilakkusampudi@gmail.com</p>
          <p className="text-gray-400">📞 +91 9111155225</p>
          <p className="text-gray-400">📍 Hyderabad, India</p>
        </Card>
      </Section>

    </div>
  );
}

export default MainContent;