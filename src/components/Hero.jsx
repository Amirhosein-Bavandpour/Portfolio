import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-20 md:pb-0">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Frontend Developer
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m Amirhosein. I build modern web applications with React.
          </h2>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Junior frontend developer focused on clean UI, responsive design,
            API integration, and user-friendly web apps. This portfolio is a
            hub for my projects, live demos, and CV.
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
              download
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-2xl text-slate-300">
            <a
              href="https://github.com/Amirhosein-Bavandpour/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/amirhosein-bavandpour"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl" />

            <img
              src="/profile.png"
              alt="Amirhosein Bavandpour"
              className="relative h-64 w-64 rounded-full border border-white/10 object-cover shadow-2xl md:h-80 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
