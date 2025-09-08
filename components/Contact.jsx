"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast';


export default function Contact() {
  const contactRef = useRef(null)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    toast.success('Message sent!');
    e.target.reset();
  } else {
    toast.error('Failed to send message.');
  }
};
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

    const elements = contactRef.current?.querySelectorAll(".scroll-animate")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
  return (
    <section
      id="contact"
      ref={contactRef}
      className="min-h-screen flex items-center py-12 sm:p-24 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-4">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="scroll-animate opacity-0 translate-y-8 lg:-translate-x-8 lg:translate-y-0 transition-all duration-1000 ease-out delay-200 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">Let's Connect</h3>
            <p className="text-sm sm:text-base lg:text-lg text-foreground mb-6 sm:mb-8 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and exciting projects. Whether you have a
              specific project in mind, want to discuss potential opportunities, or just want to chat about technology
              and development, I'd love to hear from you!
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-accent to-primary rounded-xl flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-primary text-sm sm:text-base lg:text-lg">Email</p>
                  <a
                    href="mailto:mehdics100@gmail.com"
                    className="text-xs sm:text-sm lg:text-base text-muted-foreground hover:text-accent transition-colors duration-200 break-all"
                  >
                    mehdics100@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-primary to-accent rounded-xl flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-primary text-sm sm:text-base lg:text-lg">Phone</p>
                  <a
                    href="tel:+923244212019"
                    className="text-xs sm:text-sm lg:text-base text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    +92-3244212019
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-accent to-primary rounded-xl flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-primary text-sm sm:text-base lg:text-lg">Location</p>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/mehdi-raza99"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-card hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mehdi-raza99/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-card hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="scroll-animate opacity-0 translate-y-8 lg:translate-x-8 lg:translate-y-0 transition-all duration-1000 ease-out delay-300 order-1 lg:order-2">
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">Send me a message</h3>
                <Toaster position="bottom-right" />
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="4f839f45-067d-4553-a3bd-0467d85d5123"
                  />
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground resize-none transition-all duration-200"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white flex items-center justify-center gap-2 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
