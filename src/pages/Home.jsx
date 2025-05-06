import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Send, Download } from "lucide-react"
import * as THREE from "three"
import TypingText from "../components/TypingText"
import profileImage from "../assets/srijit2.jpeg"
import { Link } from 'react-router-dom'

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

// 3D Background Component
const ParticleBackground = () => {
  const mountRef = useRef(null)
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    
    // Only append if the ref exists and doesn't already have a canvas
    if (mountRef.current && !mountRef.current.querySelector('canvas')) {
      mountRef.current.appendChild(renderer.domElement)
    }
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 6000
    
    const posArray = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i++) {
      // Create particles in a spherical distribution
      posArray[i] = (Math.random() - 0.5) * 25
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    
    // Create different sized particles for depth effect
    const sizes = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      sizes[i] = Math.random() * 0.05 + 0.01
    }
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x2400dd,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    })
    
    // Points mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    
    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Slow ambient rotation for more professional feel
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005
      
      // Subtle mouse movement effect - reduced intensity for professional look
      particlesMesh.rotation.x += mouseY * 0.0005
      particlesMesh.rotation.y += mouseX * 0.0005
      
      // Create wave-like movement
      const now = Date.now() / 1000;
      const positions = particlesMesh.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        // Create subtle wave movement based on position and time
        positions[i + 2] = z + Math.sin(x / 2 + now) * 0.05;
      }
      
      particlesMesh.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])
  
  return <div ref={mountRef} className="fixed inset-0 z-0" />
}

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* 3D Background */}
      <ParticleBackground />
      
      {/* Enhanced gradient overlay for depth */}
      <div
        className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900/50 via-indigo-900/40 to-black/70"
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
            Hi, I'm <TypingText texts={["Srijit Pal"]} />
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
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              Contact Me
            </Link>
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