import Navigation from "@/app/components/Navigation";
import SkillCards from "@/app/components/SkillCards"
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen text-textPrimary">
      <Navigation />
      
      {/* Content with padding to account for fixed nav */}
      <div className="pt-32 px-2">
        {/* About Section */}
        <section id="about" className="min-h-screen px-8 py-16 flex flex-col text-center max-w-[1000px] mx-auto">
          <h2 className="mb-24 text-3xl w-fit mx-auto font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300 hover:after:w-0">
            About Me
          </h2>

          <div className="flex gap-16 flex-col lg:flex-row">

            {/* about me info */}
            <div className="flex flex-col space-y-4 bg-soft bg-opacity-80 rounded-xl p-16 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
              <div className="flex gap-4 items-center">
                <Image src='/profile.jpg' alt="Profile Picture"  width={75} height={75} className="rounded-full" />
                <h1 className="text-2xl md:text-3xl font-semibold">Daniel Freeman</h1>
              </div>

              {/* description */}
              <p className="text-md md:text-xl ">I'm a full stack web developer with a focus on building responsive, user-friendly applications. I work with JavaScript, Python, HTML, and CSS, and I'm experienced in frameworks like React.js, Next.js, and Tailwind CSS. On the backend, I use MongoDB and have a solid understanding of database management. I'm always exploring new technologies and love bringing ideas to life through code.</p>
            </div>

            {/* contact me and skill cards */}
            <div className="flex flex-col gap-16">

              {/* contact me container */}
              <div className="flex flex-col space-y-4 bg-soft bg-opacity-80 rounded-xl p-8 border-2 border-color-textMuted hover:shadow-textMuted duration-100 transition-shadow hover:shadow-md">
                <h1 className="text-2xl font-semibold">Contact Me!</h1>
              </div>

              {/* skills and tools card */}
              <SkillCards />
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-8 py-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-8 py-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
        </section>
      </div>
    </main>
  );
}
