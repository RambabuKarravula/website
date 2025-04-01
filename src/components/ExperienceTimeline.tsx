import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "AI & ML Engineer",
    company: "CAP Corporate AI Solutions LLP",
    period: "Dec 2024 - Present",
    description: [
      "Developed RAG applications and database management systems",
      "Created invoice processing applications with AI integration",
      "Implemented cloud solutions using AWS, GCP, and Firebase"
    ]
  },
  {
    title: "ML Engineer Intern",
    company: "CAP Corporate AI Solutions LLP",
    period: "Aug 2024 - Nov 2024",
    description: [
      "Worked on machine learning model development and deployment",
      "Gained hands-on experience with NLP and deep learning"
    ]
  },
  {
    title: "AI/ML and Cloud Engineer Intern",
    company: "METIS",
    period: "May 2024 - Present",
    description: [
      "Developing AI solutions and implementing cloud architectures",
      "Working with AWS, GCP, and modern deployment platforms"
    ]
  }
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-indigo-500 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-indigo-500" />
          </div>

          {/* Content */}
          <div className={`ml-16 md:ml-0 md:w-1/2 ${
            index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
          }`}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-indigo-600 font-semibold mb-2">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start">
                    <span className="mr-2 text-indigo-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;