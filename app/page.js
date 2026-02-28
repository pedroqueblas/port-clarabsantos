"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";

const skills = [
  { icon: "☕", label: "Java" },
  { icon: "🌱", label: "Spring Boot" },
  { icon: "🐳", label: "Docker" },
  { icon: "🌿", label: "Git" },
  { icon: "🔗", label: "API REST" },
  { icon: "🗄️", label: "SQL" },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />

      <section id="skills" className="reveal mt-10 border-t border-[#1e293b] pt-10">
        <div className="space-y-2">
          <h2 className="reveal reveal-delay-1 text-xl font-semibold text-white sm:text-2xl">
            Skills
          </h2>
          <p className="reveal reveal-delay-2 text-[#93c5fd]">
            Principais tecnologias e ferramentas que utilizo no desenvolvimento backend.
          </p>
        </div>
      </section>
      <section id="projetos" className="reveal mt-10 border-t border-[#1e293b] pt-10">
        <div className="space-y-2">
          <h2 className="reveal reveal-delay-1 text-xl font-semibold text-white sm:text-2xl">Projetos</h2>
          <p className="reveal reveal-delay-2 text-[#93c5fd]">Alguns exemplos de projetos e desafios práticos.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="reveal reveal-delay-1 glow-hover rounded-2xl border border-[#1e40af] bg-[#1e293b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white">API de Catálogo</h3>
                <p className="mt-1 text-sm text-[#93c5fd]">Spring Boot, JPA, PostgreSQL</p>
              </div>
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs font-medium text-[#93c5fd]">Backend</span>
            </div>
            <p className="mt-3 text-sm text-[#93c5fd]">Gerenciamento de produtos com autenticação, testes automatizados e documentação de API.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs text-[#93c5fd]">JWT</span>
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs text-[#93c5fd]">Testes</span>
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs text-[#93c5fd]">Swagger</span>
            </div>
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#93c5fd] transition hover:text-[#bfdbfe]" href="#" aria-disabled="true">
              Ver repositório
            </a>
          </article>
          <article className="reveal reveal-delay-2 glow-hover rounded-2xl border border-[#1e40af] bg-[#1e293b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-white">Serviço de Pedidos</h3>
                <p className="mt-1 text-sm text-[#93c5fd]">Spring Boot, Docker, RabbitMQ</p>
              </div>
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs font-medium text-[#93c5fd]">Mensageria</span>
            </div>
            <p className="mt-3 text-sm text-[#93c5fd]">Processamento assíncrono, integração com filas e observabilidade com logs estruturados.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs text-[#93c5fd]">Queue</span>
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs text-[#93c5fd]">Docker Compose</span>
              <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-2 py-0.5 text-xs text-[#93c5fd]">Logs</span>
            </div>
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#93c5fd] transition hover:text-[#bfdbfe]" href="#" aria-disabled="true">
              Ver repositório
            </a>
          </article>
        </div>
      </section>

      <section id="mentorias" className="reveal mt-10 border-t border-[#1e293b] pt-10">
        <div className="space-y-2 text-center">
          <h2 className="reveal reveal-delay-1 text-xl font-semibold text-white sm:text-2xl">Mentorias</h2>
          <p className="reveal reveal-delay-2 text-[#93c5fd] max-w-2xl mx-auto">
            Invista no seu desenvolvimento profissional e acelere sua carreira em tecnologia com orientação personalizada
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Por que buscar mentoria?</h3>
              <p className="text-[#93c5fd]">
                A área de tecnologia está em constante evolução e ter um mentor experiente pode fazer toda a diferença 
                no seu crescimento profissional. Através da mentoria, você recebe orientação prática, insights valiosos 
                e direcionamento personalizado para alcançar seus objetivos mais rapidamente.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Vantagens da mentoria em TI</h3>
              <ul className="space-y-2 text-[#93c5fd]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb]">✓</span>
                  <span>Aceleração do aprendizado técnico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb]">✓</span>
                  <span>Orientação sobre carreira e mercado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb]">✓</span>
                  <span>Resolução de desafios reais do dia a dia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb]">✓</span>
                  <span>Networking e conexões profissionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb]">✓</span>
                  <span>Preparação para entrevistas técnicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb]">✓</span>
                  <span>Desenvolvimento de soft skills essenciais</span>
                </li>
              </ul>
            </div>

            <div className="reveal reveal-delay-5 pt-4">
              <a 
                 className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition hover:bg-[#1d4ed8]" 
                 href="https://www.instagram.com/devclarasantos/" 
                 target="_blank" 
                 rel="noreferrer"
               >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
                Entre em contato pelo Instagram
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">O que dizem nossos mentorandos</h3>
            
            <div className="space-y-4">
              <div className="glow-hover rounded-2xl border border-[#1e40af] bg-[#1e293b] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#2563eb] to-[#93c5fd] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">AM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Ana Maria</h4>
                    <p className="text-sm text-[#93c5fd]">Desenvolvedora Backend</p>
                  </div>
                </div>
                <p className="mt-3 text-[#93c5fd] text-sm">
                  "A mentoria foi transformadora! Recebi orientações precisas que me ajudaram a conseguir minha primeira 
                  vaga como desenvolvedora Java. As dicas sobre entrevistas técnicas foram especialmente valiosas."
                </p>
              </div>

              <div className="glow-hover rounded-2xl border border-[#1e40af] bg-[#1e293b] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#2563eb] to-[#93c5fd] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">CP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Carlos Pedro</h4>
                    <p className="text-sm text-[#93c5fd]">Engenheiro de Software</p>
                  </div>
                </div>
                <p className="mt-3 text-[#93c5fd] text-sm">
                  "Excelente mentoria! As sessões práticas com Spring Boot e os code reviews me fizeram evoluir 
                  rapidamente. Recomendo para quem quer sair do básico e se tornar um desenvolvedor senior."
                </p>
              </div>

              <div className="glow-hover rounded-2xl border border-[#1e40af] bg-[#1e293b] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#2563eb] to-[#93c5fd] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Juliana Silva</h4>
                    <p className="text-sm text-[#93c5fd]">Arquiteta de Software</p>
                  </div>
                </div>
                <p className="mt-3 text-[#93c5fd] text-sm">
                  "A mentoria me ajudou a fazer a transição para arquitetura de software. As discussões sobre 
                  padrões de projeto e boas práticas foram fundamentais para meu crescimento profissional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
