function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let&apos;s build something together.
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          I&apos;m open to frontend and fullstack opportunities. You can contact
          me for work, collaboration, or project discussions.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:bavandpour.amirhosein@gmail.com"
            className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Amirhosein-Bavandpour/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/amirhosein-bavandpour"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;