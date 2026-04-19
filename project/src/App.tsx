import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
