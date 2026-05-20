"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { extraProjects, featuredProjects } from "@/data/projects";

const navItems = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre Mim" },
  { id: "projetos", label: "Projetos" },
  { id: "hard-skills", label: "Hard Skills" },
  { id: "soft-skills", label: "Soft Skills" },
  { id: "experiencia", label: "Experiência" },
  { id: "cursos", label: "Cursos" },
  { id: "contato", label: "Contato" },
];

const hardSkills = [
  { icon: "/images/icons/icons8-node-js-50.png", title: "Node.js", description: "Back-end rápido e escalável" },
  { icon: "/images/icons/icons8-arduino-50.png", title: "Arduino (C/C++)", description: "Automação e IoT" },
  { icon: "/images/icons/icons8-unidade-50.png", title: "Unity (C#)", description: "Desenvolvimento de jogos" },
  { icon: "/images/icons/icons8-frasco-50.png", title: "Flask", description: "APIs e sistemas web" },
  {
    iconGroup: ["/images/icons/icons8-javascript-48.png", "/images/icons/icons8-html-48.png"],
    title: "CSS/JS/HTML",
    description: "Desenvolvimento front-end",
  },
  { iconText: "⚡", title: "Eletrotécnica", description: "Projetos elétricos industriais e prediais" },
  { icon: "/images/icons/icons8-sql-50.png", title: "MySQL", description: "Banco de dados relacionais" },
  { icon: "/images/icons/icons8-git-48.png", title: "Git", description: "Controle de versão" },
];

const softSkills = [
  { icon: "💡", title: "Criatividade", description: "Soluções inovadoras para problemas complexos" },
  { icon: "👥", title: "Trabalho em Equipe", description: "Colaboração efetiva em projetos" },
  { icon: "⏰", title: "Organização", description: "Gestão eficiente de tempo e tarefas" },
  { icon: "📚", title: "Aprendizado Contínuo", description: "Sempre em busca de novos conhecimentos" },
  { icon: "🎯", title: "Foco", description: "Concentração em objetivos e resultados" },
  { icon: "🔍", title: "Atenção aos Detalhes", description: "Precisão na execução de projetos" },
];

const courses = [
  {
    icon: "/images/icons/icons8-laptop-coding-50.png",
    title: "Desenvolvimento de Sistemas",
    institution: "SENAI Civit",
    status: "Concluído",
  },
  { iconText: "⚡", title: "Técnico em Eletrotécnica", institution: "SENAI Civit", status: "Concluído" },
  {
    icon: "/images/icons/icons8-arduino-50.png",
    title: "Programação Arduino Básica",
    institution: "Módulo do Curso de Eletrotécnica",
    status: "Concluído",
  },
  {
    icon: "/images/icons/icons8-unidade-50.png",
    title: "Desenvolvimento de Jogos na Unity",
    institution: "Módulo do Curso de Desenvolvimento de Sistemas",
    status: "Em andamento",
  },
  {
    iconText: "🌐",
    title: "Desenvolvimento Web",
    institution: "Módulo do Curso de Desenvolvimento de Sistemas",
    status: "Em andamento",
  },
  {
    icon: "/images/icons/icons8-frasco-50.png",
    title: "Python & Flask",
    institution: "Módulo do Curso de Desenvolvimento de Sistemas",
    status: "Em andamento",
  },
];

const contacts = [
  {
    icon: "/images/icons/icons8-gmail-novo-48.png",
    title: "Email",
    description: "oliveira.daniel.030207@gmail.com",
    href: "mailto:oliveira.daniel.030207@gmail.com",
  },
  {
    icon: "/images/icons/icons8-linkedin-48.png",
    title: "LinkedIn",
    description: "linkedin.com/in/daniel-de-oliveira-souza",
    href: "https://linkedin.com/in/daniel-de-oliveira-souza",
  },
  {
    icon: "/images/icons/icons8-github-50.png",
    title: "GitHub",
    description: "github.com/daniel-oliveira-kirmse",
    href: "https://github.com/daniel-oliveira-kirmse",
  },
  {
    icon: "/images/icons/icons8-whatsapp-48.png",
    title: "WhatsApp",
    description: "(27) 99299-4348",
    href: "https://wa.me/5527992994348",
  },
];

