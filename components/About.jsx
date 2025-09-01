"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function About() {
  const aboutRef = useRef(null)

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

    const elements = aboutRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-1000 ease-out delay-200">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/mehdi-headshot.jpg"
                  alt="Mehdi Raza - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-primary to-accent rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-accent to-primary rounded-full opacity-30"></div>
            </div>
          </div>

          <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-1000 ease-out delay-300">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                I'm a passionate Computer Science student at Government College University, Lahore, with a strong
                foundation in web development and modern technologies. My journey in programming began with curiosity
                and has evolved into a deep commitment to creating meaningful digital experiences that solve real-world
                problems.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                With expertise in <b>React, JavaScript, TypeScript, and full-stack development.</b> I specialize in building
                scalable web applications using modern frameworks and tools. My experience spans from frontend
                development with <b>React and Tailwind CSS</b> to backend development with Node.js and database management with  
                <b> MySQL and MongoDB</b>.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                I'm particularly interested in user experience design, performance optimization, and clean code
                architecture. Currently maintaining a <b>3.65 CGPA</b> while actively working on personal projects and
                contributing to open-source initiatives. I'm always eager to learn new technologies, collaborate on
                innovative projects, and contribute to the developer community.
              </p>

              
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-1000 ease-out delay-500">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 md:p-3 bg-gradient-to-r from-primary to-accent rounded-xl flex-shrink-0">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">Education</h3>
                    <div className="space-y-4">
                      <div className="border-l-2 border-accent pl-4">
                        <p className="font-semibold text-base md:text-lg text-primary">
                          Bachelor of Science in Computer Science
                        </p>
                        <p className="text-accent font-medium text-sm md:text-base">
                          Government College University, Lahore
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">2022 – 2026 | CGPA: 3.65/4.0</p>
                        <p className="text-xs md:text-sm text-foreground mt-2">
                          Relevant Coursework: Data Structures & Algorithms, Database Management Systems,
                          Object-Oriented Programming, Web Development, Software Engineering
                        </p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <p className="font-semibold text-base md:text-lg text-primary">
                          Intermediate in Computer Science (ICS)
                        </p>
                        <p className="text-primary font-medium text-sm md:text-base">Unique College</p>
                        <p className="text-xs md:text-sm text-muted-foreground">2020 – 2022 | Percentage: 93%</p>
                        <p className="text-xs md:text-sm text-foreground mt-2">
                          Foundation in Computer Science, Mathematics, Physics, and English with exceptional academic
                          performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-1000 ease-out delay-600">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 md:p-3 bg-gradient-to-r from-accent to-primary rounded-xl flex-shrink-0">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">Key Achievements</h3>
                    <div className="space-y-4">
                      <div className="border-l-2 border-accent pl-4">
                        <p className="font-semibold text-base md:text-lg text-primary">Amal Career-Prep Fellowship</p>
                        <p className="text-accent font-medium text-sm md:text-base">
                          Stanford University-funded Program
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Selected from 4000+ competitive applicants
                        </p>
                        <p className="text-xs md:text-sm text-foreground mt-2">
                          Completed 150+ hours of intensive training in professional skills, leadership, and career
                          development
                        </p>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <p className="font-semibold text-base md:text-lg text-primary">PMYP Laptop Scheme</p>
                        <p className="text-primary font-medium text-sm md:text-base">Prime Minister's Youth Program</p>
                        <p className="text-xs md:text-sm text-foreground mt-2">
                          Awarded a laptop as part of the Prime Minister’s Youth Program (PMYP) for outstanding academic
performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
