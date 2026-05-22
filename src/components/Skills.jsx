import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Linux", "Vite"],
  },
];

function Skills() {
  return (
    <SectionWrapper id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <h3 className="mb-5 text-xl font-semibold">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:scale-105 hover:bg-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;