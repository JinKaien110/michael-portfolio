
import { ArrowUpRight, ExternalLink, Layers, Server } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
    SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";

import { Sparkles } from "lucide-react";
import GithubIcon from "../icons/GithubIcon";

const technologyIcons = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  AI: Sparkles,
  Laravel: SiLaravel,
  PHP: SiPhp,
  "Native PHP": SiPhp,
  MySQL: SiMysql,
};

const technologyColors = {
  React: "text-[#61DAFB]",
  "Node.js": "text-[#5FA04E]",
  Express: "text-white",
  MongoDB: "text-[#47A248]",
  AI: "text-[#A78BFA]",
  Laravel: "text-[#FF2D20]",
  PHP: "text-[#777BB4]",
  "Native PHP": "text-[#777BB4]",
  MySQL: "text-[#4479A1]",
};

const roleConfig = {
  "Full-Stack Developer": {
    Icon: Layers,
    gradient: "bg-gradient-to-r from-red-500 to-blue-500",
  },
  "Backend Developer": {
    Icon: Server,
    gradient: "bg-gradient-to-r from-red-700 to-red-500",
  },
};



function ProjectCard({ project, onOpen }) {
  const role = roleConfig[project.role];
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.05]">
      {/* Project cover */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-white/[0.04] text-left"
        aria-label={`Preview ${project.title}`}
      >
        {project.images?.[0] ? (
          <img
            src={project.images[0].src}
            alt={project.images[0].alt || `${project.title} screenshot`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-6 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
              Project Preview
            </span>
            <span className="text-3xl font-black text-white">
              {project.number}
            </span>
            <span className="max-w-xs text-sm text-slate-300">
              {project.title}
            </span>
          </div>
        )}

        <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
          View project <ArrowUpRight size={14} />
        </span>
      </button>

      {/* Project information */}
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-indigo-300">
          {project.type}
        </p>

        {role && (
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-sm ${role.gradient}`}
          >
            <role.Icon size={14} aria-hidden="true" />
            {project.role}
          </span>
        )}
      </div>

        <h3 className="mt-3 text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        

        {/* Technology tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((technology) => {
            const TechnologyIcon = technologyIcons[technology];

            return (
              <span
                key={technology}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
              >
                {TechnologyIcon && (
                  <TechnologyIcon
                    size={15}
                    aria-hidden="true"
                    className={
                      technologyColors[technology] || "text-slate-400"
                    }
                  />
                )}

                {technology}
              </span>
            );
          })}
        </div>

        {/* Project actions */}
        <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-400"
            >
              Live Demo <ExternalLink size={15} />
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              GitHub <GithubIcon size={15} />
            </a>
          )}

          {!project.liveUrl && !project.link && (
            <span className="text-xs text-slate-500">
              Preview unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;