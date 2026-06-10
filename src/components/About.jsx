import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <SectionWrapper id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          I enjoy building clean and practical web experiences.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I am a frontend developer who builds responsive web applications with
          React.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          My goal is to create user-friendly applications that look good and
          work smoothly.
        </p>
      </div>
    </SectionWrapper>
  );
}

export default About;
