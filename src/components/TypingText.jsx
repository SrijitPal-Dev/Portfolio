import { useEffect, useState } from "react"

const TypingText = ({ texts = [], speed = 100, pause = 1500 }) => {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = isDeleting ? speed / 2 : speed

    const handleTyping = () => {
      setDisplayedText(currentText.substring(0, charIndex))

      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pause)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }

    const timer = setTimeout(handleTyping, timeout)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts, speed, pause])

  return (
    <span
      className="text-fuchsia-900 font-bold"
      style={{
        textShadow: `
      -1px -1px 0 white,  
       1px -1px 0 white,
      -1px  1px 0 white,
       1px  1px 0 white
    `
      }}
    >
      {displayedText}
    </span>


  )
}

export default TypingText
