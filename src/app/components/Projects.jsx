'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            label: 'Pet Adoption Platform',
            desc: 'A full stack pet adoption platform connected to MongoDB. This project uses EJS and NodeJS to allow viewers to search and filter for pets and signed up users to surrender pets for adoption.',
            image: '/projects/PetAdoptionImage.png',
            link: "https://github.com/DanielFreeman068/Pet-Adoption-Platform",
            icons: [
                "/icons/ejs.png",
                "/icons/css.png",
                "/icons/node-js.png",
                "/icons/js.png",
            ]
        },
    ];

    return (
        <div className="mx-auto mt-8 grid grid-cols-1 gap-6">
            {projects.map((project) => (
                <motion.div data-aos="fade-up" key={project.id} className="relative w-[330px] md:w-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg group cursor-pointer" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out backdrop-blur-sm rounded-xl" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <h1 className="text-2xl font-semibold mb-4">{project.label}</h1>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedProject(project)} className="px-6 py-2 bg-accentDark border-2 border-white rounded-full">
                            View Project
                        </motion.button>
                    </div>
                </motion.div>
            ))}

           {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-soft bg-opacity-70 border-2 border-color-textMuted rounded-xl shadow-lg w-full max-w-2xl p-8 relative"
                    >
                        {/* exit button */}
                        <button onClick={() => setSelectedProject(null)} className="absolute top-0 right-2 text-white hover:text-red-500 text-4xl font-bold">×</button>

                        {/* image */}
                        <Image src={selectedProject.image} alt={selectedProject.label} width={600} height={300} className="rounded-lg mb-4 object-cover w-full h-60"/>

                        {/* title and description */}
                        <h2 className="text-2xl font-semibold mb-2 text-center">{selectedProject.label}</h2>
                        <p className="mb-4 text-sm sm:text-base">{selectedProject.desc}</p>

                        {/* languages used */}
                        <div className="flex flex-wrap justify-center gap-4 mb-6">
                            {selectedProject.icons.map((icon, index) => (
                                <Image key={index} src={icon} alt="Tech Icon" width={40} height={40} />
                            ))}
                        </div>

                        {/* view on github button */}
                        <div className="text-center">
                            <motion.a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-accentDark text-white px-6 py-2 rounded-full hover:bg-accentDark/80 transition text-sm sm:text-base"
                            >
                                View on GitHub
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Projects;
