"use client";
import { useEffect } from "react";

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
      <section id="sobre" className="reveal grid items-center gap-10 py-6 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <span className="reveal reveal-delay-1 inline-flex items-center rounded-full border border-[#2b0f44] bg-[#1b0a2b] px-3 py-1 text-xs font-semibold text-[#d8b4fe]">
            Desenvolvedora Java Backend Junior
          </span>
          <h1 className="reveal reveal-delay-2 text-3xl font-semibold leading-tight text-violet-50 sm:text-4xl lg:text-5xl">
            Construo APIs robustas e escaláveis em Java
          </h1>
          <p className="reveal reveal-delay-3 text-base text-violet-200 sm:text-lg">
            Desenvolvedora Java Backend Junior com experiência em desenvolvimento de aplicações web utilizando Spring Boot, Hibernate e RESTful APIs. Conhecimento em bancos de dados SQL e práticas de versionamento com Git. Habilidade em trabalhar em equipe, solucionar problemas técnicos e entregar soluções de qualidade.
          </p>
          <div className="reveal reveal-delay-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#2b0f44] bg-[#0b0b0b] px-3 py-1 text-xs text-violet-200">Java</span>
            <span className="rounded-full border border-[#2b0f44] bg-[#0b0b0b] px-3 py-1 text-xs text-violet-200">Spring Boot</span>
            <span className="rounded-full border border-[#2b0f44] bg-[#0b0b0b] px-3 py-1 text-xs text-violet-200">Docker</span>
            <span className="rounded-full border border-[#2b0f44] bg-[#0b0b0b] px-3 py-1 text-xs text-violet-200">Git</span>
            <span className="rounded-full border border-[#2b0f44] bg-[#0b0b0b] px-3 py-1 text-xs text-violet-200">API REST</span>
            <span className="rounded-full border border-[#2b0f44] bg-[#0b0b0b] px-3 py-1 text-xs text-violet-200">SQL</span>
          </div>
          <div className="reveal reveal-delay-5 flex flex-wrap gap-3 pt-2">
            <a className="inline-flex items-center gap-2 rounded-lg bg-[#9400D3] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(148,0,211,0.25)] transition hover:bg-[#7b00ad]" href="https://www.linkedin.com/in/clara-santos02/" target="_blank" rel="noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM4 9h2v12H4zM9 9h2v1.6h.03C11.46 9.9 12.67 9 14.4 9 18.04 9 19 11.3 19 15v6h-2v-5.2c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V21H9V9z"/>
              </svg>
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg border border-[#2b0f44] bg-[#0b0b0b] px-4 py-2 text-sm font-semibold text-violet-200 shadow-[0_6px_18px_rgba(0,0,0,0.5)] transition hover:border-[#3a145a] hover:bg-[#1b0a2b]" href="https://wa.me/5581983843461" target="_blank" rel="noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48a11.5 11.5 0 0 0-18.1 13.6L1 23l6.07-1.39a11.46 11.46 0 0 0 5.43 1.38h.01A11.5 11.5 0 0 0 20.52 3.48Zm-4.14 13.8c-.34.96-1.99 1.76-2.8 1.77-.75.02-1.7-.24-2.84-.78-2.42-1.15-4.02-3.87-4.15-4.05-.12-.17-.99-1.32-.99-2.52s.62-1.78.84-2.02c.22-.24.49-.3.65-.3h.47c.15 0 .35-.05.54.4.2.46.69 1.6.75 1.72.06.12.1.26.02.42-.07.17-.11.26-.22.4-.12.14-.23.31-.33.42-.11.11-.23.24-.1.45.12.24.54.88 1.16 1.43.8.71 1.46.93 1.71 1.04.25.11.39.09.54-.05.15-.14.62-.72.79-.97.17-.25.34-.2.56-.12.22.07 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.99-.28 1.95Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="reveal reveal-delay-2 relative mx-auto flex w-[200px] items-center justify-center lg:mx-0">
          <img
            className="h-[200px] w-[200px] rounded-2xl object-cover shadow-[0_12px_30px_rgba(148,0,211,0.25)] float"
            src="/perfil.jpg"
            alt="Foto profissional"
            width={200}
            height={200}
          />
          <span className="avatar-ring" aria-hidden="true" />
        </div>
      </section>

      <section id="skills" className="reveal mt-10 border-t border-[#1c0b2a] pt-10">
        <div className="space-y-2">
          <h2 className="reveal reveal-delay-1 text-xl font-semibold text-violet-50 sm:text-2xl">Skills</h2>
          <p className="reveal reveal-delay-2 text-violet-200">Ferramentas e tecnologias que utilizo no dia a dia.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="reveal reveal-delay-1 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-violet-50">☕ Java</div>
            <div className="mt-1 text-xs text-violet-200">Collections, Streams, JPA</div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#1b0a2b]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#9400D3] to-[#c084fc]" style={{ width: "85%" }} />
            </div>
          </div>
          <div className="reveal reveal-delay-2 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-violet-50">🌱 Spring Boot</div>
            <div className="mt-1 text-xs text-violet-200">REST, Security, Data JPA</div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#1b0a2b]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#9400D3] to-[#c084fc]" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="reveal reveal-delay-3 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-violet-50">🐳 Docker</div>
            <div className="mt-1 text-xs text-violet-200">Containerização e Compose</div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#1b0a2b]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#9400D3] to-[#c084fc]" style={{ width: "70%" }} />
            </div>
          </div>
          <div className="reveal reveal-delay-4 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-violet-50">🌿 Git</div>
            <div className="mt-1 text-xs text-violet-200">Branches, PRs e Git Flow</div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#1b0a2b]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#9400D3] to-[#c084fc]" style={{ width: "82%" }} />
            </div>
          </div>
          <div className="reveal reveal-delay-5 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-violet-50">🔗 API REST</div>
            <div className="mt-1 text-xs text-violet-200">Boas práticas, versionamento, DTOs</div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#1b0a2b]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#9400D3] to-[#c084fc]" style={{ width: "84%" }} />
            </div>
          </div>
          <div className="reveal reveal-delay-6 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-violet-50">🗄️ SQL</div>
            <div className="mt-1 text-xs text-violet-200">Modelagem, consultas, índices</div>
            <div className="mt-3 h-2 w-full rounded-full bg-[#1b0a2b]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#9400D3] to-[#c084fc]" style={{ width: "78%" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="reveal mt-10 border-t border-[#1c0b2a] pt-10">
        <div className="space-y-2">
          <h2 className="reveal reveal-delay-1 text-xl font-semibold text-violet-50 sm:text-2xl">Projetos</h2>
          <p className="reveal reveal-delay-2 text-violet-200">Alguns exemplos de projetos e desafios práticos.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="reveal reveal-delay-1 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-violet-50">API de Catálogo</h3>
                <p className="mt-1 text-sm text-violet-200">Spring Boot, JPA, PostgreSQL</p>
              </div>
              <span className="rounded-full border border-[#3a145a] bg-[#1b0a2b] px-2 py-0.5 text-xs font-medium text-violet-200">Backend</span>
            </div>
            <p className="mt-3 text-sm text-violet-200">Gerenciamento de produtos com autenticação, testes automatizados e documentação de API.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#2b0f44] bg-[#120016] px-2 py-0.5 text-xs text-violet-200">JWT</span>
              <span className="rounded-full border border-[#2b0f44] bg-[#120016] px-2 py-0.5 text-xs text-violet-200">Testes</span>
              <span className="rounded-full border border-[#2b0f44] bg-[#120016] px-2 py-0.5 text-xs text-violet-200">Swagger</span>
            </div>
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc] transition hover:text-[#e9d5ff]" href="#" aria-disabled="true">
              Ver repositório
            </a>
          </article>
          <article className="reveal reveal-delay-2 glow-hover rounded-2xl border border-[#2b0f44] bg-[#0b0b0b] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-violet-50">Serviço de Pedidos</h3>
                <p className="mt-1 text-sm text-violet-200">Spring Boot, Docker, RabbitMQ</p>
              </div>
              <span className="rounded-full border border-[#3a145a] bg-[#1b0a2b] px-2 py-0.5 text-xs font-medium text-violet-200">Mensageria</span>
            </div>
            <p className="mt-3 text-sm text-violet-200">Processamento assíncrono, integração com filas e observabilidade com logs estruturados.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#2b0f44] bg-[#120016] px-2 py-0.5 text-xs text-violet-200">Queue</span>
              <span className="rounded-full border border-[#2b0f44] bg-[#120016] px-2 py-0.5 text-xs text-violet-200">Docker Compose</span>
              <span className="rounded-full border border-[#2b0f44] bg-[#120016] px-2 py-0.5 text-xs text-violet-200">Logs</span>
            </div>
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc] transition hover:text-[#e9d5ff]" href="#" aria-disabled="true">
              Ver repositório
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
