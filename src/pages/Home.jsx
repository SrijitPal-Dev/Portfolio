import { motion } from "framer-motion"
import { Send, Download } from "lucide-react"
import TypingText from "../components/TypingText"
import profileImage from "../assets/srijit2.jpeg"
import bgImage from "../assets/tech-bg2.jpg"

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Main Content */}
      <motion.main
        className="relative z-10 flex flex-col items-center text-center text-white px-6 my-20 py-20 max-w-3xl mx-auto space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl"
          variants={itemVariants}
        >
          <img
            src={profileImage}
            alt="Srijit Pal"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Glass Container */}
        <motion.div
          className="backdrop-blur-md bg-white/10 p-6 md:p-10 rounded-2xl shadow-xl"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            variants={itemVariants}
          >
            Hi, I’m <TypingText texts={["Srijit Pal"]} />
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 font-medium mb-6"
            variants={itemVariants}
          >
            A passionate{" "}
            <TypingText
              texts={["Web Developer", "UI/UX Designer", "Problem Solver"]}
            />
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <a
              href="/contact"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              <Send className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition shadow-md border border-blue-600"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  )
}

export default Home
