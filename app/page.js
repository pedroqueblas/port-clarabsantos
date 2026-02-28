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
        <div className="mt-6 skills-strip">
          <div className="skills-glass-card reveal reveal-delay-3">
            <div className="skills-marquee">
              <div className="skills-marquee-inner">
                {skills.map((skill, index) => (
                  <div key={`${skill.label}-a-${index}`} className="skills-icon">
                    <span className="skills-icon-emoji">{skill.icon}</span>
                    <span className="skills-icon-label">{skill.label}</span>
                  </div>
                ))}
                {skills.map((skill, index) => (
                  <div key={`${skill.label}-b-${index}`} className="skills-icon">
                    <span className="skills-icon-emoji">{skill.icon}</span>
                    <span className="skills-icon-label">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mentorias"
        className="reveal mt-16 border-t border-[#1e293b] pt-12 mentoria-section"
      >
        <div className="mentoria-layout">
          <div className="mentoria-copy">
            <div className="mentoria-hero-tag">Mentoria individual para acelerar sua carreira</div>
            <h2 className="mentoria-main-title">
              Transforme sua experiência em tecnologia em uma carreira de alto impacto
            </h2>
            <p className="mentoria-lead">
              Em poucas sessões, você sai com um{" "}
              <span className="mentoria-highlight">plano claro de evolução</span>, feedbacks
              sinceros sobre seu momento atual e{" "}
              <span className="mentoria-highlight-strong">
                estratégias práticas para conquistar as próximas oportunidades
              </span>
              .
            </p>

            <div className="mentoria-pill-grid">
              <div className="mentoria-pill">
                <span className="mentoria-pill-dot" />
                Foco em desenvolvedores backend em transição ou aceleração de carreira
              </div>
              <div className="mentoria-pill">
                <span className="mentoria-pill-dot" />
                Encontros online, objetivos definidos e ações concretas a cada sessão
              </div>
            </div>

            <div className="mentoria-benefits">
              <h3 className="mentoria-subtitle">Em cada mentoria você vai:</h3>
              <ul className="mentoria-benefits-list">
                <li>Mapear seus próximos passos na carreira com clareza e confiança</li>
                <li>Receber feedbacks técnicos e comportamentais alinhados ao mercado atual</li>
                <li>Organizar estudos, projetos e portfólio para se posicionar melhor</li>
                <li>Praticar entrevistas, storytelling profissional e abordagem com recrutadores</li>
              </ul>
            </div>
          </div>

          <div className="mentoria-plan reveal reveal-delay-3">
            <div className="mentoria-plan-header">
              <span className="mentoria-badge">Vagas limitadas</span>
              <h3>Mentoria 1:1 com Clara</h3>
              <p>
                Sessões personalizadas, focadas nos seus objetivos atuais e próximos desafios na
                área de tecnologia.
              </p>
            </div>

            <div className="mentoria-plan-body">
              <ul>
                <li>Encontro individual ao vivo (online)</li>
                <li>Roteiro personalizado após cada sessão</li>
                <li>Análise de currículo, LinkedIn ou portfólio</li>
                <li>Espaço para tirar dúvidas técnicas e de carreira</li>
              </ul>

              <div className="mentoria-plan-cta">
                <div className="mentoria-plan-note">
                  <span className="mentoria-spot">Melhor momento</span>
                  <p>Para quem quer dar o próximo passo com segurança, sem caminhar sozinho.</p>
                </div>

                <a
                  className="mentoria-cta-button group"
                  href="https://wa.link/pw5acd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mentoria-cta-glow" />
                  <span>Quero conversar sobre mentoria</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.172 12 8.222 7.05l1.414-1.414L16 11l-6.364 5.364-1.414-1.414z" />
                  </svg>
                </a>

                <p className="mentoria-disclaimer">
                  Resposta rápida e humana. Sem compromisso – alinhamos expectativas antes de
                  qualquer agendamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
