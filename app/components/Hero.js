export default function Hero() {
  return (
    <section id="sobre" className="reveal reveal-visible grid items-center gap-10 py-6 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative">
          <img
            src="/perfil.jpeg"
            alt="Foto de perfil"
            className="avatar relative z-10 h-64 w-64 rounded-2xl object-cover"
          />
          <div className="avatar-ring"></div>
        </div>
      </div>
      <div className="space-y-5 order-2 lg:order-1">
        <span className="reveal reveal-delay-1 flex w-max mx-auto sm:mx-0 items-center rounded-full border border-[#1e40af] bg-[#1e293b] px-3 py-1 text-xs font-semibold text-[#93c5fd]">
          Desenvolvedora Back-End
        </span>
        <h1 className="reveal reveal-delay-2 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Construo APIs robustas e escaláveis em Java
        </h1>
        <p className="reveal reveal-delay-3 text-base text-[#93c5fd] sm:text-lg">
          Desenvolvedora Java Backend com experiência em desenvolvimento de aplicações web utilizando Spring Boot, Hibernate e RESTful APIs. Conhecimento em bancos de dados SQL e práticas de versionamento com Git. Habilidade em trabalhar em equipe, solucionar problemas técnicos e entregar soluções de qualidade.
        </p>
        <div className="reveal reveal-delay-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-3 py-1 text-xs text-[#93c5fd]">Java</span>
          <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-3 py-1 text-xs text-[#93c5fd]">Spring Boot</span>
          <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-3 py-1 text-xs text-[#93c5fd]">Docker</span>
          <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-3 py-1 text-xs text-[#93c5fd]">Git</span>
          <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-3 py-1 text-xs text-[#93c5fd]">API REST</span>
          <span className="rounded-full border border-[#1e40af] bg-[#1e293b] px-3 py-1 text-xs text-[#93c5fd]">SQL</span>
        </div>
      </div>
    </section>
  );
}
