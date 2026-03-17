const projects = [
  { title: "Human API", file: "human.png", color: "#5b3f7f", category: "product", featured: true },
  { title: "Iguana Tulum", file: "iguana.png", color: "#acac68", category: "marketing", featured: false },
  { title: "Dogit", file: "dogit.png", color: "#e2aa43", category: "product", featured: false },
  { title: "Heimdal Industry", file: "heimdal.png", color: "#215fc7", category: "platform", featured: false },
  { title: "Chef Oropeza Keto", file: "keto.png", color: "#7f923f", category: "cro", featured: false },
  { title: "Claro - La red de la velocidad", file: "claro.png", color: "#be080c", category: "marketing", featured: true },
  { title: "Viajes Palacio", file: "palacio.png", color: "#f3bc09", category: "cro", featured: true },
  { title: "Los Cabos", file: "cabos.png", color: "#ef7900", category: "marketing", featured: false },
  { title: "Papalote Museo del Niño", file: "papalote.png", color: "#1185cf", category: "product", featured: false },
  { title: "Las Estacas", file: "estacas.png", color: "#005c42", category: "platform", featured: false },
  { title: "México Travel Channel", file: "mtc.png", color: "#bf1940", category: "marketing", featured: false },
  { title: "Birkenstock", file: "birkenstock.png", color: "#2a78b5", category: "product", featured: false }
];

const isSpanish = document.documentElement.lang.startsWith("es");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const copy = {
  open: isSpanish ? "Abrir" : "Open",
  closePreview: isSpanish ? "Cerrar preview" : "Close preview",
  previousImage: isSpanish ? "Imagen anterior" : "Previous image",
  nextImage: isSpanish ? "Imagen siguiente" : "Next image",
  projectPreview: isSpanish ? "Vista de proyecto" : "Project preview",
  preview: isSpanish ? "Preview" : "Preview",
  requestCase: isSpanish ? "Solicitar case study" : "Request case study",
  caseSummary: isSpanish ? "Caso" : "Case",
  role: isSpanish ? "Rol" : "Role",
  outcome: isSpanish ? "Resultado" : "Outcome"
};

const categoryLabels = {
  all: isSpanish ? "Todos" : "All",
  product: "Product",
  cro: "CRO",
  marketing: isSpanish ? "Marketing" : "Marketing",
  platform: isSpanish ? "Platform" : "Platform"
};

let activeProjectIndex = 0;
let activeCategory = "all";
let lightboxBackdrop = null;
let lightboxImage = null;
let lightboxFrame = null;
let lightboxTitle = null;
let lightboxDialog = null;

function getFilteredProjects() {
  return projects
    .map((project, index) => ({ ...project, index }))
    .filter((project) => activeCategory === "all" || project.category === activeCategory);
}

function createProjectMedia(project, index) {
  const media = document.createElement("button");
  media.className = "project-media";
  media.type = "button";
  media.style.background = project.color;
  media.setAttribute("aria-label", `${copy.open} ${project.title}`);

  const img = document.createElement("img");
  img.src = `assets/images/${project.file}`;
  img.alt = project.title;
  img.loading = "lazy";

  const label = document.createElement("span");
  label.className = "project-label";
  label.textContent = project.title;

  media.addEventListener("click", () => openLightbox(index));

  media.append(img, label);
  return media;
}

function createWorkCard(project) {
  const card = document.createElement("article");
  card.className = "work-card";

  const media = createProjectMedia(project, project.index);

  const body = document.createElement("div");
  body.className = "work-card-body";

  const category = document.createElement("p");
  category.className = "work-card-category";
  category.textContent = categoryLabels[project.category] || project.category;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const caseSummary = document.createElement("p");
  caseSummary.className = "work-card-summary";
  caseSummary.textContent = `${copy.caseSummary}: [CASE STUDY]`;

  const meta = document.createElement("ul");
  meta.className = "work-card-meta";
  meta.innerHTML = `
    <li><strong>${copy.role}:</strong> [ROLE]</li>
    <li><strong>${copy.outcome}:</strong> [RESULT]</li>
  `;

  const actions = document.createElement("div");
  actions.className = "work-card-actions";

  const previewBtn = document.createElement("button");
  previewBtn.type = "button";
  previewBtn.className = "btn btn-ghost btn-sm";
  previewBtn.textContent = copy.preview;
  previewBtn.addEventListener("click", () => openLightbox(project.index));

  const caseLink = document.createElement("a");
  caseLink.className = "btn btn-link";
  caseLink.href = "#contact";
  caseLink.textContent = copy.requestCase;

  actions.append(previewBtn, caseLink);
  body.append(category, title, caseSummary, meta, actions);
  card.append(media, body);

  return card;
}

function createLegacyCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.style.background = project.color;
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${copy.open} ${project.title}`);

  const img = document.createElement("img");
  img.src = `assets/images/${project.file}`;
  img.alt = project.title;
  img.loading = "lazy";

  const label = document.createElement("span");
  label.className = "project-label";
  label.textContent = project.title;

  card.addEventListener("click", () => openLightbox(index));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(index);
    }
  });

  card.append(img, label);
  return card;
}

function renderFilters() {
  const filterContainer = document.getElementById("projectFilters");
  if (!filterContainer) return;

  const categories = ["all", ...new Set(projects.map((project) => project.category))];
  filterContainer.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    if (activeCategory === category) button.classList.add("is-active");
    button.setAttribute("aria-pressed", String(activeCategory === category));
    button.textContent = categoryLabels[category] || category;

    button.addEventListener("click", () => {
      activeCategory = category;
      renderProjects();
    });

    filterContainer.appendChild(button);
  });
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  const featuredGrid = document.getElementById("featuredProjects");
  const hasStructuredWork = Boolean(featuredGrid && document.getElementById("projectFilters"));

  if (!hasStructuredWork) {
    grid.innerHTML = "";
    projects.forEach((project, index) => {
      grid.appendChild(createLegacyCard(project, index));
    });
    return;
  }

  const filteredProjects = getFilteredProjects();
  const featuredProjects = filteredProjects.filter((project) => project.featured).slice(0, 3);
  const regularProjects = filteredProjects.filter(
    (project) => !featuredProjects.some((featured) => featured.index === project.index)
  );

  featuredGrid.innerHTML = "";
  grid.innerHTML = "";

  featuredProjects.forEach((project) => {
    const card = createWorkCard(project);
    card.classList.add("is-featured");
    featuredGrid.appendChild(card);
  });

  regularProjects.forEach((project) => {
    grid.appendChild(createWorkCard(project));
  });

  renderFilters();
}

function ensureLightbox() {
  if (lightboxBackdrop) return;

  lightboxBackdrop = document.createElement("div");
  lightboxBackdrop.className = "lightbox";
  lightboxBackdrop.setAttribute("aria-hidden", "true");

  lightboxDialog = document.createElement("div");
  lightboxDialog.className = "lightbox-dialog";
  lightboxDialog.setAttribute("role", "dialog");
  lightboxDialog.setAttribute("aria-modal", "true");
  lightboxDialog.setAttribute("aria-label", copy.projectPreview);

  const closeBtn = document.createElement("button");
  closeBtn.className = "lightbox-close";
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", copy.closePreview);
  closeBtn.textContent = "×";

  const prevBtn = document.createElement("button");
  prevBtn.className = "lightbox-nav lightbox-prev";
  prevBtn.type = "button";
  prevBtn.setAttribute("aria-label", copy.previousImage);
  prevBtn.textContent = "‹";

  const nextBtn = document.createElement("button");
  nextBtn.className = "lightbox-nav lightbox-next";
  nextBtn.type = "button";
  nextBtn.setAttribute("aria-label", copy.nextImage);
  nextBtn.textContent = "›";

  lightboxTitle = document.createElement("h3");
  lightboxTitle.className = "lightbox-title";

  lightboxImage = document.createElement("img");
  lightboxImage.className = "lightbox-image";

  lightboxFrame = document.createElement("div");
  lightboxFrame.className = "lightbox-frame";

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => changeProject(-1));
  nextBtn.addEventListener("click", () => changeProject(1));

  lightboxBackdrop.addEventListener("click", (event) => {
    if (event.target === lightboxBackdrop) closeLightbox();
  });

  lightboxFrame.appendChild(lightboxImage);
  lightboxDialog.append(closeBtn, prevBtn, nextBtn, lightboxTitle, lightboxFrame);
  lightboxBackdrop.appendChild(lightboxDialog);
  document.body.appendChild(lightboxBackdrop);

  document.addEventListener("keydown", (event) => {
    if (!lightboxBackdrop.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") changeProject(-1);
    if (event.key === "ArrowRight") changeProject(1);
  });
}

function openLightbox(index) {
  ensureLightbox();
  activeProjectIndex = index;
  updateLightboxImage();

  lightboxBackdrop.classList.add("is-open");
  lightboxBackdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  if (!lightboxBackdrop) return;

  lightboxBackdrop.classList.remove("is-open");
  lightboxBackdrop.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function changeProject(direction) {
  activeProjectIndex = (activeProjectIndex + direction + projects.length) % projects.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  if (!lightboxImage || !lightboxFrame || !lightboxTitle) return;

  const project = projects[activeProjectIndex];
  lightboxImage.src = `assets/images/${project.file}`;
  lightboxImage.alt = project.title;
  lightboxTitle.textContent = project.title;
  lightboxFrame.style.backgroundColor = project.color;
}

function setupBackToTop() {
  const button = document.getElementById("backToTop");
  const target = document.getElementById("work");
  if (!button || !target) return;

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const toggle = () => {
    const rect = target.getBoundingClientRect();
    button.classList.toggle("is-visible", rect.top < -120);
  };

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
}

function setupRevealAnimations() {
  if (prefersReducedMotion) return;

  const revealNodes = document.querySelectorAll(".section, .site-footer");
  if (!revealNodes.length) return;

  revealNodes.forEach((node) => node.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

renderProjects();
setupBackToTop();
setupRevealAnimations();
