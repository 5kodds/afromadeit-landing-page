import logo from "@/assets/logo-lockup.png";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10" />
          <div>
            <div className="font-display font-semibold">AfroMadeIt Global LLC</div>
            <div className="text-xs text-muted-foreground">Strategic HR Consulting</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground space-y-1 sm:text-right">
          <div>
            <a href="mailto:afromadeit@gmail.com" className="hover:text-gold transition">afromadeit@gmail.com</a>
            <span className="mx-2 opacity-40">·</span>
            <a href="tel:+17862227364" className="hover:text-gold transition">786-222-7364</a>
          </div>
          <div>© {new Date().getFullYear()} AfroMadeIt Global LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
