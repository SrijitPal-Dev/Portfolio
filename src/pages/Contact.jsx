import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, MessageCircle, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    emailjs.sendForm(
      'service_t94dvqd',
      'template_co2214x',
      formRef.current,
      '1s3n1edw5xNpw87pQ'
    )
      .then(() => {
        setStatus('success')
        setLoading(false)
        formRef.current.reset()
      })
      .catch(() => {
        setStatus('error')
        setLoading(false)
      })
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.section className="px-6 my-20 py-20 max-w-3xl mx-auto" variants={itemVariants}>
        <motion.h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2" variants={itemVariants}>
          <MessageCircle className="w-6 h-6 text-blue-600" />
          Contact Me
        </motion.h2>

        <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
          Have a question, proposal, or just want to say hi? Fill out the form below and I’ll try to get back to you as soon as I can.
        </motion.p>

        <motion.form ref={formRef} onSubmit={sendEmail} className="space-y-6" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <label htmlFor="user_name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="user_email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-gray-500" />
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What would you like to discuss?"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-6 py-2 rounded shadow-md transition-transform transform duration-300
              ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white'}`}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            variants={itemVariants}
          >
            {loading ? (
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <motion.p className="text-green-600 mt-4">✅ Message sent successfully!</motion.p>
          )}
          {status === 'error' && (
            <motion.p className="text-red-600 mt-4">❌ Something went wrong. Please try again.</motion.p>
          )}
        </motion.form>
      </motion.section>
    </motion.div>
  )
}

export default Contact
