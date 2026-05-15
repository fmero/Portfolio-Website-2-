import { Link, useParams } from "react-router-dom";

const projects = {
  TORS: { //TORS Project
    title: '3mm Elbow-wrist Robotic Tool for Transoral Peadiatric Surgery',
    //Update the description
    description:
      'Developed a low-cost, anatomically accurate, pediatric-sized surgical training simulator.',
    tags: ['SOLIDWORKS®', 'Blender', 'FDM and SLA Printing', 'Prototyping'],  
  },
  NVSim: { //talk about the NV sim
    title: 'Neurovascular Simulator',
    //Update the description
    description:
      'Developed a low-cost, anatomically accurate, pediatric-sized surgical training simulator.',
    tags: ['SOLIDWORKS®', 'Blender', 'FDM and SLA Printing', 'Prototyping'],
  },
  ORCA: {//Talk about the ORCA Robotic Hand
    title: 'ORCA Dexterous Robotic Hand',
    //Update the description
    description:
      'Built the ORCA robotic hand for in-lab robotic manipulation research and training.',
    tags: ['3D Printing', 'Soldering', 'Tendon-driven Robotic'],
  },
  NASA: {
    title: 'NASA Orion CAD Model',
    description:
      'Designed and modelled the NASA Orion spacecraft using SOLIDWORKS. Utilized assembly tools to create moveable mates.',
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen p-10">
        <Link to="/" className="text-blue-600">← Back home</Link>
        <h1 className="mt-6 text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white px-8 py-10">
      <Link to="/" className="text-slate-600 hover:text-slate-900">
        ← Back home
      </Link>

      <section className="mx-auto mt-10 max-w-4xl">
        <h1 className="text-5xl font-bold text-slate-900">
          {project.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-slate-100 px-4 py-2 text-slate-700"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
            <p className="mt-3 text-slate-600">
              Add a longer explanation of what the project does, who it is for,
              and why you built it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">My Role</h2>
            <p className="mt-3 text-slate-600">
              Explain what you personally worked on, such as design, frontend,
              backend, data, hardware, research, or analysis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Key Features</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}