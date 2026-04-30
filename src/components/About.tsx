"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Figma, Code2, Palette, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Figma,
    title: "Design to Code",
    description: "Expert at translating Figma designs into pixel-perfect, responsive websites",
  },
  {
    icon: Code2,
    title: "Clean Development",
    description: "Following Client-First methodology and modern web standards",
  },
  {
    icon: Palette,
    title: "Webflow & Beyond",
    description: "Building with Webflow Interactions, GSAP animations, and React/Next.js",
  },
  {
    icon: Layers,
    title: "Full-Stack Mindset",
    description: "Experience with WordPress, REST APIs, and backend integrations",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".highlight-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-dark-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="about-content">
            <span className="text-primary-400 font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Translating Design Into<br />
              <span className="gradient-text">Digital Experiences</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Full Stack Developer with 4+ years of experience building responsive, 
              high-quality web applications. Proven expertise translating Figma and 
              Adobe Creative Suite designs into polished, production-ready interfaces 
              that are accessible, performant, and optimized across all devices.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Hands-on experience with Webflow Interactions and GSAP animations to 
              create engaging user experiences. Strong foundation in web design fundamentals 
              including typography, layout, spacing, and hierarchy. Successfully maintained 
              and updated WordPress sites with theme customizations and plugin integrations. 
              Collaborative team player who communicates clearly across disciplines and 
              contributes confidently to both development and design decisions.
            </p>

            {/* Location & Status */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-3 h-3 bg-primary-500 rounded-full" />
                <span>Based in Royal Palm Beach, FL</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span>Open to Relocate / Onsite / Remote / Hybrid</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div ref={contentRef} className="flex flex-col items-center justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full opacity-30 blur-xl" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden glass ring-2 ring-white/10">
                <img
                  src="/profile.jpg"
                  alt="Rohith Lanka"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name & Title */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white">Rohith Lanka</h3>
              <p className="text-primary-400 text-sm mt-1">Software Engineer (AI) & Full Stack Developer</p>
            </div>

            {/* Available for Hire Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-300 font-medium">Available for Hire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
