'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiC,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel
} from 'react-icons/si';

import { DiJava } from 'react-icons/di'; // ✅ Java icon from Devicons


const allSkills = {
  All: [
    { name: 'Java', icon: <DiJava className="text-red-500" />, type: 'Languages' },
    { name: 'Python', icon: <SiPython className="text-yellow-300" />, type: 'Languages' },
    { name: 'C', icon: <SiC className="text-blue-300" />, type: 'Languages' },
    { name: 'HTML', icon: <SiHtml5 className="text-orange-500" />, type: 'Frontend' },
    { name: 'CSS', icon: <SiCss3 className="text-blue-500" />, type: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, type: 'Frontend' },
    { name: 'React', icon: <SiReact className="text-cyan-400" />, type: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, type: 'Frontend' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, type: 'Database' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, type: 'Database' },
    
    { name: 'Git', icon: <SiGit className="text-red-500" />, type: 'Tools' },
    { name: 'GitHub', icon: <SiGithub className="text-white" />, type: 'Tools' },
    { name: 'Vercel', icon: <SiVercel className="text-white" />, type: 'Tools' },
  ],
};

const categories = ['All', 'Languages', 'Frontend', 'Database', 'Tools'];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = allSkills.All.filter(
    (skill) => activeCategory === 'All' || skill.type === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-[#050505] text-white relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-4xl font-bold text-center mb-10">Skills</span>
      </h2>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all text-sm sm:text-base font-medium shadow-md hover:scale-105
              ${activeCategory === cat
                ? 'bg-purple-600 text-white'
                : 'bg-[#111] text-purple-300 border-purple-600'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2 p-5 rounded-xl bg-[#121212] border border-purple-500 shadow-md hover:shadow-purple-700"
          >
            <div className="text-4xl animate-pulse">{skill.icon}</div>
            <p className="text-sm text-purple-200 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#6d28d9_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
    </section>
  );
};

export default SkillsSection;
