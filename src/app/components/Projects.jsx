'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = ({ setIsModalOpen }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectsPerRow, setProjectsPerRow] = useState(4);
    const containerRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(projectsPerRow);

    //use effect to check how many projects fit across the current screen size
    useEffect(() => {
        const calculateProjectsPerRow = () => {
            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth - 140;
            const cardWidth = 330 + 64 ;

            const count = Math.floor(containerWidth / cardWidth);
            setProjectsPerRow(count > 0 ? count : 1);
            setVisibleCount(count > 0 ? count * 2 : 1);
        };

        calculateProjectsPerRow();
        window.addEventListener('resize', calculateProjectsPerRow);
        return () => window.removeEventListener('resize', calculateProjectsPerRow);
    }, []);


    //functions for modal use state control
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // use effect to check when modal is open and take away the ability for users to scroll
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProject]);    

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

    const projects = [
        {
            id: 1,
            label: 'Pet Adoption Platform',
            desc: 'A full-stack pet adoption web application using EJS, Node.js, and MongoDB. Users can search and filter for pets, while registered users can surrender pets for adoption. Admin users have access to manage both pet and user listings through features like edit and delete.',
            image: '/projects/petAdoption.png',
            link: "https://pet-adoption-platform-y46p.onrender.com",
            isLive: true,
            github: "https://github.com/DanielFreeman068/Pet-Adoption-Platform.git",
            icons: [
                "/icons/ejs.png",
                "/icons/css.png",
                "/icons/node-js.png",
                "/icons/mongodb.png",
            ]
        },
        {
            id: 2,
            label: 'Event Registration',
            desc: 'A full-stack event registration system built with EJS, Node.js, and MongoDB. Visitors can browse and sign up for events. Admins can create, update, or delete event listings with a user-friendly interface.',
            image: '/projects/eventRegistration.png',
            link: "https://github.com/DanielFreeman068/EJS--Event-Registration.git",
            isLive: false,
            icons: [
                "/icons/ejs.png",
                "/icons/css.png",
                "/icons/node-js.png",
                "/icons/mongodb.png",
            ]
        },
        {
            id: 3,
            label: 'Boy Scout 747',
            desc: 'A troop website for Boy Scout Troop 747 built with React, Tailwind CSS, Node.js, and MongoDB. It includes a photo gallery, event calendar, forms, and a robust admin panel for content and user management.',
            image: '/projects/boyScout.png',
            link: "https://troop747.onrender.com/",
            isLive: true,
            github: "https://github.com/RenLevingar/boy_scout_747.git",
            icons: [
                "/icons/react.png",
                "/icons/tailwind.svg",
                "/icons/node-js.png",
                "/icons/mongodb.png",
            ]
        },
        {
            id: 4,
            label: 'My API',
            desc: 'A custom-built RESTful API project providing JSON data on 50 musical artists. Designed to enhance understanding of backend API development using Node.js and EJS, with clear instructions for accessing data.',
            image: '/projects/api.png',
            link: "https://myapi-8314.onrender.com/api",
            isLive: true,
            github: "https://github.com/DanielFreeman068/myAPI.git",
            icons: [
                "/icons/ejs.png",
                "/icons/css.png",
                "/icons/node-js.png",
            ]
        },
        {
            id: 5,
            label: 'React Blog Page',
            desc: 'A React-based blog platform showcasing articles on trending topics. Demonstrates dynamic rendering of posts, reusable components, and clean user interface design.',
            image: '/projects/blog.png',
            link: "https://github.com/DanielFreeman068/myAPI.git",
            isLive: false,
            icons: [
                "/icons/react.png",
                "/icons/css.png",
            ]
        },
        {
            id: 6,
            label: 'The Saucy Chef',
            desc: 'The Saucy Chef is a full-stack recipe and meal planning app where users can sign up, log in, recover passwords, browse and favorite recipes, create their own, build weekly meal plans, and download shopping lists as Excel files. It includes an admin panel to manage users and recipes. Built with Next.js, Node.js, MongoDB, Tailwind CSS, and ExcelJS.',
            image: '/projects/saucy.png',
            link: "https://saucy-chef.onrender.com/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/saucy_chef.git",
            icons: [
                "/icons/next.png",
                "/icons/tailwind.svg",
                "/icons/node-js.png",
                "/icons/mongodb.png",
                "/icons/js.png",
            ]
        },
        {
            id: 7,
            label: 'Card Game API',
            desc: 'A card game platform using the Deck of Cards API, EJS, and CSS. Features implementations of Blackjack and War, with visually appealing card animations and game mechanics.',
            image: '/projects/blackjackImage.png',
            link: "https://github.com/DanielFreeman068/Cards-API.git",
            isLive: false,
            icons: [
                "/icons/ejs.png",
                "/icons/css.png",
            ]
        },
        {
            id: 8,
            label: 'Quizzy Bee',
            desc: 'A responsive quiz application built in React that tests users on soccer trivia. Includes scoring, navigation between questions, and responsive feedback.',
            image: '/projects/reactQuizImage.png',
            link: "https://quizzy-bee.netlify.app/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/react_quiz_app.git",
            icons: [
                "/icons/react.png",
                "/icons/css.png",
            ]
        },
        {
            id: 9,
            label: 'My Portfolio (This Portfolio)',
            desc: 'A personal portfolio showcasing projects, skills, and background. Built with React and Tailwind CSS, featuring a contact form, project gallery, and detailed work/education history.',
            image: '/projects/freemanPortfolio.png',
            link: "https://freemanportfolio.netlify.app/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/freeman_portfolio.git",
            icons: [
                "/icons/react.png",
                "/icons/tailwind.svg",
            ]
        },
        {
            id: 10,
            label: 'Cash Compass (Financial Tracker)',
            desc: 'An award-winning financial tracking application built with React, Tailwind, Node.js, and MongoDB. Enables students to manage budgets, input transactions, and analyze spending through dynamic charts. Placed 5th at FBLA State and qualified for Nationals.',
            image: '/projects/cashCompass.png',
            link: "https://github.com/DanielFreeman068/fbla_cash_compass.git",
            isLive: false,
            icons: [
                "/icons/react.png",
                "/icons/tailwind.svg",
                "/icons/node-js.png",
                "/icons/mongodb.png",
            ]
        },
        {
            id: 11,
            label: 'Jolt Mobile App',
            desc: 'A gamified learning mobile app developed with Cordova for Android. Uses Node.js and MongoDB for backend with HTML5, CSS, and JavaScript powering the front end and game logic. Earned top 10 placement at FBLA State.',
            image: '/projects/joltMobile.png',
            link: "https://github.com/DanielFreeman068/fbla-mad-cordova-nationals.git",
            isLive: false,
            icons: [
                "/icons/html.png",
                "/icons/css.png",
                "/icons/js.png",
                "/icons/node-js.png",
                "/icons/mongodb.png",
            ]
        },
        {
            id: 12,
            label: 'Transposition Cipher',
            desc: 'A React-based game where users decode transposition ciphers across increasing difficulty levels. Features a user login system and level progression. First full-stack React project demonstrating backend integration with MongoDB.',
            image: '/projects/cipher.png',
            link: "https://react-transposition.onrender.com/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/react_transposition.git",
            icons: [
                "/icons/react.png",
                "/icons/css.png",
                "/icons/node-js.png",
                "/icons/mongodb.png",
            ]
        },
        {
            id: 13,
            label: 'NextJS Portfolio Project',
            desc: 'A modern remake of an earlier HTML/CSS portfolio using Next.js and Tailwind CSS. This project served as practice in learning server-side rendering and file-based routing.',
            image: '/projects/nextPortfolio.png',
            link: "https://dfreem-portfolio.netlify.app/projects",
            isLive: true,
            github: 'https://github.com/DanielFreeman068/next_portfolio.git',
            icons: [
                "/icons/tailwind.svg",
                "/icons/next.png",
            ]
        },
        {
            id: 14,
            label: 'Pokemon Data Fetcher',
            desc: 'A Next.js project for practicing data fetching with both static site generation (SSG) and server-side rendering (SSR). Pulls and displays data from the Pokémon API in a clean, structured layout.',
            image: '/projects/pokemon.png',
            link: "https://github.com/DanielFreeman068/next_data_fetching.git",
            isLive: false,
            icons: [
                "/icons/tailwind.svg",
                "/icons/next.png",
            ]
        },
        {
            id: 15,
            label: 'Tic Tac Toe',
            desc: 'A web-based implementation of the classic Tic Tac Toe game using HTML5, CSS, and JavaScript. Features both one-player and two-player modes with basic win logic and game reset.',
            image: '/projects/ttt.png',
            link: "https://danielfreeman068.github.io/TicTacToe/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/TicTacToe.git",
            icons: [
                "/icons/html.png",
                "/icons/css.png",
                "/icons/js.png",
            ]
        },
        {
            id: 16,
            label: 'Card Memory Game',
            desc: 'A memory card matching game built with HTML5, CSS, and JavaScript. Includes card flip animation, a timer, and a reset feature to test short-term memory and logic.',
            image: '/projects/cardMemory.png',
            link: "https://danielfreeman068.github.io/Card-Memory/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/Card-Memory.git",
            icons: [
                "/icons/html.png",
                "/icons/css.png",
                "/icons/js.png",
            ]
        },
        {
            id: 17,
            label: 'JQuery Maze Game',
            desc: 'A Minecraft-themed maze game using HTML5, CSS, JavaScript, and jQuery. Offers three difficulty levels and visually interactive pathfinding through dynamically styled mazes.',
            image: '/projects/maze.png',
            link: "https://danielfreeman068.github.io/jquery_maze_game/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/jquery_maze_game.git",
            icons: [
                "/icons/html.png",
                "/icons/css.png",
                "/icons/js.png",
            ]
        },
        {
            id: 18,
            label: 'Calculator',
            desc: 'A basic calculator created using HTML5, CSS, and JavaScript. One of the first projects built to understand DOM manipulation and user input processing.',
            image: '/projects/calc.png',
            link: "https://danielfreeman068.github.io/calculator/",
            isLive: true,
            github: "https://github.com/DanielFreeman068/calculator.git",
            icons: [
                "/icons/html.png",
                "/icons/css.png",
                "/icons/js.png",
            ]
        },
    ];    

    const showMore = () => {
        setVisibleCount((prev) => Math.min(prev + (projectsPerRow * 2), projects.length));
    };

    const showLess = () => {
        setVisibleCount(projectsPerRow * 2);
    };

    return (
        <div>
            <div ref={containerRef} className="flex flex-wrap justify-center gap-16 mx-8 relative z-10">
                {projects.slice(0, visibleCount).map((project) => (
                    <motion.div data-aos="fade-up" key={project.id} className="relative w-[330px] md:w-[400px] h-[300px] border-2 border-color-textMuted rounded-xl overflow-hidden shadow-lg group cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }} style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out backdrop-blur-sm rounded-xl" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <h1 className="text-2xl font-semibold mb-4">{project.label}</h1>
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                onClick={() => {setSelectedProject(project), openModal()}}
                                className="px-6 py-2 bg-accentDark border-2 border-white rounded-full">
                                View Project
                            </motion.button>
                        </div>
                    </motion.div>
                ))}

            {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-20 px-4 py-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: .8 }}
                            className="bg-soft bg-opacity-70 border-2 border-color-textMuted rounded-xl shadow-lg w-full max-w-2xl p-8 relative"
                        >
                            {/* exit button */}
                            <button onClick={() => {setSelectedProject(null), closeModal()}} className="absolute top-0 right-2 text-white hover:text-red-500 text-4xl font-bold">×</button>

                            {/* image */}
                            <Image src={selectedProject.image} alt={selectedProject.label} width={600} height={300} className="rounded-lg mb-4 object-cover w-full h-76"/>

                            {/* title and description */}
                            <h2 className="text-2xl font-semibold mb-2 text-center">{selectedProject.label}</h2>
                            <p className="mb-4 text-sm sm:text-base">{selectedProject.desc}</p>

                            {/* languages used */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={selectedProject ? "visible" : "hidden"}
                                className="flex flex-wrap justify-center gap-4 mb-6"
                            >
                                {selectedProject.icons.map((icon, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className='flex items-center'
                                    >
                                        <Image key={index} src={icon} alt="Tech Icon" width={40} height={40} />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* view on github button */}
                            {selectedProject.isLive && (
                                <div className="text-center">
                                    <motion.a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="inline-block text-sm sm:text-base mb-6 text-links"
                                    >
                                        Github Link
                                    </motion.a>
                                </div>
                            )}

                            {/* view on github or live site button */}
                            <div className="text-center">
                                <motion.a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="inline-block bg-accentDark text-white px-6 py-2 rounded-full border-2 border-textMute text-sm sm:text-base"
                                >
                                    {selectedProject.isLive ? 'View Live Site' : 'View on Github'}
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
            {/* View More / Show Less Buttons */}
            <div data-aos='fade-up' className="flex gap-4 mt-20 relative z-0 justify-center">
                {visibleCount < projects.length && (
                    <motion.button
                        onClick={showMore}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="px-6 py-2 bg-accentDark text-white rounded-full border border-white"
                    >
                        View More
                    </motion.button>
                )}
                {visibleCount > 6 && (
                    <motion.button
                        onClick={showLess}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="px-6 py-2 bg-gray-700 text-white rounded-full border border-white"
                    >
                        Show Less
                    </motion.button>
                )}
            </div>
        </div>
    );
};

export default Projects;
