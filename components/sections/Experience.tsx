"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import experienceData from "@/data/experience.json";

/**
 * Experience Section Component
 * Displays work experience in a timeline format
 * Features animated timeline with smooth scroll reveals
 */

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {experienceData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experienceData.experience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent hidden md:block" />
              )}

              <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Status */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <FiBriefcase size={24} />
                    </div>
                    {exp.current && (
                      <div className="mt-3 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-bold text-center">
                        Current
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Position */}
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {exp.position}
                    </h3>

                    {/* Company */}
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      {exp.company}
                    </h4>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>
                          {exp.startDate} - {exp.endDate || "Present"}
                        </span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium">
                        {exp.type}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                          Key Responsibilities:
                        </h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                            >
                              <span className="text-primary-500 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-dark-800 text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                          Achievements:
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                            >
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
