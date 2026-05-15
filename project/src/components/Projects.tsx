import { ExternalLink, Github } from 'lucide-react';
import { useState } from "react";



const projects = [
  { //TORS Project
    id: "TORS",
    title: '3mm Elbow-wrist Robotic Tool for Transoral Peadiatric Surgery',
    //Update the description
    description:
      'Developed a low-cost, anatomically accurate, pediatric-sized surgical training simulator.',
    tags: ['SOLIDWORKS®', 'Blender', 'FDM and SLA Printing', 'Prototyping'],
    //Need to update the image
    details:
    "This project involved CAD.lsnfsuefoisefisjf",
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    //Dont need a github for this
      //github: 'https://github.com',
    //Maybe add a Youtube video of how it works
      //live: 'https://example.com',
  },
  { //talk about the NV sim
    id: "NVSim",
    title: 'Neurovascular Simulator',
    //Update the description
    description:
      'Developed a low-cost, anatomically accurate, pediatric-sized surgical training simulator.',
    tags: ['SOLIDWORKS®', 'Blender', 'FDM and SLA Printing', 'Prototyping'],
    //Need to update the image
    details:
  "This project involved CAD.lsnfsuefoisefisjf",
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    //Dont need a github for this
      //github: 'https://github.com',
    //Maybe add a Youtube video of how it works
      //live: 'https://example.com',
  },
  {//Talk about the ORCA Robotic Hand
    id: "ORCA",
    title: 'ORCA Dexterous Robotic Hand',
    //Update the description
    description:
      'Built the ORCA robotic hand for in-lab robotic manipulation research and training.',
    tags: ['3D Printing', 'Soldering', 'Tendon-driven Robotic'],
    //update image for the project
    details:
      "This project involved CAD.lsnfsuefoisefisjf",
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    //github: 'https://github.com',
    //could add a video of the robot moving
    //live: 'https://example.com',
  },
  {
    id: "NASA",
    title: 'NASA Orion CAD Model',
    description:
      'Designed and modelled the NASA Orion spacecraft using SOLIDWORKS. Utilized assembly tools to create moveable mates.',
    tags: ['SOLIDWORKS®'],
    //Need to change the images of the spacecrafts
    details:
      "This project involved CAD.lsnfsuefoisefisjf",
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    //github: 'https://github.com',
    //live: 'https://example.com',
  },
];

export default function Projects() {
const [expandedProject, setExpandedProject] = useState<string | null>(null);
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-sky-600 uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            A collection of things I've built — from side projects to production
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{projects.map((project) => {
  const isExpanded = expandedProject === project.id;

  return (
    <div
      key={project.id}
      onClick={() => setExpandedProject(isExpanded ? null : project.id)}
      className="group cursor-pointer bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
    <div className="relative overflow-hidden h-52">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        {project.title}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
          >
            <Github size={15} />
            Code
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </div>
    {isExpanded && (
      <div className="mx-6 mb-6 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
        {project.details}
      </div>
    )}
  </div>
  );
})}
        </div>
      </div>
    </section>
  );
}
