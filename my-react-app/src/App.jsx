import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  const skills = [
    "JavaScript / TypeScript",
    "Angular / Vue / React",
    "Node.js / Express",
    "MongoDB / Firebase",
    "HTML / CSS / Tailwind",
    "Git / Jenkins / DevOps"
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-gray-800 p-6 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="mb-12">
        <motion.h1
          className="text-4xl font-bold text-blue-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Nisha Yadav
        </motion.h1>
        <motion.p
          className="mt-2 text-lg text-gray-600"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Full Stack Developer | JavaScript | Angular | React | Node.js
        </motion.p>
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#" className="text-gray-700 hover:text-black"><FaGithub size={22} /></a>
          <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedin size={22} /></a>
        </motion.div>
      </header>

      <motion.section
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Projects</h2>
        <div className="space-y-4">
          <motion.div
            className="bg-white shadow rounded p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="font-semibold text-xl">Inventory Dashboard (MERN Stack)</h3>
            <p className="text-sm mt-1">React + MongoDB + JWT Auth | Full CRUD | Role-based access | Tailwind UI</p>
            <a href="#" className="text-blue-500 text-sm mt-1 inline-block">View on GitHub</a>
          </motion.div>

          <motion.div
            className="bg-white shadow rounded p-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-xl">Portfolio Website (React + Tailwind)</h3>
            <p className="text-sm mt-1">Animated portfolio with Framer Motion showcasing skills, projects, and links.</p>
            <a href="#" className="text-blue-500 text-sm mt-1 inline-block">View on GitHub</a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {skills.map((skill, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={skillVariants}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <a href="#" className="text-blue-600">Download Resume</a>
      </footer>
    </motion.div>
  );
}
