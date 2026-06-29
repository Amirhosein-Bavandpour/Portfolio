import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let&apos;s build something together.
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          I&apos;m currently looking for junior frontend, AI engineering, and
          AI-assisted application development opportunities. Feel free to
          contact me.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <a
            href="mailto:bavandpour.amirhosein@gmail.com"
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-800"
          >
            <FaEnvelope className="text-3xl text-cyan-400" />

            <h3 className="mt-4 text-xl font-semibold">Email</h3>

            <p className="mt-2 break-all text-slate-400">bavandpour.amirhosein@gmail.com</p>
          </a>

          <a
            href="https://github.com/Amirhosein-Bavandpour/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-800"
          >
            <FaGithub className="text-3xl text-cyan-400" />

            <h3 className="mt-4 text-xl font-semibold">GitHub</h3>

            <p className="mt-2 break-all text-slate-400">github.com/Amirhosein-Bavandpour</p>
          </a>

          <a
            href="https://linkedin.com/in/amirhosein-bavandpour"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-800"
          >
            <FaLinkedin className="text-3xl text-cyan-400" />

            <h3 className="mt-4 text-xl font-semibold">LinkedIn</h3>

            <p className="mt-2 break-all text-slate-400">linkedin.com/in/amirhosein-bavandpour</p>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
