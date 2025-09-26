import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ProblemSolving from "./sections/ProblemSolving";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="w-screen flex justify-center bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
      <main className="w-full max-w-6xl min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <ProblemSolving />
        <footer className="px-4 pb-20 pt-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} 진주찬 · Built with React & Tailwind · Deployed on Vercel
        </footer>
      </main>
    </div>
  );
}

