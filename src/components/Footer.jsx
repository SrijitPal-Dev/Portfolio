import {
  Linkedin,
  Github,
  Facebook,
  Instagram
} from 'lucide-react'

const Footer = ({ dark }) => {
  const textColor = dark ? 'text-white' : 'text-black'

  return (
    <footer
      className={`w-full mt-20 backdrop-blur-md bg-white/10 ${textColor} text-center py-6 z-10 relative shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Srijit Pal. All rights reserved.
        </p>
        <p className="text-xs mt-1 opacity-80">
          Built with ❤️ using React & Tailwind CSS
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 gap-4">
          <a
            href="https://www.linkedin.com/in/srijitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/srijitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/srijitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/srijitpal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
