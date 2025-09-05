"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text">
            Mehdi Raza
          </h1>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
          <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 font-light">
            Software Engineer - MERN Stack Developer
          </p>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
          <p className="text-lg text-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating efficient, scalable web applications with modern technologies. Currently pursuing
            BSCS at Government College University, Lahore with a focus on full-stack development and a strong foundation
            in data structures, algorithms, and software engineering principles.
          </p>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400">
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
              <MapPin size={18} />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
              <Phone size={18} />
              <span>+92-3244212019</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
              <Mail size={18} />
              <span>mehdics100@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500">
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/mehdi-raza99"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/mehdi-raza99/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:mehdics100@gmail.com"
              className="p-4 bg-card hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-700">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 animate-bounce"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  )
}
