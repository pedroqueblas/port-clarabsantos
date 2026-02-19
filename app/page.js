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
      <section id="sobre" className="hero reveal">
        <div>
          <span className="pill">Desenvolvedora Java Backend Junior</span>
          <h1>Construo APIs robustas e escaláveis em Java</h1>
          <p>
            Desenvolvedora Java Backend Junior com experiência em desenvolvimento de aplicações web utilizando Spring Boot, Hibernate e RESTful APIs. Conhecimento em bancos de dados SQL e práticas de versionamento com Git. Habilidade em trabalhar em equipe, solucionar problemas técnicos e entregar soluções de qualidade.
          </p>
          <div className="chips">
            <span className="chip">Java</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">Docker</span>
            <span className="chip">Git</span>
            <span className="chip">API REST</span>
            <span className="chip">SQL</span>
          </div>
          <div className="cta-row">
            <a className="cta primary" href="https://www.linkedin.com/in/clara-santos02/" target="_blank" rel="noreferrer">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM4 9h2v12H4zM9 9h2v1.6h.03C11.46 9.9 12.67 9 14.4 9 18.04 9 19 11.3 19 15v6h-2v-5.2c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V21H9V9z"/>
              </svg>
              LinkedIn
            </a>
            <a className="cta" href="https://wa.me/5581983843461" target="_blank" rel="noreferrer">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48a11.5 11.5 0 0 0-18.1 13.6L1 23l6.07-1.39a11.46 11.46 0 0 0 5.43 1.38h.01A11.5 11.5 0 0 0 20.52 3.48Zm-4.14 13.8c-.34.96-1.99 1.76-2.8 1.77-.75.02-1.7-.24-2.84-.78-2.42-1.15-4.02-3.87-4.15-4.05-.12-.17-.99-1.32-.99-2.52s.62-1.78.84-2.02c.22-.24.49-.3.65-.3h.47c.15 0 .35-.05.54.4.2.46.69 1.6.75 1.72.06.12.1.26.02.42-.07.17-.11.26-.22.4-.12.14-.23.31-.33.42-.11.11-.23.24-.1.45.12.24.54.88 1.16 1.43.8.71 1.46.93 1.71 1.04.25.11.39.09.54-.05.15-.14.62-.72.79-.97.17-.25.34-.2.56-.12.22.07 1.41.66 1.65.78.24.12.4.18.46.28.06.1.06.99-.28 1.95Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="avatar-card">
          <img
            className="avatar"
            src="/perfil.jpg"
            alt="Foto profissional"
            width={220}
            height={220}
          />
          <span className="avatar-ring" aria-hidden="true" />
        </div>
      </section>

      <section id="skills" className="section reveal">
        <h2 className="section-title">Skills</h2>
        <p>Ferramentas e tecnologias que utilizo no dia a dia.</p>
        <div className="skills" style={{ marginTop: 14 }}>
          <div className="skill-card reveal" style={{ animationDelay: "0.05s" }}>
            <div>
              <div className="skill-title">☕ Java</div>
              <div className="skill-sub">Collections, Streams, JPA</div>
            </div>
            <div className="progress"><div className="bar" style={{ ["--w"]: "85%" }} /></div>
          </div>
          <div className="skill-card reveal" style={{ animationDelay: "0.1s" }}>
            <div>
              <div className="skill-title">🌱 Spring Boot</div>
              <div className="skill-sub">REST, Security, Data JPA</div>
            </div>
            <div className="progress"><div className="bar" style={{ ["--w"]: "80%" }} /></div>
          </div>
          <div className="skill-card reveal" style={{ animationDelay: "0.15s" }}>
            <div>
              <div className="skill-title">🐳 Docker</div>
              <div className="skill-sub">Containerização e Compose</div>
            </div>
            <div className="progress"><div className="bar" style={{ ["--w"]: "70%" }} /></div>
          </div>
          <div className="skill-card reveal" style={{ animationDelay: "0.2s" }}>
            <div>
              <div className="skill-title">🌿 Git</div>
              <div className="skill-sub">Branches, PRs e Git Flow</div>
            </div>
            <div className="progress"><div className="bar" style={{ ["--w"]: "82%" }} /></div>
          </div>
          <div className="skill-card reveal" style={{ animationDelay: "0.25s" }}>
            <div>
              <div className="skill-title">🔗 API REST</div>
              <div className="skill-sub">Boas práticas, versionamento, DTOs</div>
            </div>
            <div className="progress"><div className="bar" style={{ ["--w"]: "84%" }} /></div>
          </div>
          <div className="skill-card reveal" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="skill-title">🗄️ SQL</div>
              <div className="skill-sub">Modelagem, consultas, índices</div>
            </div>
            <div className="progress"><div className="bar" style={{ ["--w"]: "78%" }} /></div>
          </div>
        </div>
      </section>

      <section id="projetos" className="section reveal">
        <h2 className="section-title">Projetos</h2>
        <p>Alguns exemplos de projetos e desafios práticos.</p>
        <div className="projects" style={{ marginTop: 14 }}>
          <article className="project-card reveal">
            <strong>API de Catálogo</strong>
            <span className="skill-sub">Spring Boot, JPA, PostgreSQL</span>
            <p>Gerenciamento de produtos com autenticação e testes.</p>
            <a href="#" aria-disabled="true">Ver repositório</a>
          </article>
          <article className="project-card reveal">
            <strong>Serviço de Pedidos</strong>
            <span className="skill-sub">Spring Boot, Docker, RabbitMQ</span>
            <p>Processamento assíncrono e orquestração com containers.</p>
            <a href="#" aria-disabled="true">Ver repositório</a>
          </article>
        </div>
      </section>

    
    </>
  );
}
