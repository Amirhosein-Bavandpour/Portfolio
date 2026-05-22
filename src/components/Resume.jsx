import SectionWrapper from "./SectionWrapper";

function Resume() {
  return (
    <SectionWrapper id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Resume
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          View or download my CV
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Here you can download my latest CV and learn more about my experience,
          skills, and projects.
        </p>

        <a
          href="/cv.pdf"
          download
          className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-300"
        >
          Download CV
        </a>
      </div>
    </SectionWrapper>
  );
}

export default Resume;