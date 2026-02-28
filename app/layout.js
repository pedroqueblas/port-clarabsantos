import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
<<<<<<< HEAD
  title: "Portfolio | Desenvolvedora Backend Java",
  description: "Portfolio com design tech para desenvolvedora Java Backend"
=======
  title: "Clara Santos",
  description: "desenvolvedora Java Backend"
>>>>>>> 4af76d1 (Atualização do projeto: melhorias no layout / novos componentes)
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
