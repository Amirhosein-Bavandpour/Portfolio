function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-10 top-40 h-80 w-80 animate-pulse rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:32px_32px]" />
    </div>
  );
}

export default AnimatedBackground;
