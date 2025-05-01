import { motion } from "framer-motion"
import { LayoutTemplate, Palette } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Building responsive, accessible, and fast web applications using modern frameworks.",
    icon: <LayoutTemplate className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and seamless user experiences tailored to business goals.",
    icon: <Palette className="w-6 h-6 text-blue-600" />,
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

const Services = () => {
  return (
    <motion.section
      className="px-6 my-20 py-20 max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-semibold text-gray-800 mb-6"
        variants={itemVariants}
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white shadow-sm border rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col gap-3"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div>{service.icon}</div>
            <h3 className="text-lg font-bold text-blue-700">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Services
