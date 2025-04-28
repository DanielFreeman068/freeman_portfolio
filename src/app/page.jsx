'use client'
import { useState, useEffect } from 'react';
import Navigation from "@/app/components/Navigation";
import SkillCards from "@/app/components/SkillCards";
import Form from '@/app/components/Form';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

    // Intersection Observer to detect when the container is visible on screen
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 1,
        }
      );
  
      const element = document.getElementById("social-links");
      if (element) observer.observe(element);
  
      return () => {
        if (element) observer.unobserve(element);
      };
    }, []);
  

const languages = [
  {
    id: 1,
    label: 'English',
    percentage: 100,
    icon: '/flags/us.png',
  },
  {
    id: 2,
    label: 'Spanish',
    percentage: 65,
    icon: '/flags/spain.png',
  },
]

const contacts = [
  {
    id: 1,
    label: 'Github',
    icon: '/social_icons/githubBlack.png',
    link: 'https://github.com/DanielFreeman068',
  },
  {
    id: 2,
    label: 'LinkedIn',
    icon: '/social_icons/linkedin.png',
    link: 'https://www.linkedin.com/in/daniel-freeman-438602351/',
  },
  {
    id: 3,
    label: 'Credly',
    icon: '/social_icons/credly.png',
    link: 'https://www.credly.com/users/daniel-freeman.83f3b17b/edit',
  },
]

  return (
    <main className="min-h-screen text-textPrimary">
      <Navigation isModalOpen={isModalOpen} />
      
      <div className="relative pt-32 px-2">
        {/* About Section */}
        <section id="about" className="min-h-screen px-8 py-14 flex flex-col text-center mx-auto">
          <h2 className="mb-[50px] text-3xl w-fit mx-auto font-bold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 hover:after:w-0">
            About Me
          </h2>

          <div className="flex flex-col xl:flex-row gap-10 mx-auto">
            <div className="flex gap-10 flex-col lg:flex-row mx-auto">

              {/* profile picture */}
              <div data-aos="fade-down" className="block lg:hidden rounded-xl border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md bg-[url('/profile_two.jpg')] bg-cover bg-no-repeat bg-center mx-auto w-full h-[350px]"></div>

              {/* about me info */}
              <div data-aos="fade-right" className="flex flex-col space-y-8  bg-soft bg-opacity-80 rounded-xl p-8 lg:p-16 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
                
                {/* name */}
                  <h1 className="text-xl md:text-3xl font-medium">Daniel Freeman</h1>

                {/* description */}
                <p className="text-md md:text-xl mx-auto max-w-[500px]">I'm a full stack web developer with a focus on building responsive, user-friendly applications. I work with JavaScript, Python, HTML, and CSS, and I'm experienced in frameworks like React.js, Next.js, and Tailwind CSS. On the backend, I use MongoDB and have a solid understanding of database management. I'm always exploring new technologies and love bringing ideas to life through code.</p>

                {/* languages */}
                <div className="w-full max-w-md mx-auto p-4">
                  <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">Language Proficiency</h2>
                  <div data-aos="zoom-in" data-aos-delay="500">
                    {languages.map((language) => (
                      <div key={language.id} className="mb-6">
                        <div className="flex items-center gap-3 mb-1">
                          <Image src={language.icon} alt={language.label} width={45} height={45} />
                          <div className="flex justify-between items-center w-full">
                            <span className="font-semibold text-lg">{language.label}</span>
                            <span className="text-md">{language.percentage}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-accentLight rounded-full h-3">
                          <div className="bg-links h-3 rounded-full" style={{ width: `${language.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* profile picture and skill cards */}
              <div className="flex flex-col gap-10">

                {/* profile picture */}
                <div data-aos="fade-down" className="hidden lg:block rounded-xl border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md bg-[url('/profile_two.jpg')] bg-cover bg-no-repeat bg-center mx-auto w-[300px] h-[200px]"></div>

                {/* skills and tools card */}
                <SkillCards />
              </div>
            </div>

              {/* contact form and links */}
              <div className="flex flex-col">

                {/* contact me container and form */}
                <div className="overflow-hidden">
                  <div data-aos="fade-left" className="w-full flex flex-col space-y-6 p-8 bg-soft bg-opacity-80 rounded-xl border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
                    <h1 className="text-2xl mb-4 font-semibold">Contact Me!</h1>

                    {/* contact form */}
                    <div className="flex flex-col space-y-4 w-full">
                      <Form />
                    </div>

                    {/* icon links */}
                    <h1 className="text-xl font-semibold">Social Links</h1>
                    <motion.div
                      id="social-links"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      className="flex flex-row gap-8 p-4 mx-auto"
                    >
                      {contacts.map(({ id, label, icon, link }) => (
                        <motion.div
                          key={id}
                          className="flex flex-col items-center gap-2"
                          variants={itemVariants}
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <Image src={icon} alt={label} width={45} height={45} />
                          </a>
                          <h1>{label}</h1>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
          </div>

        </section>
        
        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-8 py-16 flex flex-col text-center mx-auto">
          <h2 className="mb-16 text-3xl w-fit mx-auto font-bold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 hover:after:w-0">
            Experience
          </h2>

          {/* experience card wrapper */}
          <div className="relative z-0 flex flex-col items-center mt-20">
            <div className="flex flex-wrap justify-center gap-16 mx-8 relative z-0">

              {/* experience cards */}
              <Experience />
            </div>
          </div>

        </section>
        
        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 flex flex-col text-center mx-auto">
          <h2 className="mb-16 text-3xl w-fit mx-auto font-bold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 hover:after:w-0">
            Projects
          </h2>

          {/* experience card wrapper */}
          <div className="relative z-0 flex flex-col items-center mt-20">

            {/* project cards */}
            <Projects setIsModalOpen={setIsModalOpen} />
          </div>

        </section>
      </div>

      {/* footer section */}
      <footer className="bg-footer text-white py-8 px-6 mt-8 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:flex md:justify-center gap-8 md:gap-20 lg:gap-32 xl:gap-48 text-center md:text-left">

                {/* Connect with Me Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-textSecondary">Connect with Me</h3>
                    <div className="flex flex-row mx-auto gap-8 justify-center md:justify-start">
                        {contacts.map(({ id, label, icon, link }) => (
                            <motion.div
                            key={id}
                            className="flex flex-col items-center gap-2 w-fit"
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            >
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Image src={icon} alt={label} width={30} height={30} />
                            </a>
                            <h1 className="text-sm">{label}</h1>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-textSecondary">Legal</h3>
                    <p className="text-white text-sm">
                        © {new Date().getFullYear()} Daniel Freeman. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </main>
  );
}
