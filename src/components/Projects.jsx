import SectionWrapper from "./SectionWrapper";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <SectionWrapper id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Featured projects and live demos
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-300"
                  >
                    Live Demo <FiExternalLink />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Projects;