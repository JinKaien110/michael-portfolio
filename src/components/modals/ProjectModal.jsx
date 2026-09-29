
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  X,
  Layers, 
  Server,
  Sparkles
} from "lucide-react";
import GithubIcon from "../icons/GithubIcon";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
    SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";

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


function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project?.number]);

  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight" && project.images?.length) {
        setImageIndex((index) =>
          (index + 1) % project.images.length
        );
      }

      if (event.key === "ArrowLeft" && project.images?.length) {
        setImageIndex((index) =>
          (index - 1 + project.images.length) %
          project.images.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;
  const role = roleConfig[project.role];

  const images = project.images ?? [];
  const currentImage = images[imageIndex];

  function showPrevious() {
    setImageIndex((index) =>
      (index - 1 + images.length) % images.length
    );
  }

  function showNext() {
    setImageIndex((index) => (index + 1) % images.length);
  }

  return (

    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative my-auto max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-ink shadow-2xl"
      >
        {/* Modal header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink/95 px-5 py-4 backdrop-blur">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Project details
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-lg border border-white/10 p-2 text-secondary transition hover:bg-white/10 hover:text-primary"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Screenshot gallery */}
          <div className="min-w-0 border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              {currentImage ? (
                <img
                  src={currentImage.src}
                  alt={
                    currentImage.alt ||
                    `${project.title} screenshot ${imageIndex + 1}`
                  }
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-6 text-center">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                    Project preview
                  </span>
                  <span className="text-5xl font-black text-white">
                    {project.number}
                  </span>
                  <p className="max-w-sm text-sm text-slate-300">
                    Add screenshots to this project's images array
                    to enable the preview album.
                  </p>
                </div>
              )}

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous screenshot"
                    className="absolute left-3 rounded-full border border-white/15 bg-black/70 p-2 text-white hover:bg-black"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next screenshot"
                    className="absolute right-3 rounded-full border border-white/15 bg-black/70 p-2 text-white hover:bg-black"
                  >
                    <ArrowRight size={18} />
                  </button>

                  <span className="absolute bottom-3 right-3 rounded-full bg-black/75 px-3 py-1 text-xs text-white">
                    {imageIndex + 1} / {images.length}
                  </span>
                </>
              )}
            </div>

            {/* Screenshot thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => setImageIndex(index)}
                    aria-label={`View screenshot ${index + 1}`}
                    aria-pressed={index === imageIndex}
                    className={`h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                      index === imageIndex
                        ? "border-indigo-400"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt || `Screenshot ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project information */}
          <div className="p-5 sm:p-7">
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

            <h2
              id="project-modal-title"
              className="mt-3 text-2xl font-black leading-tight text-primary sm:text-3xl"
            >
              {project.title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-secondary">
              {project.description}
            </p>

            <div className="mt-7">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                Technologies & categories
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                Project status
              </p>
              <p className="mt-2 text-sm text-primary">
                {project.status}
              </p>
            </div>

            {/* Project links */}
            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-400"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-white/[0.06]"
                >
                  GitHub <GithubIcon size={16} />
                </a>
              )}
            </div>

            <p className="mt-5 text-xs leading-5 text-secondary">
              Interactive sandbox preview can be added here in a
              future update.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectModal;