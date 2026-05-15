import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ProjectDetail from "./pages/ProjectDetail";

// export default function App() {
//   return (
//     <div className="font-sans antialiased text-slate-900">
//       <Navbar />
//       <main>
//         <Hero />
//         <Projects />
//         <Resume />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}