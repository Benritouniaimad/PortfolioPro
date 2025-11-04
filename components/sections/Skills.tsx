"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import skillsData from "@/data/skills.json";

/**
 * Skills Section Component
 * Displays skills with animated progress bars and visual indicators
 * Features:
 * - Animated skill bars
 * - Category grouping
 * - Hover effects
 * - Years of experience display
 */

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
    color: string;
    yearsOfExperience: number;
  };
  delay: number;
  inView: boolean;
}

function SkillBar({ skill, delay, inView }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="group"
    >
      {/* Skill Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
            {skill.name}
          </h4>
          <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-dark-800">
            {skill.yearsOfExperience}y
          </span>
        </div>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-gray-200 dark:bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${progress}%` : 0 }}
          transition={{ duration: 1, delay: delay / 1000, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 rounded-full group-hover:shadow-lg transition-shadow"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 shimmer opacity-30" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {skillsData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text inline-block">
                  {category.name}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mt-2" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                6+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {skillsData.categories.reduce(
                  (acc, cat) => acc + cat.skills.length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
