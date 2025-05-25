'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { FaEnvelope, FaCode, FaLightbulb, FaBook } from 'react-icons/fa';
import { FaBrain, FaBolt, FaSearch, FaBookOpen } from 'react-icons/fa';
import { events } from './data/events';
import { BiSolidServer } from 'react-icons/bi';
import { AiOutlineCode } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import profileImage from '../public/profile.jpg';
import Image from 'next/image';
import { profiles } from './data/coding';

import { FaGraduationCap } from 'react-icons/fa';


import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import Link from 'next/link';



export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_1n7qiig',
        'template_yxy8aqz',
        e.target,
        'NNoqXH3HiEjuzvTP5'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#dbeafe] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] text-black dark:text-white transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <header className="p-6 flex justify-between items-center sticky top-0 bg-white dark:bg-[#0f0c29] z-50 shadow">
        <h1 className="text-3xl font-bold text-purple-600">Datta</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-purple-500 dark:hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-500 dark:hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-500 dark:hover:text-purple-400">Projects</a>
          <a href="#skills" className="hover:text-purple-500 dark:hover:text-purple-400">Skills</a>
          <a href="#contact" className="hover:text-purple-500 dark:hover:text-purple-400">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-3 py-1 border border-purple-400 rounded-md hover:bg-purple-200 dark:hover:bg-purple-800">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
      id="home"
      className="min-h-screen px-6 py-24 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col lg:flex-row items-center justify-between"
    >
      {/* Left Side: Headings */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          Crafting <span className="text-purple-400"> Smart</span>
          <br />
          <span className="text-purple-400">& Impactful</span> Digital Experiences
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          I’m passionate about developing digital experiences that are efficient,
          intuitive, and purposeful. Let’s craft something impactful together.
        </p>
        <div className="mt-8 text-2xl text-purple-300 font-semibold">
          <Typewriter
            words={[
              'Web Developer',
              'Frontend Enthusiast',
              'Problem Solver',
              'Tech Explorer'
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>

      {/* Right Side: Profile Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    whileHover={{ rotate: [0, 1.5, -1.5, 0], boxShadow: '0 0 20px 4px rgba(168, 85, 247, 0.6)' }}
    className="rounded-xl border-4 border-purple-500 overflow-hidden shadow-xl"
  >
    <Image
      src={profileImage}
      alt="Profile Picture"
      className="w-[300px] h-[300px] object-cover"
      priority
    />
  </motion.div>
</div>
    </section>

      {/* About section placeholder */}

      <section id="about" className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-400">About Me</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE - MY JOURNEY */}
        <motion.div
          className="bg-[#141022] border border-purple-500 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
        >
          <div className="flex items-center mb-4 text-purple-300 text-xl font-semibold">
            <FaBookOpen className="mr-3 text-2xl animate-pulse" />
            My Journey
          </div>
          <p className="text-gray-300 leading-relaxed">
            I’m <span className="text-purple-400 font-semibold">Penumudi Datta Jagan Mohan</span>, a developer who loves to tinker, build, and learn. My interest in technology began with customizing basic HTML pages and has since grown into a commitment to continuous improvement.
          </p>
          <p className="mt-4 text-gray-400">
            I focus on full-stack development and enjoy building clean, interactive UI components. I also love reading tech blogs, experimenting with side projects, and supporting others in their learning journey.
          </p>
        </motion.div>

        {/* RIGHT SIDE - TRAITS */}
        <div className="grid grid-cols-1 gap-4">
          {[{
            icon: <FaCode className="mr-2 animate-bounce" />, title: 'Clean Coder', description: 'I write code that is simple, readable, and maintainable.', delay: 0.2
          }, {
            icon: <FaBrain className="mr-2 animate-spin-slow" />, title: 'Problem Solver', description: 'I enjoy finding efficient solutions to technical challenges.', delay: 0.4
          }, {
            icon: <FaBolt className="mr-2 animate-wiggle" />, title: 'Fast Learner', description: 'I adapt quickly to new technologies and frameworks.', delay: 0.6
          }, {
            icon: <FaSearch className="mr-2 animate-pulse" />, title: 'Self-Guided Explorer', description: 'I explore and experiment independently to deepen my understanding.', delay: 0.8
          }].map(({ icon, title, description, delay }, idx) => (
            <motion.div
              key={idx}
              className="bg-[#141022] border border-purple-500 p-4 rounded-md shadow-md hover:shadow-purple-500/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
              whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center text-purple-400 font-semibold mb-2">
                {icon} {title}
              </div>
              <p className="text-gray-300 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    
      {/* Education Section */}
      <section id="education" className="px-6 py-20 bg-gradient-to-br from-[#1b1b2f] to-[#302b63] text-center">
  {/* Heading with Graduation Cap */}
  <h3 className="text-4xl font-extrabold text-purple-400 mb-10 drop-shadow-lg flex justify-center items-center gap-3">
    <FaGraduationCap className="text-purple-400 text-3xl animate-bounce-slow" />
    Education
  </h3>

  {/* Glowing Box */}
  <motion.div
    className="max-w-4xl mx-auto p-8 rounded-xl border border-purple-500 shadow-xl bg-[#141414] hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.6)] transition-all duration-500"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h4 className="text-xl font-semibold text-purple-400 mb-1">
      B.Tech in Information Technology
    </h4>
    <p className="text-md text-gray-300">Institute of Aeronautical Engineering, Hyderabad</p>
    <p className="text-sm text-gray-400 mb-4">2022 – 2026</p>
    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Currently pursuing a B.Tech in Information Technology at the Institute of Aeronautical Engineering, Hyderabad. Exploring the world of technology through hands-on learning, innovative projects, and a deep dive into the latest advancements in the field.
    </p>
  </motion.div>
</section>




      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-gradient-to-b from-[#1c1c2b] to-[#121212] text-white text-center">
  <h3 className="text-4xl font-bold mb-12">Projects</h3>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        title: 'Harmonizing Emotions & Climate',
        image: '/harmonize.jpg',
        stack: ['Python', 'TensorFlow', 'OpenCV'],
        desc: 'Detects mood and recommends Spotify playlists based on weather and emotion.',
        repo: 'https://github.com/Dattajagan/Harmonizing-Emotions-and-Climate-using-Music-Personalization',
        live: '#'
      },
      {
        title: 'TODO',
        image: '/todo.jpg',
        stack: ['Java', 'SQL', 'HTML', 'CSS'],
        desc: 'A lightweight to-do manager using Java and SQL backend.',
        repo: 'https://github.com/Dattajagan/java-todo-app',
        live: '#'
      },
      {
        title: 'Auto WhatsApp Messenger',
        image: 'whatsapp.jpg',
        stack: ['Python', 'PyWhatKit', 'Tkinter'],
        desc: 'GUI app to schedule bulk WhatsApp messages using CSV.',
        repo: 'https://github.com/Dattajagan/Auto-WhatsApp-Messager',
        live: '#'
      },

      {
        title: 'Chat With PDF',
        image: 'chatpdf.jpg',
        stack: ['Python', 'PyMuPDF', 'Ollama', 'LLaMA'],
        desc: 'GUI app to schedule bulk WhatsApp messages using CSV.',
        repo: 'https://github.com/Dattajagan/Chat-With-PDF',
        live: '#'
      }

    ].map((proj, i) => (
      <div key={i} className="bg-[#1e1e2f] rounded-xl shadow-xl overflow-hidden hover:shadow-purple-500/40 transition-shadow">
        <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {proj.stack.map((tech, idx) => (
              <span key={idx} className="text-sm bg-purple-600/30 text-purple-300 px-2 py-1 rounded-md">{tech}</span>
            ))}
          </div>
          <p className="text-gray-400 mb-4">{proj.desc}</p>
          <div className="flex space-x-4 text-sm">
            
            <a href={proj.repo} target="_blank" className="text-purple-400 hover:underline">View Project</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Skills Section */}
<section id="skills" className="px-6 py-16 bg-[#121212] text-center">
        <h3 className="text-3xl font-bold mb-12 text-white">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Languages */}
          
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1e1e2e] p-6 rounded-lg shadow-md border border-purple-500 text-left">
            <div className="flex items-center gap-3 mb-3">
              <AiOutlineCode className="text-3xl text-yellow-400" />
              <h4 className="text-xl font-semibold text-white">Languages</h4>
            </div>
            <p className="text-gray-300">Java, Python,C, HTML, CSS, JavaScript</p>
          </motion.div>

          {/* Databases */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1e1e2e] p-6 rounded-lg shadow-md border border-purple-500 text-left">
            <div className="flex items-center gap-3 mb-3">
              <BiSolidServer className="text-3xl text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Databases</h4>
            </div>
            <p className="text-gray-300">MySQL, MongoDB</p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-[#0b0a1f] text-white">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Events & Experiences</h2>

  <div className="relative border-l-4 border-purple-500 pl-8 ml-4">
    {events.map((event, idx) => (
      <motion.div
        key={idx}
        className="mb-10 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: idx * 0.2 }}
      >
        {/* Blinking Violet Dot */}
        <span className="absolute -left-[1.15rem] top-1.5 w-4 h-4 bg-purple-500 rounded-full animate-ping shadow-lg" />
        <span className="absolute -left-[1.15rem] top-1.5 w-4 h-4 bg-purple-500 rounded-full z-10" />

        <h3 className="text-lg font-semibold text-white">{event.title}</h3>
        <p className="text-sm text-purple-400 mt-1">{event.date}</p>
        <p className="text-sm text-gray-300 mt-1">{event.description}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Stats Section */}
      <section id="stats" className="px-6 py-16 bg-[#f8fafc] dark:bg-[#121212] text-center">
        <h3 className="text-3xl font-bold mb-12">GitHub Stats</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={`https://github-readme-stats.vercel.app/api?username=Dattajagan&show_icons=true&theme=radical`}
            alt="GitHub Stats"
            className="rounded-xl"
          />
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={`https://github-readme-streak-stats.herokuapp.com?user=Dattajagan&theme=radical`}
            alt="GitHub Streak"
            className="rounded-xl"
          />
        </div>
      </section>
      {/* CODING PROFILES */}
      <section id="coding" className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-gradient-to-r from-[#14001f] to-[#1e0054] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400 drop-shadow-lg animate-pulse">Coding Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {profiles.map((profile, i) => (
          <motion.a
            key={i}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#0d031a] border border-purple-500 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-purple-700 transition duration-300 ease-in-out overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="animate-bounce mb-3">{profile.icon}</div>
            <h3 className="text-lg font-semibold text-purple-300 mb-1">{profile.title}</h3>
            <p className="text-sm text-gray-300">{profile.description}</p>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-sm"></div>
          </motion.a>
        ))}
      </div>
    </section>
      

      {/* Contact Section */}
    <motion.div
      id="contact"
      className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Let's Create Something Amazing
      </motion.h2>
      <motion.p
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Reach out for collaboration, freelance projects, or just to connect! I love meaningful conversations and exciting opportunities.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Card */}

        <motion.div
          className="rounded-xl border border-purple-600 p-6 shadow-xl hover:shadow-purple-500/40 transition-shadow duration-500 bg-[#1b1b2f]"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-4">
            I’m always open to discussing new projects, tech ideas, or growth opportunities. Let’s innovate and make something great together!
          </p>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-3 text-purple-400" />
            <a href="mailto:dattajaganpenumudi@gmail.com" className="text-purple-400 hover:underline">
              dattajaganpenumudi@gmail.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Dattajagan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-purple-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/penumudi-datta-jagan-mohan-199b7b256"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-purple-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          className="rounded-xl border border-purple-600 p-6 shadow-xl hover:shadow-pink-500/40 transition-shadow duration-500 bg-[#1b1b2f]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-md flex justify-center items-center gap-2 transition-all"
          >
            Send Message <FaPaperPlane />
          </button>
        </motion.form>
      </div>
      </motion.div>

      <footer className="py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Penumudi Datta Jagan Mohan. All rights reserved.
      </footer>
    </motion.div>
    
  );
}
