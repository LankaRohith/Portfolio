"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "rlanka0702@gmail.com",
    href: "mailto:rlanka0702@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(314) 280-8091",
    href: "tel:+13142808091",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Royal Palm Beach, FL",
    href: "https://www.google.com/maps/place/Royal+Palm+Beach,+FL/@26.708056,-80.135556,12z/data=!3m1!4b1!4m5!3m4!1s0x88d9291c7f1a5f6f:0x7d3a5f9e5e5e5e5e!8m2!3d26.708056!4d-80.135556",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/rlanka0702/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my repos",
    href: "https://github.com/LankaRohith?tab=repositories",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="contact-content">
            <span className="text-primary-400 font-medium text-sm tracking-wider uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm currently open for new opportunities in Webflow development and 
              frontend engineering. Whether you're looking for a developer to join your 
              team or collaborate on a project, I'd love to hear from you.
            </p>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactLinks.map((link, index) => link.href ? (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    <link.icon className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-sm text-white font-medium group-hover:text-primary-400 transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="ml-auto text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    size={16}
                  />
                </a>
              ) : (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-xl glass"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <link.icon className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-sm text-white font-medium">
                      {link.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="contact-content flex flex-col justify-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-600/20 to-primary-800/20 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to elevate your web presence?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With expertise in Webflow, React, and modern frontend technologies, 
                I can help bring your designs to life with clean, performant code and 
                engaging animations.
              </p>
              <a
                href="mailto:rlanka0702@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-all hover:scale-105"
              >
                <Send size={18} />
                Send me a message
              </a>
            </div>

            {/* Availability Badge */}
            <div className="mt-8 flex items-center gap-3 p-4 rounded-xl glass">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div>
                <p className="text-white font-medium">Available for new opportunities</p>
                <p className="text-sm text-gray-400">Open to Relocate / Onsite / Remote / Hybrid</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Rohith Lanka. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/rlanka0702/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/LankaRohith?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
