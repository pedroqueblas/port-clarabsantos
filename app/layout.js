import "./globals.css";

export const metadata = {
  title: "Portfolio | Desenvolvedora Backend Java",
  description: "Portfolio com design glassmorphism para desenvolvedora Java Backend Junior"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="brand">
            <span aria-hidden="true">🧩</span>
            <span>Java Backend</span>
          </div>
          <nav className="nav">
            <a href="#sobre">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#projetos">Projetos</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <span>© {new Date().getFullYear()} Desenvolvedora Java Backend Junior</span>
        </footer>
      </body>
    </html>
  );
}
