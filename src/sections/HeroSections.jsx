import {
    ArrowUpRight,
    Mail,
    Sparkles,
} from "lucide-react";
import { personal } from "../data/personal";

function HeroSection({ scrollTo }) {
    return (
            <section
              id="home"
              className="relative overflow-hidden pt-32 lg:pt-40"
            >
        <div className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="mx-auto grid max-w-7xl items-end gap-14 px-5 pb-24 lg:grid-cols-[1.25fr_.75fr] lg:px-8 lg:pb-32">
            <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-paper px-3 py-1.5 text-xs font-semibold tracking-wide text-secondary">
                <span className="availability-dot h-2 w-2 rounded-full bg-accentBlue" />
                Open to backend & systems opportunities
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-secondary">
                Michael G. Gonzaga
            </p>

            <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,8.4rem)] font-black leading-[0.86] tracking-[-0.075em] text-primary">
                I BUILD
                <br />
                <span className="hero-highlight">SYSTEMS</span>
                <br />
                THAT WORK.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-secondary lg:text-xl">
                {personal.homeintro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
                <button
                onClick={() => scrollTo("projects")}
                className="button-dark"
                >
                View Projects <ArrowUpRight size={16} />
                </button>

                <button
                onClick={() => scrollTo("contact")}
                className="button-light"
                >
                Let's Connect <Mail size={16} />
                </button>
            </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="profile-frame">
                <img
                src="/assets/shin.jpg"
                alt="Michael G. Gonzaga"
                className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute -bottom-5 -left-4 max-w-[220px] rounded-2xl border border-white/10 bg-paper p-4 shadow-soft lg:-left-12">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Sparkles size={14} />
                Current focus
                </div>

                <p className="text-sm font-semibold leading-6 text-primary">
                Python · PostgreSQL · Architecture · Security · Scalable backend systems
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}

export default HeroSection;