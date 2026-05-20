export const featuredProjects = [
  {
    id: "focus-app",
    title: "Focus App",
    kind: "app",
    description:
      "Aplicativo desktop para Windows focado em deep work, com timer de foco, bloqueador de distrações, dashboard de produtividade, histórico exportável e integração com Spotify.",
    image: "/images/projets-images/eletronica-renovo.png",
    tech: [".NET 8", "WPF", "SQLite", "MVVM", "Spotify API"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse/focus-app",
    gallerySlug: "focus-app",
  },
  {
    id: "analise-corredor-yolo",
    title: "Análise de Corredor com YOLO",
    kind: "site",
    description:
      "Aplicação web para monitoramento inteligente de corredores com YOLOv8 Pose, rastreio em tempo real, análise biomecânica, exportação em Excel e geração automática de evidências em vídeo.",
    image: "/images/projets-images/atras-de-voce.png",
    tech: ["Python", "Flask", "YOLOv8", "OpenCV", "Openpyxl"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse/analise-corredor-yolo",
    siteUrl: "https://huggingface.co/spaces/Dkirmse/analise-corredor-yolo",
  },
  {
    id: "webapp-stock-system",
    title: "WebApp Stock System",
    kind: "site",
    description:
      "Sistema web de controle de estoque industrial com autenticação JWT, dashboard, CRUD de produtos, movimentações e frontend em Next.js integrado a API Express.",
    image: "/images/projets-images/eletronica-renovo.png",
    tech: ["Next.js", "React", "Node.js", "Express", "SQLite", "Tailwind"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse/webapp-stock-system",
    siteUrl: null,
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    kind: "site",
    description:
      "Aplicação e-commerce publicada na Vercel, construída com stack moderna front-end e foco em experiência visual e navegação fluida.",
    image: "/images/projets-images/e-commerce-tenis.png",
    tech: ["TypeScript", "React", "Next.js", "Vercel"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse/e-commerce",
    siteUrl: null,
  },
];

export const extraProjects = [
  {
    id: "jogo-3d-terror",
    title: "Jogo 3D Terror",
    kind: "game",
    hideGithub: true,
    description:
      "Projeto em Unity com ambientação de terror, perseguição por inimigo e foco em tensão, movimentação e construção de atmosfera.",
    image: "/images/projets-images/atras-de-voce.png",
    tech: ["Unity", "C#", "Game Animator"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse",
  },
  {
    id: "api-rest-flask",
    title: "API REST com Flask",
    kind: "site",
    description:
      "API desenvolvida em Python Flask e SQLAlchemy para cadastro e estruturação de dados de um e-commerce de tênis.",
    image: "/images/projets-images/e-commerce-tenis.png",
    tech: ["Flask", "Python", "SQLAlchemy"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse",
    siteUrl: null,
  },
  {
    id: "robo-industrial",
    title: "Robô Industrial",
    kind: "hardware",
    hideGithub: true,
    description:
      "Protótipo com braço e garra robótica para fins industriais, desenvolvido com Arduino e alimentação por energia solar.",
    image: "/images/projets-images/projeto-arduino.jpg",
    tech: ["Arduino", "Eletrônica", "IoT"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse",
    gallerySlug: "robo-industrial",
  },
  {
    id: "portfolio-original",
    title: "Portfólio Original",
    kind: "site",
    hideGithub: true,
    description:
      "Versão original do portfólio em HTML, CSS e JavaScript puro, publicada na Vercel e usada como base visual desta migração.",
    image: "/images/projets-images/eletronica-renovo.png",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/daniel-oliveira-kirmse/portf-lio",
    siteUrl: null,
  },
];
