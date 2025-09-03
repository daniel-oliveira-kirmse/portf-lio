// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loadingScreen")
    loadingScreen.classList.add("hidden")

    // Iniciar animações após loading
    setTimeout(() => {
      initScrollAnimations()
      initNavbarEffects()
      initTypingEffect()
    }, 800)
  }, 3000)
})

// Sistema de animações no scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")

        // Animações staggered para elementos filhos
        const staggerElements = entry.target.querySelectorAll(".stagger-animation")
        staggerElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("visible")
          }, index * 100)
        })
      }
    })
  }, observerOptions)

  // Observar todos os elementos com animação
  document.querySelectorAll(".animate-on-scroll, .fade-in-up, .fade-in-left, .fade-in-right").forEach((el) => {
    observer.observe(el)
  })
}

// Efeitos da navbar
function initNavbarEffects() {
  const navbar = document.getElementById("navbar")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    // Smooth scroll para links da navegação
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = link.getAttribute("href")
        const targetSection = document.querySelector(targetId)

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })

    lastScrollY = currentScrollY
  })
}

// Efeito de typing no título
function initTypingEffect() {
  const title = document.querySelector(".Home-name")
  if (title) {
    title.style.animation = "typing 3s steps(40, end), blink-caret 0.75s step-end infinite"
  }
}

// Parallax effect suave
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".light")

  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `rotate(45deg) translateY(${scrolled * speed}px)`
  })
})

// Micro-interações nos cards
document.addEventListener("DOMContentLoaded", () => {
  // Efeito de hover nos skill cards
  const skillCards = document.querySelectorAll(".skill-card, .soft-skill-card, .curso-card")

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })

  // Efeito nos tech tags
  const techTags = document.querySelectorAll(".tech-tag")

  techTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "translateY(-2px) scale(1.05)"
    })

    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Sistema de carrossel melhorado com animações
const projects = [
  {
    title: "Jogo 3D Terror",
    description: "Desenvolvimento de jogo 3D de Terror em Unity com personagem seguido por um monstro.",
    image: "images/projets-images/atras-de-voce.png",
    tech: ["Unity", "C#", "Game Animator"],
  },
  {
    title: "API REST com Flask",
    description: "API desenvolvida em Python Flask e SQLAlchemy para sistema de cadastro de um E-Commerce de Tênis.",
    image: "images/projets-images/e-commerce-tenis.png",
    tech: ["Flask", "Python", "SQLAlchemy"],
  },
  {
    title: "Site de Gestão Comercial",
    description: "Aplicação web desenvolvida com Node.js e Express para gestão comercial de uma loja de Eletrônica.",
    image: "images/projets-images/eletronica-renovo.png",
    tech: ["Node.js", "Express", "MySQL"],
  },
  {
    title: "Robô Industrial",
    description:
      "Robô com Braço e Garra Robótica para fins Industriais, desenvolvido com Arduino e Carregado com Energia Solar.",
    image: "images/projets-images/projeto-arduino.jpg",
    tech: ["Arduino", "C++", "IoT"],
  },
]

let currentProject = 0

// Função para atualizar o projeto com animações
function updateProject() {
  const project = projects[currentProject]
  const projectDisplay = document.getElementById("projectDisplay")

  // Animação de saída
  projectDisplay.style.opacity = "0"
  projectDisplay.style.transform = "translateX(-20px)"

  setTimeout(() => {
    document.getElementById("currentProjectImage").src = project.image
    document.getElementById("currentProjectImage").alt = project.title
    document.getElementById("currentProjectTitle").textContent = project.title
    document.getElementById("currentProjectDesc").textContent = project.description
    document.getElementById("projectCounter").textContent = `${currentProject + 1} / ${projects.length}`

    // Atualizar tecnologias com animação
    const techContainer = document.getElementById("currentProjectTech")
    techContainer.innerHTML = ""
    project.tech.forEach((tech, index) => {
      setTimeout(() => {
        const span = document.createElement("span")
        span.className = "tech-tag"
        span.textContent = tech
        span.style.opacity = "0"
        span.style.transform = "translateY(10px)"
        techContainer.appendChild(span)

        // Animar entrada do tag
        setTimeout(() => {
          span.style.transition = "all 0.3s ease"
          span.style.opacity = "1"
          span.style.transform = "translateY(0)"
        }, 50)
      }, index * 100)
    })

    // Atualizar indicadores
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentProject)
    })

    // Animação de entrada
    projectDisplay.style.transition = "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    projectDisplay.style.opacity = "1"
    projectDisplay.style.transform = "translateX(0)"
  }, 250)
}

// Próximo projeto com animação
function nextProject() {
  currentProject = (currentProject + 1) % projects.length
  updateProject()
}

// Projeto anterior com animação
function prevProject() {
  currentProject = (currentProject - 1 + projects.length) % projects.length
  updateProject()
}

// Event listeners melhorados
document.getElementById("nextBtn").addEventListener("click", nextProject)
document.getElementById("prevBtn").addEventListener("click", prevProject)

// Indicadores com animação
document.querySelectorAll(".indicator").forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    if (currentProject !== index) {
      currentProject = index
      updateProject()
    }
  })
})

// Auto-play do carrossel (opcional)
let autoPlayInterval

function startAutoPlay() {
  autoPlayInterval = setInterval(nextProject, 5000)
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval)
}

// Pausar auto-play quando hover no carrossel
const carouselWrapper = document.querySelector(".carousel-wrapper")
if (carouselWrapper) {
  carouselWrapper.addEventListener("mouseenter", stopAutoPlay)
  carouselWrapper.addEventListener("mouseleave", startAutoPlay)
}

// Inicializar
updateProject()
// startAutoPlay(); // Descomente para ativar auto-play
