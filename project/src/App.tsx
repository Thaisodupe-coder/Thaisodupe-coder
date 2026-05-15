import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Summary from './components/Summary';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Summary />
      </main>
    </div>
  );
}
