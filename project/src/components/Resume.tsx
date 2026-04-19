import { Download, Briefcase, GraduationCap } from 'lucide-react';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
  { category: 'Tools & Cloud', items: ['Git', 'Docker', 'AWS', 'Supabase', 'Figma'] },
];

const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Notion Labs',
    period: '2022 — Present',
    description:
      'Led development of core editor features serving 30M+ users. Architected a component library that reduced build times by 40%.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Vercel',
    period: '2020 — 2022',
    description:
      'Built internal tooling and developer-facing dashboards. Contributed to open-source projects with 10k+ GitHub stars.',
  },
  {
    role: 'Junior Developer',
    company: 'Startup Studio',
    period: '2018 — 2020',
    description:
      'Developed MVPs for early-stage startups. Worked across the stack from database schema design to UI implementation.',
  },
];

const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'University of California, Berkeley',
    period: '2014 — 2018',
    note: 'Graduated with Honors',
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-widest text-sky-600 uppercase mb-3">
              Background
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Resume
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-700 transition-colors self-start sm:self-auto"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                <Briefcase size={16} className="text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((job, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-sky-500 bg-white" />
                  <p className="text-xs text-slate-400 font-medium mb-1">{job.period}</p>
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">{job.role}</h4>
                  <p className="text-sm text-sky-600 font-medium mb-2">{job.company}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-12 mb-8">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <GraduationCap size={16} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-emerald-500 bg-white" />
                  <p className="text-xs text-slate-400 font-medium mb-1">{edu.period}</p>
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">{edu.degree}</h4>
                  <p className="text-sm text-emerald-600 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-slate-500">{edu.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8">Skills & Technologies</h3>
            <div className="space-y-8">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full shadow-sm hover:border-slate-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-base font-bold text-slate-900 mb-4">About Me</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                I'm a developer with 6+ years of experience building web applications.
                I care deeply about clean code, great UX, and shipping things that matter.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                When I'm not coding, I'm hiking, reading about design systems, or
                contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
