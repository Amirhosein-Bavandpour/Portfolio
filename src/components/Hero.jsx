function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Frontend Developer
        </p>

        <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Hi, I&apos;m Amirhosein. I build modern web applications with React.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I create responsive, clean, and user-friendly web apps. My portfolio
          is a hub for my projects, live demos, and CV.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;