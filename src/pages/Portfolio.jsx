import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"
import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'

const projects = [
  {
    id: 1,
    title: "FarmSmart",
    category: "Web Dev",
    image: portfolio1,
  },
  {
    id: 2,
    title: "E-Examin",
    category: "Web Dev",
    image: portfolio2,
  },
  {
    id: 3,
    title: "YoloObj",
    category: "Web Dev",
    image: portfolio3,
  },
]

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

const Portfolio = () => {
  return (
    <motion.section
      className="px-6 my-20 py-20 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-semibold text-gray-800 mb-6"
        variants={itemVariants}
      >
        Portfolio
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
            variants={itemVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{project.category}</p>
              <Link
                to={`/portfolio/${project.id}`}
                className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1"
              >
                View Details <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Portfolio
