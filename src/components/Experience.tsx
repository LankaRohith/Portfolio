"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Centene Corporation",
    role: "Software Engineer (AI)",
    period: "Jan 2025 - Present",
    location: "Remote",
    description: "Delivered responsive internal web applications using Next.js/React, translating Figma designs into production-ready interfaces. Engineered BigQuery-driven analytics dashboards with automated data refresh and React Chart.js visualizations, implementing GSAP animations to enhance user engagement while collaborating with design teams using Adobe Creative Suite.",
    highlights: [
      "Figma to React/Next.js translation",
      "GSAP animations & interactive dashboards",
      "Adobe Creative Suite collaboration",
      "30% page load performance improvement",
      "Responsive design & accessibility",
      "BigQuery data visualization",
    ],
  },
  {
    company: "Capital One",
    role: "Software Engineer",
    period: "Aug 2020 - Jul 2023",
    location: "Hybrid",
    description: "Built Webflow Interactions prototypes to validate design concepts and ensure web design fundamentals were adhered to in API-driven interfaces. Collaborated with designers and strategists to maintain and update WordPress sites, overseeing theme customizations and plugin integrations for seamless user experience.",
    highlights: [
      "Webflow Interactions prototypes",
      "WordPress maintenance & updates",
      "Designer collaboration on interfaces",
      "Web design fundamentals",
      "Theme customizations & plugin management",
      "25% reduction in production defects",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-card",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
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
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-400 font-medium text-sm tracking-wider uppercase">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            4+ years of experience building scalable web applications and collaborating 
            with cross-functional teams in enterprise environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-transparent hidden sm:block" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card relative mb-12 sm:mb-16 ${
                index % 2 === 0 ? "sm:pr-12 md:pr-0" : "sm:pl-12 md:pl-0"
              }`}
            >
              <div
                className={`relative sm:w-1/2 ${
                  index % 2 === 0
                    ? "sm:ml-auto sm:pl-12 md:pl-16"
                    : "sm:mr-auto sm:pr-12 md:pr-16"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-auto sm:right-auto top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-800 hidden sm:block"
                  style={{
                    [index % 2 === 0 ? "left" : "right"]: index % 2 === 0 ? "-8px" : "-8px",
                  }}
                />

                {/* Card */}
                <div className="p-6 md:p-8 rounded-2xl glass card-hover">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                      <Briefcase className="text-primary-400" size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Company & Role */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-primary-400 font-medium mb-3">{exp.role}</p>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-3 py-1 text-xs text-gray-300 bg-white/5 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
