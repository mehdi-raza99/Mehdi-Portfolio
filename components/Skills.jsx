"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "./ui/card"

export default function Skills() {
  const skillsRef = useRef(null)

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

    const elements = skillsRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C/C++"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Express.js", "Node.js", "RESTful APIs"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Redux/RTK", "Postman", "VS Code"],
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS"],
    },
  ]

  return (
    <section id="skills" ref={skillsRef} className="min-h-screen flex items-center sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary mb-8 sm:mb-12 lg:mb-16 px-2">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out w-full max-w-sm"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full min-h-[180px] sm:min-h-[200px] w-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                  <h3 className="font-semibold text-primary mb-3 sm:mb-4 lg:mb-6 text-base sm:text-lg lg:text-xl text-center">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3 flex-1 justify-center items-start">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gradient-to-r from-accent/10 to-primary/10 text-accent rounded-full text-xs sm:text-sm font-medium hover:from-accent/20 hover:to-primary/20 transition-all duration-200 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
