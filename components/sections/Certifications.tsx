"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import certificationsData from "@/data/certifications.json";

/**
 * Certifications Section Component
 * Displays professional certifications in a grid layout
 * Features card animations and verification links
 */

export default function Certifications() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" ref={ref} className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FiAward size={24} />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {cert.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {cert.issuer}
              </p>

              {/* Credential ID */}
              <div className="mb-4 p-3 rounded-lg bg-gray-100 dark:bg-dark-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Credential ID
                </p>
                <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                  {cert.credentialId}
                </p>
              </div>

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verify Button */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors group/link"
              >
                <FiCheckCircle size={16} />
                <span>Verify Certificate</span>
                <FiExternalLink
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
