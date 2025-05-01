import { motion } from 'framer-motion'
import {
  Briefcase,
  GraduationCap,
  Languages,
  Award
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Resume = () => {
  return (
    <motion.section
      className="px-6 my-20 py-20 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-semibold text-gray-800 mb-6"
        variants={itemVariants}
      >
        Resume
      </motion.h2>

      {/* Experience */}
      <motion.div className="mb-10" variants={itemVariants}>
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="text-blue-700 w-5 h-5" />
          <h3 className="text-xl font-bold text-blue-700">Experience</h3>
        </div>

        <div className="space-y-6">
          <motion.div className="m-4 p-4 border-l-4 border-blue-600 bg-white shadow-sm rounded" variants={itemVariants}>
            <h4 className="font-semibold text-gray-800">Intern – Zabx Infratech</h4>
            <span className="text-sm text-gray-500">September, 2024 – Present</span>
            <p className="text-gray-600 mt-1">
              Developed and implemented object detection models using YOLOv8 for real-time detection tasks.
              Collaborated with team members on data preparation, code reviews, and experiment documentation.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Education */}
      <motion.div className="mb-10" variants={itemVariants}>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="text-blue-700 w-5 h-5" />
          <h3 className="text-xl font-bold text-blue-700">Education</h3>
        </div>
        <div className="space-y-6">
        <motion.div className="m-4 p-4 border-l-4 border-blue-600 bg-white shadow-sm rounded" variants={itemVariants}>
          <h4 className="font-semibold text-gray-800">B.Tech in Information Technology – B.P Poddar Institute of Management And Technology</h4>
          <span className="text-sm text-gray-500">2022 – 2026</span>
          <p className="text-gray-600 mt-1">
          University : MAKAUT <br/>
          [Number] GPA/CGPA : 8.336          
          </p>
        </motion.div>
        </div>
        <div className="space-y-6">
        <motion.div className="m-4 p-4 border-l-4 border-blue-600 bg-white shadow-sm rounded" variants={itemVariants}>
          <h4 className="font-semibold text-gray-800">Higher Secondary Education – WWA Cossipore English School</h4>
          <span className="text-sm text-gray-500">2020 – 2022</span>
          <p className="text-gray-600 mt-1">
          Board : ISC <br/>
          Final Grade: [Number]% : 91.5          
          </p>
        </motion.div>
        </div>
        <div className="space-y-6">
        <motion.div className="m-4 p-4 border-l-4 border-blue-600 bg-white shadow-sm rounded" variants={itemVariants}>
          <h4 className="font-semibold text-gray-800">Secondary Education – WWA Cossipore English School</h4>
          <span className="text-sm text-gray-500">2006 – 2020</span>
          <p className="text-gray-600 mt-1">
          Board : ICSE <br/>
          Final Grade: [Number]% : 96.6       
          </p>
        </motion.div>
        </div>

      </motion.div>

      {/* Languages Known */}
      <motion.div className="mb-10" variants={itemVariants}>
        <div className="flex items-center gap-2 mb-2">
          <Languages className="text-blue-700 w-5 h-5" />
          <h3 className="text-xl font-bold text-blue-700">Languages Known</h3>
        </div>
        <motion.ul className="m-4 list-disc list-inside text-gray-700 pl-4 space-y-1" variants={itemVariants}>
          <li>English (Fluent)</li>
          <li>Bengali (Native)</li>
          <li>Hindi (Professional)</li>
          <li>Spanish (Beginner)</li>
        </motion.ul>
      </motion.div>

      {/* Tech Stack */}
      <motion.div className="mb-10" variants={itemVariants}>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="text-blue-700 w-5 h-5" />
          <h3 className="text-xl font-bold text-blue-700">Tech Stack</h3>
        </div>
        <motion.ul className="m-4 list-disc list-inside text-gray-700 pl-4 space-y-1" variants={itemVariants}>
          <li>Programming Languages : Java, C, Python</li>
          <li>Frontend: HTML, React, Tailwind CSS, Bootstrap CSS, JavaScript </li>
          <li>Backend - Framework & Libraries: PyTorch, OpenCV, Ultralytics YOLOv8,Express.js, Node.js, Flask</li>
          <li>Database: MongoDB, PostgreSQL (via pgAdmin), MySQL</li>
          <li>Tools: Git, VSCode, Canva</li>
        </motion.ul>
      </motion.div>

      {/* Accomplishments */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 mb-2">
          <Award className="text-blue-700 w-5 h-5" />
          <h3 className="text-xl font-bold text-blue-700">Accomplishments</h3>
        </div>
        <motion.ul className="m-4 list-disc list-inside text-gray-700 pl-4 space-y-1" variants={itemVariants}>
          <li>Qualified for the SIH (Smart India Hackathon) 2024 College Level Round</li>
          <li>Finalist of Smart Coder 2.24 - An Inter College Coding Contest organized by BP Poddar Institute of Management and Technology</li>
          <li>Extra-Curricular : Winner of Intra College Football Tournament 2024</li>
          <li>Academic : GATE 2025 Qualified</li>
        </motion.ul>
      </motion.div>
    </motion.section>
  )
}

export default Resume
