import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowLeft, Globe } from 'lucide-react'
import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'

const projectData = {
  1: {
    title: "FarmSmart",
    description:
      "Built a platform for farmers to schedule soil sample pickups, track progress, and purchase farming essentials like fertilizers and seeds. Included a simple JavaScript-based chatbot to assist users.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    repo: "https://github.com/SrijitPal-Dev/SmartFarm",
    website: "https://smartfarm-pixf.onrender.com/",
    image: portfolio1,
  },
  2: {
    title: "E-Examin",
    description:
      "Developed an online Quiz platform where teachers can create quizzes by submitting questions for specific subjects and schedule them. Students can log in to attempt quizzes and view results presented with analytical insights via bar graphs. Teachers can track participation and performance of students.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Plotly.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    repo: "https://github.com/SrijitPal-Dev/Online-Exam-System",
    website: "https://online-exam-system-osvc.onrender.com/",
    image: portfolio2,
  },
  3: {
    title: "YoloObj",
    description:
      "Built a web application for real-time object detection using YOLOv8. Users can log in to upload images or videos, use their camera for live detection, view detection history, and provide feedback. Admins have access to all detection records, user management, and uploaded media.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "MySQL",
      "Flask-SQLAlchemy",
      "OpenCV (cv2)",
      "Ultralytics YOLOv8",
      "NumPy",
    ],
    repo: "https://github.com/SrijitPal-Dev/Yolov8-Object-Detection",
    website: null,
    image: portfolio3,
  },
}

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: 'easeOut' },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const PortfolioDetails = () => {
  const { id } = useParams()
  const project = projectData[id]

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-500">
        Project not found.
      </div>
    )
  }

  return (
    <motion.section
      className="px-6 my-20 py-20 max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="rounded-lg shadow mb-6"
        variants={itemVariants}
      />

      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-2"
        variants={itemVariants}
      >
        {project.title}
      </motion.h2>

      <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
        {project.description}
      </motion.p>

      <motion.div className="mb-4" variants={itemVariants}>
        <h4 className="font-medium text-gray-700">Tech Stack:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </motion.div>

      <div className="flex flex-col gap-2 mt-4">
        {project.repo && (
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
            variants={itemVariants}
          >
            GitHub Repository <ExternalLink className="w-4 h-4" />
          </motion.a>
        )}

        {project.website && (
          <motion.a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline"
            variants={itemVariants}
          >
            Visit Website <Globe className="w-4 h-4" />
          </motion.a>
        )}
      </div>

      <motion.div className="mt-6" variants={itemVariants}>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default PortfolioDetails
