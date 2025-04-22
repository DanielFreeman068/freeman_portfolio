import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
    // Project Data
    const projects = [
        {
        id: 1,
        label: 'Pet Adoption Platform',
        desc: 'A full stack pet adoption platform connected to MongoDB. This project uses EJS and NodeJS to allow viewers to search and filter for pets and signed up users to surrender pets for adoption.',
        image: '',
        link: "https://github.com/DanielFreeman068/Pet-Adoption-Platform",
        icons: [
            "/ejs.png",
            "css.png",
            "node-js.png",
            "js.png",
        ]
        },
    ];

    return (
        <div className="mx-auto">
            {/* projects */}
            <div className="mt-8">
                {projects.map((project, id) => (
                    <div key={id} className="rounded-lg bg-soft w-[400px] h-[300px] flex items-center justify-center">
                        <div className="flex flex-col gap-4 text-center">
                            <h1 className='text-2xl'>{project.label}</h1>
                            <button className='text-lg px-8 py-3 bg-accentDark border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md rounded-[40px]'>View Project</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
