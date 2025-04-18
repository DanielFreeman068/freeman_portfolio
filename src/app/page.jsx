import Navigation from "@/app/components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="p-4 mt-10">
      <section id="About-Me" className="h-screen bg-blue-900 flex justify-center items-center text-white">
        <h1>About Me</h1>
      </section>
      <section id="Experience" className="h-screen bg-blue-700 flex justify-center items-center text-white">
        <h1>Experience</h1>
      </section>
      <section id="Projects" className="h-screen bg-blue-500 flex justify-center items-center text-white">
        <h1>Projects</h1>
      </section>
      </div>
    </div>
  );
}
