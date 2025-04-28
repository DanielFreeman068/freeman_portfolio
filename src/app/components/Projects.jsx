'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = ({ setIsModalOpen }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

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
            desc: 'A full stack pet adoption platform connected to MongoDB. This project uses EJS and NodeJS to allow viewers to search and filter for pets and signed up users to surrender pets for adoption. For admin usage there is functionality to delete and edit pets and people signed up.',
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
            desc: 'A full stack event registration platform connected to MongoDB. This project uses EJS and NodeJS to allow viewers browse and sign up for events. For admin usage there is functionality to delete and edit events as well.',
            image: '/projects/eventRegistrationImage.png',
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
            desc: 'A full-stack web app for Boy Scout Troop 747, built with React, Tailwind, Node.js, and MongoDB, serving as a digital hub with troop info, event calendar, photo gallery, online forms, and an admin dashboard.',
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
            desc: 'A custom API project I coded to form a better understanding in RESTUL API that provides JSON data of 50 musical artists, including instructions on how to retrieve said data.',
            image: '/projects/api.png',
            link: "https://github.com/DanielFreeman068/myAPI.git",
            isLive: false,
            icons: [
                "/icons/ejs.png",
                "/icons/css.png",
                "/icons/node-js.png",
            ]
        },
        {
            id: 5,
            label: 'React Blog Page',
            desc: 'This is a blog that uses React to format and deliver a variety of information on trending news for various topics.',
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
            label: 'Card Game API',
            desc: 'This project uses EJS, CSS and the deckofcardsAPI for users to play games of either Blackjack or War.',
            image: '/projects/blackjackImage.png',
            link: "https://github.com/DanielFreeman068/Cards-API.git",
            isLive: false,
            icons: [
                "/icons/ejs.png",
                "/icons/css.png",
            ]
        },
        {
            id: 7,
            label: 'Quizzy Bee',
            desc: 'Quizzy Bee is a fully responsive quiz app created in React that tests users on the beautiful sport of Soccer.',
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
            id: 8,
            label: 'My Portfolio (This Portfolio)',
            desc: 'A portfolio displaying all of my knowledge learned and project completed from West-MEC, my experience in the work force and education, and an about me section containing a contact form.',
            image: '/projects/freemanPortfolio.png',
            link: "replaceWithLiveLinkLater",
            isLive: true,
            github: "https://github.com/DanielFreeman068/freeman_portfolio.git",
            icons: [
                "/icons/react.png",
                "/icons/tailwind.svg",
            ]
        },
        {
            id: 9,
            label: 'Cash Compass (Financial Tracker)',
            desc: 'Taking 5th Place at FBLA State and qualifying for Nationals, Cash Compass is a financial tracker built for students to input transactions and track their finances through many forms of data charts and budgeting assistance. This project relies on Mongodb and NodeJS for backend with React and Tailwind delivering well formatted and responsively designed data to the user.',
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
            id: 10,
            label: 'Jolt Mobile App',
            desc: 'WRITE DESCRIPTION',
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
            id: 14,
            label: 'Tic Tac Toe',
            desc: 'This game of Tic Tac Toe utilizes HTML5, CSS, and JavaScript to allow for either a 1 or 2 player round.',
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
            id: 15,
            label: 'Card Memory Game',
            desc: 'This card memory game utilizes card flipping features, a timer, and a reset option displaying knowledge in HTML5, CSS and JavaScript.',
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
            id: 16,
            label: 'JQuery Maze Game',
            desc: 'This Minecraft themed maze game offers three difficulty levels of mazes utilizing languages such as HTML5, CSS and JavaScript.',
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
            id: 17,
            label: 'Calculator',
            desc: 'This calculator was one of my first projects as a coder. It utilizes three languages: HTML5, CSS and JavaScript',
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
        setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    };

    const showLess = () => {
        setVisibleCount(6);
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-16 mx-8 relative z-10">
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
