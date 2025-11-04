"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiMapPin, FiCalendar } from "react-icons/fi";
import educationData from "@/data/education.json";

/**
 * Education Section Component
 * Displays educational background in a timeline format
 * Features smooth scroll animations and hover effects
 */

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" ref={ref} className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          {educationData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < educationData.education.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent hidden md:block" />
              )}

              <div className="glass rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <FiAward size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Degree */}
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      {edu.institution}
                    </h4>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>
                          {edu.startDate} - {edu.endDate || "Present"}
                        </span>
                      </div>
                      {edu.gpa && (
                        <div className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                          Achievements:
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-primary-500 mt-1">•</span>
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
