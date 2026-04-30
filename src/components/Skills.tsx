"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Figma, 
  Palette, 
  Code2, 
  Layers, 
  Workflow, 
  Monitor,
  Smartphone,
  Zap,
  Globe,
  Award
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Design & Prototyping",
    icon: Figma,
    skills: [
      "Figma",
      "Adobe Creative Suite",
      "Design Systems",
      "Prototyping",
      "UI/UX Design",
      "Wireframing",
    ],
  },
  {
    title: "Webflow Development",
    icon: Workflow,
    skills: [
      "Webflow Interactions",
      "Client-First Methodology",
      "CMS Collections",
      "Responsive Design",
      "Animations",
      "E-commerce",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "JavaScript (ES6+)",
    ],
  },
  {
    title: "Animations & Effects",
    icon: Zap,
    skills: [
      "GSAP",
      "CSS Animations",
      "Webflow Interactions",
      "Scroll-triggered Effects",
      "Micro-interactions",
      "Page Transitions",
    ],
  },
  {
    title: "CMS & Backend",
    icon: Layers,
    skills: [
      "WordPress",
      "Spring Boot",
      "Python (Django/Flask)",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "AWS/GCP",
    ],
  },
  {
    title: "Responsive & Performance",
    icon: Monitor,
    skills: [
      "Mobile-First Design",
      "Cross-browser Testing",
      "Performance Optimization",
      "SEO Best Practices",
      "Accessibility (WCAG)",
      "Core Web Vitals",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-category",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-400 font-medium text-sm tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, and modern web technologies 
            aligned with industry best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category p-6 rounded-2xl glass card-hover group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <category.icon className="text-primary-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AWS Certification */}
        <div className="mt-12 mb-8 text-center">
          <a 
            href="https://www.credly.com/users/rohithlanka/badges#credly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl glass hover:bg-white/10 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
              <Award className="text-yellow-400" size={20} />
            </div>
            <div className="text-left">
              <p className="text-white font-medium group-hover:text-yellow-400 transition-colors">AWS Solutions Architect</p>
              <p className="text-sm text-gray-400">View Certificate on Credly →</p>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <Globe className="text-green-400" size={24} />
            </div>
            <h4 className="text-white font-semibold mb-2">Remote Ready</h4>
            <p className="text-gray-400 text-sm">Experienced in distributed teams and async collaboration</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <Smartphone className="text-blue-400" size={24} />
            </div>
            <h4 className="text-white font-semibold mb-2">Mobile-First</h4>
            <p className="text-gray-400 text-sm">Responsive designs that work beautifully on all devices</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <Palette className="text-purple-400" size={24} />
            </div>
            <h4 className="text-white font-semibold mb-2">Design-Focused</h4>
            <p className="text-gray-400 text-sm">Strong eye for typography, spacing, and visual hierarchy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
