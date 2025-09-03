// Dados dos projetos
const projects = [
  {
    title: 'Jogo 3D Terror',
    description: 'Desenvolvimento de jogo 3D de Terror em Unity com personagem seguido por um monstro.',
    image: 'images/projets-images/atras-de-voce.png',
    tech: ['Unity', 'C#', 'Game Animator']
  },
  {
    title: 'API REST com Flask',
    description: 'API desenvolvida em Python Flask e SQLAlchemy para sistema de cadastro de um E-Commerce de Tênis.',
    image: 'images/projets-images/e-commerce-tenis.png',
    tech: ['Flask', 'Python', 'SQLAlchemy']
  },
  {
    title: 'Site de Gestão Comercial',
    description: 'Aplicação web desenvolvida com Node.js e Express para gestão comercial de uma loja de Eletrônica.',
    image: 'images/projets-images/eletronica-renovo.png',
    tech: ['Node.js', 'Express', 'MySQL']
  },
  {
    title: 'Robô Industrial',
    description: 'Robô com Braço e Garra Robótica para fins Industriais, desenvolvido com Arduino e Carregado com Energia Solar.',
    image: 'images/projets-images/projeto-arduino.jpg',
    tech: ['Arduino', 'C++', 'IoT']
  }
];

let currentProject = 0;

// Função para atualizar o projeto exibido
function updateProject() {
  const project = projects[currentProject];
  
  document.getElementById('currentProjectImage').src = project.image;
  document.getElementById('currentProjectImage').alt = project.title;
  document.getElementById('currentProjectTitle').textContent = project.title;
  document.getElementById('currentProjectDesc').textContent = project.description;
  document.getElementById('projectCounter').textContent = `${currentProject + 1} / ${projects.length}`;
  
  // Atualizar tecnologias
  const techContainer = document.getElementById('currentProjectTech');
  techContainer.innerHTML = '';
  project.tech.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = tech;
    techContainer.appendChild(span);
  });
  
  // Atualizar indicadores
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentProject);
  });
}

// Próximo projeto
function nextProject() {
  currentProject = (currentProject + 1) % projects.length;
  updateProject();
}

// Projeto anterior
function prevProject() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  updateProject();
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextProject);
document.getElementById('prevBtn').addEventListener('click', prevProject);

// Indicadores
document.querySelectorAll('.indicator').forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentProject = index;
    updateProject();
  });
});

// Inicializar
updateProject();
