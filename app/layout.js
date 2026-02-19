import "./globals.css";

export const metadata = {
  title: "Portfolio | Desenvolvedora Backend Java",
  description: "Portfolio com design glassmorphism para desenvolvedora Java Backend Junior"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black text-violet-100 antialiased">
        <header className="sticky top-0 z-10 border-b border-[#1c0b2a] bg-black/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-violet-100">
              <span aria-hidden="true">🧩</span>
              <span>Java Backend</span>
            </div>
            <nav className="flex flex-wrap items-center gap-2 text-sm">
              <a className="rounded-md px-3 py-2 text-violet-200 transition hover:bg-[#1b0a2b] hover:text-violet-100" href="#sobre">Sobre</a>
              <a className="rounded-md px-3 py-2 text-violet-200 transition hover:bg-[#1b0a2b] hover:text-violet-100" href="#skills">Skills</a>
              <a className="rounded-md px-3 py-2 text-violet-200 transition hover:bg-[#1b0a2b] hover:text-violet-100" href="#projetos">Projetos</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">{children}</main>
        <footer className="border-t border-[#1c0b2a] py-6 text-center text-sm text-violet-300">
          <span>© {new Date().getFullYear()} Desenvolvedora Java Backend Junior</span>
        </footer>
      </body>
    </html>
  );
}
