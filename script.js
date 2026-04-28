const projects = [
  {
    title: "Listo App",
    file: "listo_app.png",
    color: "#1D2FFF",
    category: "platform",
    featured: false,
    summary: {
      en: "Personal productivity app focused on fast capture, calm task organization, and a cleaner daily planning flow.",
      es: "App de productividad personal enfocada en captura rápida, organización tranquila de tareas y una planeación diaria más clara."
    },
    role: { en: "Product design, UI, product direction", es: "Diseño de producto, UI, dirección de producto" },
    outcome: { en: "A focused product experience built around speed, clarity, and repeated use.", es: "Una experiencia de producto enfocada en rapidez, claridad y uso recurrente." }
  },
  {
    title: "Listo Site",
    file: "listo_site.png",
    color: "#DADDFF",
    category: "marketing",
    featured: false,
    summary: {
      en: "Marketing site for Listo, designed to explain the product quickly and create a direct path from interest to download.",
      es: "Sitio de marketing para Listo, diseñado para explicar el producto rápido y crear un camino directo del interés a la descarga."
    },
    role: { en: "Web design, positioning, visual system", es: "Diseño web, posicionamiento, sistema visual" },
    outcome: { en: "A concise product story with consistent visuals across app and web.", es: "Una historia de producto concisa con consistencia visual entre app y web." }
  },
  {
    title: "Human API",
    file: "human.png",
    color: "#5b3f7f",
    category: "product",
    featured: true,
    summary: {
      en: "Healthcare product work for complex data access flows, where trust, clarity, and usability are essential.",
      es: "Trabajo de producto en salud para flujos complejos de acceso a datos, donde confianza, claridad y usabilidad son esenciales."
    },
    role: { en: "Product design, UX/UI, systems thinking", es: "Diseño de producto, UX/UI, pensamiento sistémico" },
    outcome: { en: "Clearer product flows for sensitive healthcare interactions.", es: "Flujos de producto más claros para interacciones sensibles de salud." }
  },
  {
    title: "Iguana Tulum",
    file: "iguana.png",
    color: "#acac68",
    category: "marketing",
    featured: false,
    summary: {
      en: "Hospitality and destination experience with an emphasis on visual atmosphere, discoverability, and conversion.",
      es: "Experiencia de hospitalidad y destino con énfasis en atmósfera visual, descubrimiento y conversión."
    },
    role: { en: "UX/UI and visual design", es: "UX/UI y diseño visual" },
    outcome: { en: "A more polished digital presence for travel planning and brand discovery.", es: "Una presencia digital más pulida para planeación de viaje y descubrimiento de marca." }
  },
  {
    title: "Dogit",
    file: "dogit.png",
    color: "#e2aa43",
    category: "product",
    featured: false,
    summary: {
      en: "Product interface work for a pet-focused experience that needed approachable navigation and clear content hierarchy.",
      es: "Interfaz de producto para una experiencia enfocada en mascotas que necesitaba navegación amigable y jerarquía clara."
    },
    role: { en: "UX/UI design", es: "Diseño UX/UI" },
    outcome: { en: "A friendlier interface structure for product exploration.", es: "Una estructura de interfaz más amigable para explorar el producto." }
  },
  {
    title: "Heimdal Industry",
    file: "heimdal.png",
    color: "#215fc7",
    category: "platform",
    featured: false,
    summary: {
      en: "Industrial platform interface shaped around technical credibility, structured information, and clear service pathways.",
      es: "Interfaz de plataforma industrial orientada a credibilidad técnica, información estructurada y rutas claras de servicio."
    },
    role: { en: "Platform UX/UI", es: "UX/UI de plataforma" },
    outcome: { en: "A clearer digital experience for a technical B2B audience.", es: "Una experiencia digital más clara para una audiencia B2B técnica." }
  },
  {
    title: "Chef Oropeza Keto",
    file: "keto.png",
    color: "#7f923f",
    category: "cro",
    featured: false,
    summary: {
      en: "Conversion-focused experience for a food and wellness offer, balancing content, trust, and purchase motivation.",
      es: "Experiencia enfocada en conversión para una oferta de food & wellness, equilibrando contenido, confianza y motivación de compra."
    },
    role: { en: "CRO consulting and UI design", es: "Consultoría CRO y diseño UI" },
    outcome: { en: "A more focused landing experience for decision-making.", es: "Una landing más enfocada para facilitar la decisión." }
  },
  {
    title: "Claro - La red de la velocidad",
    file: "claro.png",
    color: "#be080c",
    category: "marketing",
    featured: true,
    summary: {
      en: "Campaign experience for a telecom brand, translating a speed-led message into a strong digital interaction.",
      es: "Experiencia de campaña para una marca de telecom, traduciendo un mensaje centrado en velocidad a una interacción digital sólida."
    },
    role: { en: "Digital campaign UX/UI", es: "UX/UI para campaña digital" },
    outcome: { en: "A high-impact campaign interface aligned with brand and message.", es: "Una interfaz de campaña de alto impacto alineada con marca y mensaje." }
  },
  {
    title: "Viajes Palacio",
    file: "palacio.png",
    color: "#f3bc09",
    category: "cro",
    featured: true,
    summary: {
      en: "Travel commerce experience focused on clearer browsing, stronger offer presentation, and conversion-oriented journeys.",
      es: "Experiencia de travel commerce enfocada en exploración clara, mejor presentación de ofertas y journeys orientados a conversión."
    },
    role: { en: "CRO, UX/UI, ecommerce optimization", es: "CRO, UX/UI, optimización ecommerce" },
    outcome: { en: "Improved structure for comparing destinations and moving toward purchase.", es: "Mejor estructura para comparar destinos y avanzar hacia compra." }
  },
  {
    title: "Los Cabos",
    file: "cabos.png",
    color: "#ef7900",
    category: "marketing",
    featured: false,
    summary: {
      en: "Destination marketing work designed to present travel inspiration with a cleaner and more memorable visual system.",
      es: "Trabajo de marketing turístico para presentar inspiración de viaje con un sistema visual más claro y memorable."
    },
    role: { en: "Digital design and UX", es: "Diseño digital y UX" },
    outcome: { en: "A stronger destination presence for exploration and discovery.", es: "Una presencia de destino más fuerte para exploración y descubrimiento." }
  },
  {
    title: "Papalote Museo del Niño",
    file: "papalote.png",
    color: "#1185cf",
    category: "product",
    featured: false,
    summary: {
      en: "Family and education experience where playful visual design needed to stay usable for parents and visitors.",
      es: "Experiencia familiar y educativa donde el diseño visual lúdico debía mantenerse usable para familias y visitantes."
    },
    role: { en: "UX/UI and digital design", es: "UX/UI y diseño digital" },
    outcome: { en: "A more accessible path to understand activities and plan a visit.", es: "Un camino más accesible para entender actividades y planear una visita." }
  },
  {
    title: "Las Estacas",
    file: "estacas.png",
    color: "#005c42",
    category: "platform",
    featured: false,
    summary: {
      en: "Tourism platform experience for a natural park, organizing information around planning, booking, and discovery.",
      es: "Experiencia de plataforma turística para un parque natural, organizando información alrededor de planeación, reserva y descubrimiento."
    },
    role: { en: "UX/UI and information architecture", es: "UX/UI y arquitectura de información" },
    outcome: { en: "A clearer experience for visitors preparing their trip.", es: "Una experiencia más clara para visitantes que preparan su viaje." }
  },
  {
    title: "México Travel Channel",
    file: "mtc.png",
    color: "#bf1940",
    category: "marketing",
    featured: false,
    summary: {
      en: "Travel media interface work for browsing destination content, editorial material, and tourism inspiration.",
      es: "Interfaz para medio de viajes enfocada en navegar destinos, contenido editorial e inspiración turística."
    },
    role: { en: "Digital product and content UX", es: "Producto digital y UX de contenido" },
    outcome: { en: "A more organized content experience for travel discovery.", es: "Una experiencia de contenido más organizada para descubrir viajes." }
  },
  {
    title: "Birkenstock",
    file: "birkenstock.png",
    color: "#2a78b5",
    category: "product",
    featured: false,
    summary: {
      en: "Retail product experience balancing brand expression, catalog exploration, and practical shopping flows.",
      es: "Experiencia retail que equilibra expresión de marca, exploración de catálogo y flujos prácticos de compra."
    },
    role: { en: "Ecommerce UX/UI", es: "UX/UI ecommerce" },
    outcome: { en: "A clearer product browsing experience for a recognizable retail brand.", es: "Una experiencia de navegación de producto más clara para una marca retail reconocible." }
  },
  {
    title: "Martí",
    file: "marti.png",
    color: "#ECECEC",
    category: "product",
    featured: false,
    summary: {
      en: "Sports retail work focused on catalog clarity, promotion visibility, and ecommerce usability.",
      es: "Trabajo de retail deportivo enfocado en claridad de catálogo, visibilidad promocional y usabilidad ecommerce."
    },
    role: { en: "Ecommerce UX/UI", es: "UX/UI ecommerce" },
    outcome: { en: "A more usable shopping experience for sports products and promotions.", es: "Una experiencia de compra más usable para productos deportivos y promociones." }
  },
  {
    title: "El sabor del Mundial",
    file: "sabor_mundial.png",
    color: "#D5007F",
    category: "marketing",
    featured: false,
    summary: {
      en: "Seasonal campaign experience connecting food, sports culture, and digital participation.",
      es: "Experiencia de campaña temporal conectando comida, cultura deportiva y participación digital."
    },
    role: { en: "Campaign UX/UI and visual design", es: "UX/UI de campaña y diseño visual" },
    outcome: { en: "A campaign presence designed for recognition and engagement.", es: "Una presencia de campaña diseñada para reconocimiento y engagement." }
  }
];

