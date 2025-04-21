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
]

const contacts = [
  {
    id: 1,
    label: 'Github',
    icon: '/social_icons/github.png',
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
      
      <div className="pt-32 px-2">
        {/* About Section */}
        <section id="about" className="min-h-screen px-8 py-14 flex flex-col text-center max-w-[1400px] mx-auto">
          <h2 className="mb-[50px] text-3xl w-fit mx-auto font-bold relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 hover:after:w-0">
            About Me
          </h2>

          <div className="flex flex-col xl:flex-row gap-10 mx-auto">
            <div className="flex gap-10 flex-col lg:flex-row mx-auto">

              {/* about me info */}
              <div data-aos="fade-right" className="flex flex-col space-y-8  bg-soft bg-opacity-80 rounded-xl p-8 lg:p-16 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
                
                {/* name */}
                  <h1 className="text-xl md:text-3xl font-medium">Daniel Freeman</h1>

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

              {/* profile picture and skill cards */}
              <div className="flex flex-col gap-10">

                {/* profile picture */}
                <div data-aos="fade-down" className="rounded-xl border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md bg-[url('/profile_two.jpg')] bg-cover bg-no-repeat bg-center h-[200px]">
                </div>

                {/* skills and tools card */}
                <SkillCards />
              </div>
            </div>

              {/* contact form and links */}
              <div className="flex flex-col lg:flex-row xl:flex-col gap-16">

                {/* contact me container and form */}
                <div data-aos="fade-left" className="flex flex-col space-y-4 bg-soft bg-opacity-80 rounded-xl p-4 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
                  <h1 className="text-2xl font-semibold">Contact Me!</h1>

                  {/* contact form */}
                  <div className="flex flex-col space-y-4 p-4">
                    <div className="flex gap-4 mx-auto items-center">
                      <Image src="/social_icons/mail.png" alt="Email" width={50} height={50} />
                      <div className="flex flex-col gap-2 text-left">
                        <h1 className="text-xl">Email: </h1>
                        <h1 className="text-lg text-links">danielfree756@gmail.com</h1>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto w-full">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="border p-2 rounded"
                      />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="border p-2 rounded min-h-[100px]"
                      />
                      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                        Send Message
                      </button>
                      <p className="text-sm text-gray-600">{status}</p>
                    </form>
                  </div>

                  {/* icon links */}
                  <div className="flex flex-row gap-4 p-4 mx-auto">
                    {contacts.map(({ id, label, icon, link }) => (
                      <div key={id} className="flex flex-col items-center gap-2">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-links hover:underline break-all text-sm lg:text-xs"><Image src={icon} alt={label} width={45} height={45} /></a>
                        <h1>{label}</h1>
                      </div>
                    ))}
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
