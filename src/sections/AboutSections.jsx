import { 
    Code2,
    Database,
    Server
} from "lucide-react";
import { personal } from "../data/personal";

function Stat({ icon, value, label }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-ink p-5">
        <div className="mb-6 text-accent">{icon}</div>
        <div className="font-black text-primary">{value}</div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-secondary">
            {label}
        </div>
        </div>
    );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-paper"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.55fr_1fr] lg:px-8 lg:py-32">
        <div>
          <p className="eyebrow">01 / About</p>

          <h2 className="section-title">
            Business thinking.
            <br />
            Backend execution.
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="big-copy">{personal.about1}</p>

          <p className="body-copy mt-6">
            {personal.about2}
          </p>

          <p className="body-copy mt-5">
            {personal.about3}
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Stat
              icon={<Server size={18} />}
              value="Backend"
              label="Primary direction"
            />

            <Stat
              icon={<Database size={18} />}
              value="Systems"
              label="Business & ERP interest"
            />

            <Stat
              icon={<Code2 size={18} />}
              value="Automation"
              label="Reduce repetitive work"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;