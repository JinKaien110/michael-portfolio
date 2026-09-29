
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/cards/ProjectCard.jsx";

function ProjectsSection({ setActiveProject }) {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">02 / Selected work</p>

            <h2 className="section-title">
              Systems I&apos;ve built.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-secondary sm:text-base">
              A selection of business applications, management
              systems, and software projects I've worked on.
            </p>
          </div>

          <a
            href="https://github.com/JinKaien110"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-secondary underline decoration-white/20 underline-offset-4 transition hover:text-primary"
          >
            View GitHub <ExternalLink size={15} />
          </a>
        </div>

        {/* Responsive project gallery */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;