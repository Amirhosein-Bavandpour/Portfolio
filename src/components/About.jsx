import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <SectionWrapper id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          I enjoy building clean web experiences and practical AI systems.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I am a frontend developer and AI engineer who builds responsive web
          applications with React and explores ways to bring intelligent
          features into real products.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          My AI background includes deep learning, CNN-based modeling, LLM
          workflows, local AI agents, and model-assisted problem solving. My
          goal is to create applications that are useful, clear, and easy to
          work with.
        </p>
      </div>
    </SectionWrapper>
  );
}

export default About;
