"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiArrowRight, FiGlobe } from "react-icons/fi";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import heroData from "@/data/hero.json";

const Scene3D = dynamic(() => import("../3d/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20" />
  ),
});

const iconMap: Record<string, any> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  email: FiMail,
  globe: FiGlobe,
};

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-dark-950/50 dark:to-dark-950 -z-5" />

      <div className="container-custom relative z-10 py-20">
        <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative group"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white dark:border-dark-900 shadow-2xl bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900">
              <Image
                src={heroData.image}
                alt={heroData.name}
                fill
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-4 top-1/4 glass px-3 py-1.5 rounded-full text-xs font-semibold hidden md:block shadow-lg"
            >
              ✨ Available for internship
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 top-1/3 glass px-3 py-1.5 rounded-full text-xs font-semibold hidden md:block shadow-lg"
            >
              🎓 MIAGE Engineer
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-lg"
          >
            <span className="text-2xl">👋</span>
            <span className="text-sm font-medium">Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600"
          >
            {heroData.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-4xl font-semibold gradient-text"
          >
            {heroData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            {heroData.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-500 max-w-3xl leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-primary group shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/70 transition-all"
            >
              {heroData.cta.primary}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-outline shadow-md hover:shadow-lg transition-all"
            >
              {heroData.cta.secondary}
            </a>
            <a
              href={heroData.resumeUrl}
              download
              className="btn btn-secondary group shadow-md hover:shadow-lg transition-all"
            >
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4 mt-8"
          >
            {heroData.socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all shadow-lg hover:shadow-xl"
                  aria-label={link.platform}
                >
                  {Icon && <Icon size={20} />}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-12 w-full max-w-2xl"
          >
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-md">
              <div className="text-3xl md:text-4xl font-bold gradient-text">7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-md">
              <div className="text-3xl md:text-4xl font-bold gradient-text">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-md">
              <div className="text-3xl md:text-4xl font-bold gradient-text">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Technologies</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
