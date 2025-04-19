import Navigation from "@/app/components/Navigation";
import SkillCards from "@/app/components/SkillCards"
import Image from 'next/image';

export default function Home() {

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
    shortLink: 'myGithub/DanielFreeman',
    link: 'https://github.com/DanielFreeman068',
  },
  {
    id: 2,
    label: 'LinkedIn',
    shortLink: 'myLinkedIn/DanielFreeman',
    link: 'https://www.linkedin.com/in/daniel-freeman-438602351/',
  },
  {
    id: 3,
    label: 'Credly',
    shortLink: 'certifications/DanielFreeman',
    link: 'https://www.credly.com/users/daniel-freeman.83f3b17b/edit',
  },
  {
    id: 4,
    label: 'Email',
    shortLink: 'danielfree756@gmail.com',
    link: 'danielfree756@gmail.com',
  },
]

const jobData = [
  {
    title: "General Manager",
    company: "Subway",
    time: "December 2021 - Present",
    details: [
      "Overlooking store productions and managing employees",
      "Ensures the store's functionality through scheduling, communications, weekly inventories, and delivery orders"
    ],
    icon: "🥪",
    iconBg: "bg-yellow-400",
  },
  {
    title: "Sandwich Artist",
    company: "Subway",
    time: "July 2021 - December 2021",
    details: [
      "Made sandwiches for customers",
      "In charge of preparing food daily",
      "Kept up with general cleanliness throughout the restaurant"
    ],
    icon: "🥪",
    iconBg: "bg-yellow-400",
  },
  {
    title: "Internship",
    company: "WBLA",
    time: "January 2024 - February 2024",
    details: [
      "Online Internship with scheduled meetings and a professional mentor",
      "Designed a website using HTML, CSS, and JavaScript"
    ],
    icon: "💻",
    iconBg: "bg-blue-500",
  }
];


  return (
    <main className="min-h-screen text-textPrimary">
      <Navigation />
      
      {/* Content with padding to account for fixed nav */}
      <div className="pt-32 px-2">
        {/* About Section */}
        <section id="about" className="min-h-screen px-8 py-16 flex flex-col text-center max-w-[1000px] mx-auto">
          <h2 className="mb-16 text-3xl w-fit mx-auto font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 hover:after:w-0">
            About Me
          </h2>

          <div className="flex gap-16 flex-col lg:flex-row">

            {/* about me info */}
            <div data-aos="fade-right" className="flex flex-col space-y-8  bg-soft bg-opacity-80 rounded-xl p-8 lg:p-16 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
              
              {/* profile picture and name */}
              <div className="flex gap-6 items-center mx-auto">
                <Image src='/profile.jpg' alt="Profile Picture"  width={75} height={75} className="rounded-full" />
                <h1 className="text-xl md:text-3xl font-medium">Daniel Freeman</h1>
              </div>

              {/* description */}
              <p className="text-md md:text-xl mx-auto max-w-[500px]">I'm a full stack web developer with a focus on building responsive, user-friendly applications. I work with JavaScript, Python, HTML, and CSS, and I'm experienced in frameworks like React.js, Next.js, and Tailwind CSS. On the backend, I use MongoDB and have a solid understanding of database management. I'm always exploring new technologies and love bringing ideas to life through code.</p>

              {/* languages */}
              <div className="w-full max-w-md mx-auto p-4">
                <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">Language Proficiency</h2>
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
                      <div className="bg-accent h-3 rounded-full" style={{ width: `${language.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* contact me and skill cards */}
            <div className="flex flex-col gap-16">

              {/* contact me container */}
              <div data-aos="fade-down" className="flex flex-col space-y-4 bg-soft bg-opacity-80 rounded-xl p-4 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
                <h1 className="text-2xl font-semibold">Contact Me!</h1>
                <div className="flex flex-col gap-3 p-4 mx-auto">
                  {contacts.map(({ id, label, shortLink, link }) => (
                    <div key={id} className="flex items-center gap-2">
                      <span className="font-medium text-md">{label}</span>
                      <span>|</span>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-links hover:underline break-all text-sm lg:text-xs">{shortLink}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* skills and tools card */}
              <SkillCards />
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-8 py-16 flex flex-col text-center mx-auto">
          <h2 className="mb-16 text-3xl w-fit mx-auto font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 hover:after:w-0">
            Experience
          </h2>

          {/* experience card wrapper */}
          <div className="relative z-0 flex flex-col items-center mt-20">
            <div className="flex flex-wrap justify-center gap-16 mx-8 relative z-0">

              {/* experience cards */}
              {jobData.map((job, index) => (
                <div key={index} className="w-[290px] h-[435px] bg-soft border-2 border-color-textMuted rounded-lg p-2 shadow-lg cursor-pointer group relative">
                  {/* Folder Tab */}
                  <div className="absolute left-0 top-0 w-12 h-full bg-soft rounded-l-lg z-10" style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }}></div>

                  {/* card information */}
                  <div className="relative left-2 bg-textPrimary h-[410px] max-w-[260px] rounded-lg p-2 shadow-md transition-all duration-500 group-hover:translate-x-12 space-y-2">
                    <h4 className="text-xl font-bold text-center text-primary my-8">{job.title}</h4>
                    <h3 className="text-lg font-semibold text-center text-gray-700">{job.company} / {job.time}</h3>
                    <p className="text-gray-700 font-bold mt-4">
                      {job.details.map((line, idx) => (
                        <span key={idx}>
                          - {line}
                          <br /><br />
                        </span>
                      ))}
                    </p>

                    {/* icon on bottom right */}
                    <span className={`absolute bottom-2 right-2 w-10 h-10 ${job.iconBg} text-white rounded-full flex items-center justify-center shadow-md`}>
                      {job.icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
        
        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-8 py-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
        </section>
      </div>
    </main>
  );
}
