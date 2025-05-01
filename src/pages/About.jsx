import { motion } from "framer-motion"
import { User, MapPin, GraduationCap } from "lucide-react"

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

const infoItems = [
  { title: "Name", content: "Srijit Pal", icon: <User className="w-5 h-5 text-blue-600" /> },
  { title: "Location", content: "Kolkata, India", icon: <MapPin className="w-5 h-5 text-blue-600" /> },
  { title: "Experience", content: "Student", icon: <GraduationCap className="w-5 h-5 text-blue-600" /> },
]

const About = () => {
  return (
    <motion.section
      className="px-6 my-20 py-20 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-semibold text-gray-800 mb-4"
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
        Hello! I’m Srijit Pal, a 3rd-year B.Tech student in Information Technology at B.P. Poddar Institute of Management and Technology, and a passionate full-stack web developer.
      </motion.p>

      <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
        I specialize in building fast, accessible, and user-friendly websites using technologies like React, Node.js, and Tailwind CSS. My approach blends technical skill with strong business understanding.
      </motion.p>

      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {infoItems.map(({ title, content, icon }, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex items-start gap-4"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mt-1">{icon}</div>
            <div>
              <h3 className="font-medium text-gray-700">{title}</h3>
              <p className="text-gray-600">{content}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default About
