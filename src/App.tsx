import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import ExperienceTimeline from './components/ExperienceTimeline';
import { Github, Linkedin, Mail, Download, ExternalLink, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const skillCategories = {
    "Data Science/Engineering": [
      "Python",
      "SQL/NoSQL",
      "Data Visualization",
      "Statistical Analysis",
      "ETL Pipelines",
      "Data Preprocessing",
      "Pandas",
      "NumPy",
      "Matplotlib/Seaborn"
    ],
    "AI/Machine Learning": [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Neural Networks",
      "Computer Vision",
      "NLP",
      "Deep Learning",
      "Model Deployment"
    ],
    "Cloud Services": [
      "AWS Services",
      "GCP",
      "Firebase",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud Security",
      "Microservices"
    ],
    "LLMs & GenAI": [
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "LLM Fine-tuning",
      "Vector Databases",
      "Embeddings",
      "OpenAI API",
      "Hugging Face"
    ],
    "Web Development": [
      "React.js",
      "Node.js",
      "FastAPI",
      "Flask",
      "RESTful APIs",
      "HTML/CSS",
      "JavaScript/TypeScript",
      "MongoDB"
    ],
    "Tools & Others": [
      "Git",
      "Linux",
      "Jupyter",
      "Apache Airflow",
      "MLflow",
      "DVC",
      "Streamlit",
      "Agile/Scrum"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-blue-50/30 animate-gradient-xy"></div>
      <BackgroundParticles />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Hello, I'm Rambabu Karravula
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            AI/ML and Cloud Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-float">
            <motion.a
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/RambabuKarravula"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </motion.a>
          </div>
          <div className="mt-12 flex justify-center space-x-8">
            <motion.a 
              whileHover={{ scale: 1.2 }}
              href="https://github.com/RambabuKarravula" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-7 h-7" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/rambabukarravula/" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2 }}
              href="mailto:karravularambabu@gmail.com" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-7 h-7" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm relative overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-purple-50/20 animate-pulse-slow"></div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">About Me</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                As an AI/ML Engineer with 10 months of specialized experience, I've developed end-to-end solutions including RAG applications, database management systems, and intelligent invoice processing applications.
              </p>
              <p className="mb-4">
                My expertise spans cloud platforms including AWS, GCP, Firebase, Supabase, Appwrite, and Vercel, enabling me to build and deploy scalable AI solutions.
              </p>
              <p>
                My technical stack encompasses Machine Learning, Deep Learning, Natural Language Processing, and database architecture. I specialize in developing production-ready AI solutions that bridge traditional data management with modern AI capabilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-16">Professional Experience</h2>
            <ExperienceTimeline />
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">Education</h2>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900">M.Sc. Data Science</h3>
                <p className="text-indigo-600">Gitam university | 2022 - 2024</p>
                <p className="text-gray-600 mt-2">CGPA: 8.2/10</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900">B.Sc. Computer Science</h3>
                <p className="text-indigo-600">Sri Harshini Ug and Pg college | 2018 - 2021</p>
                <p className="text-gray-600 mt-2">Percentage: 80.2%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-16">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-700"
                      >
                        <ChevronRight className="w-4 h-4 text-indigo-600 mr-2" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Advanced Malware Detection",
                  description: "Using ML and DL techniques for malware detection and classification.",
                  tech: ["Python", "TensorFlow", "Scikit-learn"]
                },
                {
                  title: "Smart Document Assistant",
                  description: "A versatile document assistant combining voice interaction and AI-powered analysis.",
                  tech: ["Python", "LLMs", "RAG"]
                },
                {
                  title: "ETL Pipeline with Apache Airflow",
                  description: "Automated ETL pipeline deployed on AWS EC2 using Apache Airflow.",
                  tech: ["Apache Airflow", "AWS", "Python"]
                },
                {
                  title: "Movie Recommendation System",
                  description: "A content-based movie recommendation system using Python and Flask.",
                  tech: ["Python", "Flask", "Scikit-learn"]
                }
              ].map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-full text-sm hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 hover:shadow-md cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    View Code <ExternalLink className="w-4 h-4 ml-1" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Rambabu Karravula</h3>
            <p className="text-gray-400">AI/ML and Cloud Engineer.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Education', href: '#education' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group relative overflow-hidden"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      const navbarHeight = 64; // Height of the fixed navbar
                      if (element) {
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                          top: elementPosition - navbarHeight,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <ChevronRight className="w-4 h-4 mr-1 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:transform after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                karravularambabu@gmail.com
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +91 9848686433
              </p>
              <p className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          {/* <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/RambabuKarravula" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:shadow-glow"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/rambabukarravula/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:shadow-glow"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:karravularambabu@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:shadow-glow"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div> */}
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">© 2025 Rambabu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
