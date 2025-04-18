import Navigation from "@/app/components/Navigation";
import SkillCards from "@/app/components/SkillCards"

export default function Home() {
  return (
    <main className="min-h-screen text-white">
    <Navigation />
    
    {/* Content with padding to account for fixed nav */}
    <div className="pt-32">
      {/* About Section */}
      <section id="about" className="min-h-screen px-8 py-16 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <SkillCards />
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="min-h-screen px-8 py-16 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="max-w-3xl">
          {/* Your experience content */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold">Job Title</h3>
            <p className="text-lg text-indigo-300">Company Name • 2020-Present</p>
            <p className="mt-2">Job description here...</p>
          </div>
          {/* Add more experience items as needed */}
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-8 py-16 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Project cards would go here */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project Name</h3>
            <p className="mt-2">Project description...</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
    </div>
  </main>
  );
}
