import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Taskflow',
    description:
      'A real-time project management tool with drag-and-drop boards, team collaboration, and progress analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Budgetr',
    description:
      'Personal finance tracker with AI-powered spending insights, custom categories, and exportable reports.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Artfolio',
    description:
      'Gallery platform for digital artists to showcase portfolios, sell prints, and connect with collectors.',
    tags: ['Vue.js', 'Express', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'WeatherNow',
    description:
      'Beautifully designed weather app with hourly forecasts, radar maps, and location-based alerts.',
    tags: ['React Native', 'TypeScript', 'REST APIs'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Learnpath',
    description:
      'Adaptive e-learning platform that personalizes course paths based on user performance and goals.',
    tags: ['React', 'Python', 'FastAPI', 'Redis'],
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'ChatVault',
    description:
      'Encrypted messaging app with end-to-end encryption, self-destructing messages, and voice notes.',
    tags: ['React', 'Socket.io', 'Node.js', 'Crypto'],
    image: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
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
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
                  >
                    <Github size={15} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
