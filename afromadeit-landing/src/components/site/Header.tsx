import logo from "@/assets/logo-lockup.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-midnight/70 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="AfroMadeIt Global" className="h-10 w-10 object-contain" width={40} height={40} />
          <span className="font-display text-sm sm:text-base font-semibold tracking-tight">
            AfroMadeIt <span className="text-gradient-gold">Global</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#why" className="hover:text-foreground transition-colors">Why Us</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full bg-gradient-gold px-4 py-2 text-sm font-medium text-midnight shadow-[var(--shadow-gold)] hover:opacity-95 transition"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
