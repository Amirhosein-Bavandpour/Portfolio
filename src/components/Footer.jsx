function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Amirhosein Bavandpour. All rights reserved.</p>

        <p>Built with React and TailwindCSS.</p>
      </div>
    </footer>
  );
}

export default Footer;