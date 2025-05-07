'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {

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

    // Certifications Data
    const certifications = [
        {
            id: 1,
            label: 'IT Specialist - HTML5 Application Development',
            date: 'May 20, 2024',
            icon: '/certification_icons/HTML5.png',
        },
        {
            id: 2,
            label: 'PCEP - Certified Entry-Level Python Programmer',
            date: 'April 10, 2025',
            icon: '/certification_icons/pcep.png',
        },
        {
            id: 3,
            label: 'IT Specialist - JavaScript',
            date: 'May 7, 2025',
            icon: '/certification_icons/js.png',
        }
    ];

    // Job Data
    const jobData = [
        {
            type: "Education",
            title: "Highschool",
            company: "Freeman Academy",
            time: "2021 - 2025",
            details: [
                "Completed 28 Credits",
                "4.0 GPA",
                "Team Captain - Soccer",
                "Perfect Attendance",
            ],
            icon: "📚",
            iconBg: "bg-green-600",
        },
        {
            type: "Education",
            title: "Technical Institute",
            company: "West-MEC",
            time: "2023 - 2025",
            details: [
                "Website Coding and Development",
                "A+ Student",
                "HTML, CSS, Python, JavaScript, MongoDB, Node.js, React, Tailwind, Next.js, Typescript, EJS "
            ],
            icon: "💻",
            iconBg: "bg-blue-500",
        },
        {
            type: "Job Experience",
            title: "General Manager",
            company: "Subway",
            time: "2022 - 2025",
            details: [
                "Managed store operations and resolved issues",
                "Created schedules, tracked inventory, and handled ordering and vendor coordination",
                "Oversaw hiring and training",
                "Supervised team productivity"
            ],
            icon: "🥪",
            iconBg: "bg-yellow-400",
        },
        {
            type: "Job Experience",
            title: "Business Owner",
            company: "Self Employed",
            time: "2025 - Present",
            details: [
                "Developing Websites for other companies",
                "Co-running social media account for Sun Cyclery",
                "Fixed and sold bikes as bike mechanic",
                "Managing the online marketing of bike products",
            ],
            icon: "🚴‍♂️",
            iconBg: "bg-blue-400",
        },
    ];

    // ExperienceCard Component
    const ExperienceCard = ({ job, index }) => (
        <motion.div
            key={index}
            className="w-[290px] h-[435px] bg-soft border-2 border-color-textMuted rounded-lg p-2 shadow-lg cursor-pointer group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.5 }}
            viewport={{ once: true }}
        >
        {/* Folder Tab */}
        <div className="absolute left-0 top-0 w-12 h-full bg-soft rounded-l-lg z-10" style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-center">
                <span className="font-bold w-full text-nowrap text-xl">{job.type}</span>
            </div>
        </div>


        {/* Card Information */}
        <div className="relative left-2 bg-textPrimary h-[410px] max-w-[260px] rounded-lg p-2 shadow-md transition-all duration-500 group-hover:translate-x-12 space-y-2">
            <h4 className="text-xl font-bold text-center text-primary my-6">{job.title}</h4>
            <h3 className="text-lg font-semibold text-center text-gray-700">
                {job.company} / {job.time}
            </h3>
            <p className="text-gray-700 font-bold mt-4">
                {job.details.map((line, idx) => (
                    <span key={idx}>
                    - {line}
                    <br /><br />
                    </span>
                ))}
            </p>

            {/* Icon on bottom right */}
            <span className={`absolute bottom-2 right-2 w-10 h-10 ${job.iconBg} text-white rounded-full flex items-center justify-center shadow-md`}>
                {job.icon}
            </span>
        </div>
        </motion.div>
    );

    return (
        <div className="mx-auto">
            <div className="flex flex-wrap gap-12 justify-center">
                {jobData.map((job, index) => (
                <ExperienceCard key={index} job={job} index={index} />
                ))}
            </div>
            
            <div data-aos='fade-up'>
                <motion.a
                    href='/Daniel Freeman Resume.pdf'
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-block bg-accentDark text-white px-6 py-2 rounded-full border-2 border-textMute text-sm sm:text-base mt-24 mb-10"
                >
                    View Full Resume
                </motion.a>
            </div>

            {/* certifications */}
            <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-10">Certifications</h3>
                <div className="flex flex-wrap gap-6 justify-center">
                {certifications.map(cert => (
                    <div data-aos="fade-up" key={cert.id} className="max-w-[300px]  bg-soft bg-opacity-80 rounded-xl p-8 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md flex flex-col items-center">
                        <Image src={cert.icon} alt={cert.label} width={75} height={75} className="rounded-full mb-4" />
                        <span className="text-lg font-semibold text-center">{cert.label}</span>
                        <span>{cert.date}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