function SectionHeading({ title, subtitle, white = false }) {
  return (
    <div className="mb-10 text-center md:mb-14">
      <h2
        data-animate="up"
        className={`font-display text-section-fluid uppercase ${white ? "text-white" : "text-white"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          data-animate="up"
          className={`mx-auto mt-4 max-w-4xl font-mono text-[1.15rem] uppercase tracking-[0.08em] text-white md:text-[1.5rem]`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function IconBlock({ icon, iconGroup, iconText, alt }) {
  if (iconGroup) {
    return (
      <div className="mb-5 flex items-center justify-center gap-2">
        {iconGroup.map((src) => (
          <Image key={src} src={src} alt={alt} width={50} height={50} className="h-12 w-12 object-contain" />
        ))}
      </div>
    );
  }

  if (icon) {
    return (
      <div className="mb-5 flex justify-center">
        <Image src={icon} alt={alt} width={50} height={50} className="h-12 w-12 object-contain" />
      </div>
    );
  }

  return <div className="mb-5 text-center text-5xl">{iconText}</div>;
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.41.21 2.46.1 2.72.64.73 1.03 1.65 1.03 2.78 0 3.97-2.35 4.84-4.59 5.09.36.32.69.95.69 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function ProjectLinks({ githubUrl }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent px-4 py-2 font-mono text-sm uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-background"
      >
        <GithubIcon />
        Repositório
      </a>
    </div>
  );
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingHidden, setLoadingHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const touchStartX = useRef(0);

  const activeProject = useMemo(() => featuredProjects[currentProject], [currentProject]);

  useEffect(() => {
    let finishTimer;
    const hideTimer = window.setTimeout(() => {
      setLoadingHidden(true);
      finishTimer = window.setTimeout(() => setIsLoading(false), 800);
    }, 3000);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");

          const staggerItems = entry.target.querySelectorAll("[data-stagger]");
          staggerItems.forEach((item, index) => {
            window.setTimeout(() => {
              item.classList.add("is-visible");
            }, index * 100);
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [showMoreProjects]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const offset = window.innerWidth < 1024 ? 84 : 96;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) < 50) {
      return;
    }

    if (deltaX < 0) {
      nextProject();
      return;
    }

    prevProject();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[linear-gradient(135deg,#1c1b17_0%,#282723_100%)] transition-all duration-800 ${loadingHidden ? "pointer-events-none opacity-0 invisible" : "opacity-100 visible"}`}
      >
        <div className="px-6 text-center">
          <span className="mb-6 block font-display text-[2.75rem] uppercase tracking-[0.06em] text-accent md:mb-8 md:text-[4rem]">
            Daniel Kirmse
          </span>
          <div className="mx-auto h-1 w-[220px] overflow-hidden rounded-full bg-accent/20 md:w-[300px]">
            <div className="h-full animate-[loadingProgress_3s_ease-in-out_forwards] rounded-full bg-[linear-gradient(90deg,#eb4604,#ff6b35)]" />
          </div>
        </div>
      </div>

      <header>
        <nav
          className={`fixed left-0 right-0 top-0 z-[1000] hidden border-b border-accent/10 transition-all duration-300 lg:block ${isScrolled ? "bg-background/95 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] backdrop-blur-[30px]" : "bg-background py-5 backdrop-blur-[10px]"}`}
        >
          <div className="mx-auto flex max-w-[1400px] items-center justify-center px-10">
            <ul className="flex items-center gap-10 font-mono text-base uppercase tracking-[0.08em]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-white transition hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[linear-gradient(90deg,#eb4604,#ff6b35)] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav className="fixed left-0 right-0 top-0 z-[1000] border-b border-accent/10 bg-background/95 backdrop-blur-[14px] lg:hidden">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4">
            <span className="font-display text-[1.65rem] uppercase text-accent">Daniel Kirmse</span>
            <button
              aria-expanded={isMenuOpen}
              aria-label="Abrir menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <span className={`h-[3px] w-6 rounded bg-accent transition ${isMenuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
              <span className={`h-[3px] w-6 rounded bg-accent transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[3px] w-6 rounded bg-accent transition ${isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
            </button>
          </div>

          <div
            className={`overflow-hidden border-t border-accent/10 bg-background/95 transition-all duration-300 ${isMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-accent/10 last:border-b-0">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full px-5 py-4 text-left font-mono text-[1.1rem] uppercase tracking-[0.08em] text-white transition hover:bg-accent/10 hover:pl-8 hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className={`${isLoading ? "pointer-events-none" : ""}`}>
        <section
          id="home"
          className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col justify-center gap-12 px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36 lg:flex-row lg:items-center lg:gap-8"
        >
          <div data-animate="left" className="flex-1 text-center lg:pr-14 lg:text-left">
            <div className="typing-name inline-block max-w-full align-top">
              <h1 className="font-display text-display-fluid uppercase">
                Daniel
                <br />
                Kirmse
              </h1>
            </div>
            <p className="mt-6 font-mono text-[1.3rem] uppercase tracking-[0.12em] text-white/90 md:text-[1.6rem] lg:text-[2rem]">
              Desenvolvedor Web & Técnico em Eletrotécnica
            </p>
          </div>

          <div data-animate="right" className="relative flex flex-1 items-center justify-center">
            <div className="relative flex h-[340px] w-full max-w-[460px] items-center justify-center overflow-hidden bg-accent md:h-[420px] lg:h-[600px]">
              <div className="absolute right-0 top-0 h-[180px] w-[180px] bg-secondary md:h-[240px] md:w-[240px] lg:h-[300px] lg:w-[300px]" />
              <Image
                src="/images/fotos/daniel-kirmse.jpg"
                alt="Foto de Daniel Kirmse"
                width={400}
                height={500}
                priority
                className="relative z-10 h-[250px] w-[190px] rounded object-cover transition duration-500 hover:scale-105 hover:rotate-2 hover:brightness-110 hover:contrast-125 md:h-[340px] md:w-[260px] lg:h-[500px] lg:w-[400px]"
              />
              <div className="light-radial" />
            </div>
          </div>
        </section>

        <section id="sobre" className="section-shell">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-10 lg:flex-row lg:gap-14">
            <div data-animate="up" className="flex-[1.2]">
              <h2 className="font-display text-section-fluid uppercase">Sobre Mim</h2>
              <p className="mb-8 mt-4 max-w-3xl font-mono text-[1.2rem] uppercase tracking-[0.08em] text-muted md:text-[1.6rem]">
                Criar soluções em tecnologia com foco em eficiência e impacto real.
              </p>

              <div className="mb-10 grid gap-5 md:grid-cols-2">
                {[
                  {
                    title: "Quem sou",
                    body: [
                      "Meu nome é Daniel Kirmse, sou estudante de desenvolvimento de sistemas e técnico em eletrotécnica.",
                      "Estou aprimorando minhas habilidades e construindo projetos em back-end, front-end e automação.",
                    ],
                  },
                  {
                    title: "O que faço",
                    body: [
                      "Desenvolvo aplicações web com Node.js, Python (Flask) e MySQL.",
                      "Também crio automações e protótipos com Arduino e projetos com foco em eletrônica.",
                    ],
                  },
                ].map((item) => (
                  <article key={item.title} data-stagger className="surface-card hover-lift p-5 md:p-6">
                    <h3 className="mb-3 font-mono text-[1.35rem] uppercase md:text-[1.45rem]">{item.title}</h3>
                    {item.body.map((paragraph) => (
                      <p key={paragraph} className="mb-2 font-mono text-[1.05rem] leading-[1.2] text-white md:text-[1.15rem]">
                        {paragraph}
                      </p>
                    ))}
                  </article>
                ))}
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {[
                  ["2022", "Início no SESI"],
                  ["2024", "Aprendiz Técnico"],
                  ["2025", "Foco em Back-End"],
                ].map(([year, label]) => (
                  <div key={year} data-stagger className="relative bg-background px-4 py-3 text-center md:flex-1">
                    <div className="absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 bg-accent md:block" />
                    <div className="relative z-10 inline-block bg-background px-3">
                      <div className="font-display text-[1.7rem] uppercase">{year}</div>
                      <div className="font-mono text-[1rem] uppercase text-accent">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-animate="right" className="flex flex-1 justify-center">
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-[10px] bg-accent px-5 pb-6 pt-8 md:px-8 md:pb-8 md:pt-10">
                <div className="pointer-events-none absolute left-4 top-0 font-quote text-[10rem] font-bold leading-none text-background md:left-6 md:text-[20rem]">
                  "
                </div>
                <div className="relative z-10 mb-5 flex justify-end">
                  <Image
                    src="/images/fotos/daniel-kirmse-2.jpg"
                    alt="Foto de Daniel Kirmse em retrato"
                    width={200}
                    height={200}
                    className="h-[150px] w-[150px] rounded-lg object-cover md:h-[200px] md:w-[200px]"
                  />
                </div>
                <div className="relative z-10 pr-0 font-mono text-[1.15rem] leading-[1.2] text-white md:pr-5 md:text-[1.45rem]">
                  <p className="mb-3">
                    Sempre fui apaixonado por tecnologia e soluções criativas. Hoje, uno o conhecimento em
                    eletrotécnica com o desenvolvimento de software para criar projetos funcionais e com impacto real.
                  </p>
                  <p className="mb-3">
                    Tenho experiência com Node.js, Flask, MySQL e Arduino, e estou em constante evolução, buscando
                    desafios que me façam crescer profissionalmente.
                  </p>
                  <p>
                    Meu objetivo é contribuir em equipes que valorizem aprendizado contínuo, qualidade de código e
                    entrega de valor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section-shell">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading
              title="Projetos"
              subtitle="Alguns dos trabalhos que desenvolvi na área de tecnologia."
            />

            <div data-animate="up" className="mx-auto max-w-[1200px]">
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="surface-card overflow-hidden shadow-[0_10px_30px_-10px_rgba(235,70,4,0.3)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <Image
                      key={activeProject.id}
                      src={activeProject.image}
                      alt={activeProject.title}
                      width={800}
                      height={600}
                      className="h-[250px] w-full object-cover transition duration-500 hover:scale-110 hover:brightness-110 hover:contrast-110 md:h-[320px] lg:h-[400px]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                    <h3 className="font-display text-[2rem] uppercase leading-none text-accent md:text-[2.2rem] lg:text-[2.5rem]">
                      {activeProject.title}
                    </h3>
                    <p className="mt-4 font-mono text-[1rem] leading-[1.5] text-muted md:text-[1.15rem]">
                      {activeProject.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {activeProject.tech.map((item) => (
                        <span
                          key={item}
                          className="relative overflow-hidden rounded-full bg-accent px-4 py-2 font-mono text-[0.8rem] uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_5px_15px_rgba(235,70,4,0.4)] md:text-[0.9rem]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <ProjectLinks githubUrl={activeProject.githubUrl} />
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                <button
                  onClick={prevProject}
                  aria-label="Projeto anterior"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/20 bg-secondary/80 text-accent shadow-[0_10px_30px_-10px_rgba(235,70,4,0.3)] transition hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-white md:h-[60px] md:w-[60px]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                <div className="flex items-center gap-3">
                  {featuredProjects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setCurrentProject(index)}
                      aria-label={`Ir para ${project.title}`}
                      className={`h-3 w-3 rounded-full transition ${index === currentProject ? "bg-accent" : "bg-[#666666]"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextProject}
                  aria-label="Próximo projeto"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/20 bg-secondary/80 text-accent shadow-[0_10px_30px_-10px_rgba(235,70,4,0.3)] transition hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-white md:h-[60px] md:w-[60px]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="mt-5 text-center font-mono text-[1.05rem] text-muted">
                {currentProject + 1} / {featuredProjects.length}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowMoreProjects((prev) => !prev)}
                  className="rounded-full border border-accent px-6 py-3 font-mono text-sm uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-accent"
                >
                  {showMoreProjects ? "Ocultar Projetos" : "Mais Projetos"}
                </button>
              </div>

              {showMoreProjects ? (
                <div data-animate="up" className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {extraProjects.map((project) => (
                    <article key={project.id} className="surface-card hover-lift overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={420}
                        className="h-[220px] w-full object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-display text-[1.9rem] uppercase leading-none text-accent">{project.title}</h3>
                        <p className="mt-3 font-mono text-[1rem] leading-[1.45] text-muted">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-accent px-3 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <ProjectLinks githubUrl={project.githubUrl} />
                      </div>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section id="hard-skills" className="section-shell">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading title="Hard Skills" />
            <div data-animate="up" className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {hardSkills.map((skill) => (
                <article key={skill.title} data-stagger className="surface-card hover-lift border-t-4 border-accent p-8 text-center">
                  <IconBlock {...skill} alt={skill.title} />
                  <h3 className="font-display text-[1.7rem] uppercase">{skill.title}</h3>
                  <p className="mt-3 font-mono text-[1rem] text-muted md:text-[1.15rem]">{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="soft-skills" className="section-shell">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading title="Soft Skills" />
            <div data-animate="up" className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {softSkills.map((skill) => (
                <article
                  key={skill.title}
                  data-stagger
                  className="surface-card hover-lift rounded-[28px] border-[3px] border-accent p-8 text-center md:rounded-[40px]"
                >
                  <div className="mb-5 text-center text-5xl">{skill.icon}</div>
                  <h3 className="font-display text-[1.7rem] uppercase">{skill.title}</h3>
                  <p className="mt-3 font-mono text-[1rem] text-muted md:text-[1.15rem]">{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-shell">
          <div className="mx-auto max-w-[1000px]">
            <SectionHeading title="Experiência" />
            <div data-animate="up" className="relative pl-5 md:pl-10">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-accent md:left-5" />
              <article className="flex flex-col gap-4 md:flex-row md:gap-8">
                <div className="font-display text-[1.3rem] uppercase text-accent md:min-w-[120px] md:pt-4">2024 - Atual</div>
                <div className="surface-card hover-lift flex-1 p-6 md:p-8">
                  <div className="mb-3 text-3xl">🏢</div>
                  <h3 className="font-display text-[1.8rem] uppercase">Aprendiz Técnico</h3>
                  <h4 className="mt-2 font-mono text-[1.25rem] uppercase text-accent">Construtora Canal</h4>
                  <p className="mt-4 font-mono text-[1rem] leading-[1.45] text-muted md:text-[1.15rem]">
                    Atuação em desenvolvimento de sistemas e participação no curso de Desenvolvimento de Sistemas pelo
                    SENAI Civit.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="cursos" className="section-shell">
          <div className="mx-auto max-w-[1400px]">
            <SectionHeading title="Cursos" />
            <div data-animate="up" className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <article key={course.title} data-stagger className="surface-card hover-lift border-b-4 border-accent p-8 text-center">
                  <IconBlock {...course} alt={course.title} />
                  <h3 className="font-display text-[1.7rem] uppercase">{course.title}</h3>
                  <p className="mt-2 font-mono text-[1rem] text-muted md:text-[1.15rem]">{course.institution}</p>
                  <span className="mt-4 inline-block rounded-full bg-accent px-4 py-1.5 font-mono text-sm uppercase tracking-[0.08em] text-white">
                    {course.status}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-accent px-6 py-16 md:px-10 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(235,70,4,0.9)_0%,rgba(235,70,4,0.7)_50%,rgba(235,70,4,1)_100%)]" />
          <div className="relative z-10 mx-auto max-w-[1200px] text-center">
            <SectionHeading
              title="Contato"
              subtitle="Vamos conversar sobre tecnologia e oportunidades!"
              white
            />
            <div data-animate="up" className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {contacts.map((contact) => (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  data-stagger
                  className="shimmer relative block overflow-hidden rounded-xl border-2 border-white/20 bg-white/10 p-8 text-white backdrop-blur-[10px] transition hover:-translate-y-2 hover:scale-[1.03] hover:bg-white/15"
                >
                  <div className="relative z-10">
                    <div className="mb-5 flex justify-center">
                      <Image src={contact.icon} alt={contact.title} width={48} height={48} className="h-12 w-12 object-contain" />
                    </div>
                    <h3 className="font-display text-[1.7rem] uppercase">{contact.title}</h3>
                    <p className="mt-2 font-mono text-[1rem] text-white/95">{contact.description}</p>
                  </div>
                </a>
              ))}
            </div>
            <p data-animate="up" className="font-mono text-[1.15rem] uppercase tracking-[0.08em] text-white md:text-[1.35rem]">
              Interessado em colaborar? Entre em contato!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