const isSpanish = document.documentElement.lang.startsWith("es");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mobileQuery = window.matchMedia("(max-width: 640px)");
const assetBase = window.AF_ASSET_BASE || "assets/images/";

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
  outcome: isSpanish ? "Resultado" : "Outcome",
  showMore: isSpanish ? "Ver más proyectos" : "View more work",
  showLess: isSpanish ? "Ver menos" : "View less"
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
let isWorkExpanded = !mobileQuery.matches;

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
  media.setAttribute("aria-label", project.title);

  const img = document.createElement("img");
  img.src = `${assetBase}${project.file}`;
  img.alt = project.title;
  img.loading = "lazy";
  img.decoding = "async";
  img.width = 1600;
  img.height = 1200;

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
  caseSummary.textContent = project.summary[isSpanish ? "es" : "en"];

  const meta = document.createElement("ul");
  meta.className = "work-card-meta";
  meta.innerHTML = `
    <li><strong>${copy.role}:</strong> ${project.role[isSpanish ? "es" : "en"]}</li>
    <li><strong>${copy.outcome}:</strong> ${project.outcome[isSpanish ? "es" : "en"]}</li>
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
  card.setAttribute("aria-label", project.title);

  const img = document.createElement("img");
  img.src = `${assetBase}${project.file}`;
  img.alt = project.title;
  img.loading = "lazy";
  img.decoding = "async";
  img.width = 1600;
  img.height = 1200;

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
    const visibleProjects = mobileQuery.matches && !isWorkExpanded ? projects.slice(0, 6) : projects;
    visibleProjects.forEach((project, index) => {
      grid.appendChild(createLegacyCard(project, index));
    });
    renderProjectRevealControl(grid, projects.length, visibleProjects.length);
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

function renderProjectRevealControl(grid, totalCount, visibleCount) {
  let actions = document.getElementById("projectGridActions");

  if (!mobileQuery.matches || visibleCount >= totalCount) {
    if (actions) actions.remove();
    return;
  }

  if (!actions) {
    actions = document.createElement("div");
    actions.id = "projectGridActions";
    actions.className = "project-grid-actions";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "af-btn-ghost";
    button.addEventListener("click", () => {
      isWorkExpanded = true;
      renderProjects();
    });

    actions.appendChild(button);
    grid.insertAdjacentElement("afterend", actions);
  }

  actions.classList.add("is-visible");
  actions.querySelector("button").textContent = copy.showMore;
}

function setupWorkResponsiveRender() {
  const handleChange = () => {
    isWorkExpanded = !mobileQuery.matches;
    renderProjects();
  };

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", handleChange);
  } else if (typeof mobileQuery.addListener === "function") {
    mobileQuery.addListener(handleChange);
  }
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
  lightboxImage.decoding = "async";
  lightboxImage.width = 1600;
  lightboxImage.height = 1200;

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
  lightboxImage.src = `${assetBase}${project.file}`;
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

function setupHeaderScrollState() {
  const nav = document.querySelector(".af-nav");
  if (!nav) return;

  const toggle = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
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
setupWorkResponsiveRender();
setupHeaderScrollState();
setupBackToTop();
setupRevealAnimations();
