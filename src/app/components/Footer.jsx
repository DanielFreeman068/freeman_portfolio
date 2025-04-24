"use client";
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {

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
        <footer className="bg-footer text-white py-8 px-6 mt-8 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Site Map Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-textSecondary">Site Map</h3>
                    <nav className="flex flex-col space-y-2">
                        <Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Me</Link>
                        <Link href="/projects" className="text-gray-300 hover:text-white transition duration-300">Projects</Link>
                    </nav>
                </div>

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
    );
};

export default Footer;
