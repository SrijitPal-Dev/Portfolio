import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = ({ dark }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  const handleToggle = () => {
    if (menuOpen) {
      setIsAnimatingOut(true)
      setTimeout(() => {
        setMenuOpen(false)
        setIsAnimatingOut(false)
      }, 300) // matches animation duration
    } else {
      setMenuOpen(true)
    }
  }

  const baseText = dark ? 'text-white' : 'text-black'
  const navText = dark ? 'text-white hover:text-white' : 'text-black hover:text-black'
  const activeText = dark
    ? 'text-white border-b-2 border-white pb-1'
    : 'text-black border-b-2 border-black pb-1'

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/10 shadow-md ${baseText}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img
            src="/logo2.png"
            alt="Srijit Pal Logo"
            className={`w-12 h-12 rounded-full border-2 ${dark ? 'border-white' : 'border-black'} shadow-md`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => (isActive ? activeText : navText)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button onClick={handleToggle} className="md:hidden" aria-label="Toggle Menu">
          {menuOpen && !isAnimatingOut ? (
            <X className={`${baseText} w-6 h-6`} />
          ) : (
            <Menu className={`${baseText} w-6 h-6`} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown with Entry/Exit Animation */}
      {(menuOpen || isAnimatingOut) && (
        <div
          className={`md:hidden px-4 pb-4 ${baseText} ${
            isAnimatingOut ? 'animate-slideFadeUp' : 'animate-slideFadeDown'
          }`}
        >
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {navItems.map(item => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? activeText : navText)}
                  onClick={handleToggle} // closes and animates out
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
