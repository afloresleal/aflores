const projects = [
  { title: "Human API", file: "human.png", color: "#5b3f7f" },
  { title: "Iguana Tulum", file: "iguana.png", color: "#acac68" },
  { title: "Dogit", file: "dogit.png", color: "#e2aa43" },
  { title: "Heimdal Industry", file: "heimdal.png", color: "#215fc7" },
  { title: "Chef Oropeza Keto", file: "keto.png", color: "#7f923f", size: "short" },
  { title: "Claro - La red de la velocidad", file: "claro.png", color: "#be080c" },
  { title: "Viajes Palacio", file: "palacio.png", color: "#f3bc09" },
  { title: "Los Cabos", file: "cabos.png", color: "#ef7900" },
  { title: "Papalote Museo del Niño", file: "papalote.png", color: "#1185cf" },
  { title: "Las Estacas", file: "estacas.png", color: "#005c42" },
  { title: "México Travel Channel", file: "mtc.png", color: "#bf1940" },
  { title: "Birkenstock", file: "birkenstock.png", color: "#2a78b5" }
];

let activeProjectIndex = 0;
let lightboxBackdrop = null;
let lightboxImage = null;
let lightboxFrame = null;
let lightboxTitle = null;
let lightboxDialog = null;
let prefersReducedMotion = false;
let isClosingLightbox = false;

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = "";
  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    if (project.size === "short") card.classList.add("is-short");
    card.style.background = project.color;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Open ${project.title}`);

    const img = document.createElement("img");
    img.src = `assets/images/${project.file}`;
    img.alt = project.title;
    img.loading = "lazy";

    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });

    card.appendChild(img);
    grid.appendChild(card);
  });
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
  lightboxDialog.setAttribute("aria-label", "Project preview");

  const closeBtn = document.createElement("button");
  closeBtn.className = "lightbox-close";
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Close preview");
  closeBtn.textContent = "x";

  const prevBtn = document.createElement("button");
  prevBtn.className = "lightbox-nav lightbox-prev";
  prevBtn.type = "button";
  prevBtn.setAttribute("aria-label", "Previous image");
  prevBtn.textContent = "<";

  const nextBtn = document.createElement("button");
  nextBtn.className = "lightbox-nav lightbox-next";
  nextBtn.type = "button";
  nextBtn.setAttribute("aria-label", "Next image");
  nextBtn.textContent = ">";

  lightboxImage = document.createElement("img");
  lightboxImage.className = "lightbox-image";
  lightboxImage.alt = "Project preview";

  lightboxTitle = document.createElement("h3");
  lightboxTitle.className = "lightbox-title";

  lightboxFrame = document.createElement("div");
  lightboxFrame.className = "lightbox-frame";

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => changeProject(-1));
  nextBtn.addEventListener("click", () => changeProject(1));

  lightboxBackdrop.addEventListener("click", (event) => {
    if (event.target === lightboxBackdrop) closeLightbox();
  });

  lightboxFrame.appendChild(lightboxImage);
  lightboxDialog.appendChild(closeBtn);
  lightboxDialog.appendChild(prevBtn);
  lightboxDialog.appendChild(nextBtn);
  lightboxDialog.appendChild(lightboxTitle);
  lightboxDialog.appendChild(lightboxFrame);
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
  isClosingLightbox = false;
  lightboxBackdrop.classList.add("is-open");
  lightboxBackdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");

  if (!window.gsap || prefersReducedMotion) return;
  window.gsap.killTweensOf([lightboxBackdrop, lightboxDialog]);
  window.gsap.fromTo(
    lightboxBackdrop,
    { opacity: 0 },
    { opacity: 1, duration: 0.35, ease: "power2.out" }
  );
  window.gsap.fromTo(
    lightboxDialog,
    { autoAlpha: 0, y: 36, scale: 0.96 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
  );
}

function closeLightbox() {
  if (!lightboxBackdrop || isClosingLightbox) return;
  if (!window.gsap || prefersReducedMotion) {
    lightboxBackdrop.classList.remove("is-open");
    lightboxBackdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    return;
  }

  isClosingLightbox = true;
  window.gsap.killTweensOf([lightboxBackdrop, lightboxDialog]);
  window.gsap.to(lightboxDialog, {
    autoAlpha: 0,
    y: 22,
    scale: 0.98,
    duration: 0.24,
    ease: "power2.in"
  });
  window.gsap.to(lightboxBackdrop, {
    opacity: 0,
    duration: 0.24,
    ease: "power2.in",
    onComplete: () => {
      lightboxBackdrop.classList.remove("is-open");
      lightboxBackdrop.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-open");
      window.gsap.set(lightboxBackdrop, { clearProps: "opacity" });
      window.gsap.set(lightboxDialog, { clearProps: "opacity,visibility,transform" });
      isClosingLightbox = false;
    }
  });
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

function setupLanguageSwitch() {
  const select = document.querySelector("select[data-page-switch]");
  if (!select) return;

  select.addEventListener("change", (event) => {
    const page = event.target.value;
    if (!page) return;
    window.location.href = page;
  });
}


function setupBackToTop() {
  const button = document.getElementById("backToTop");
  const experience = document.querySelector(".experience");
  if (!button || !experience) return;

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        button.classList.toggle("is-visible", entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    observer.observe(experience);
    return;
  }

  const onScroll = () => {
    const rect = experience.getBoundingClientRect();
    const visible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
    button.classList.toggle("is-visible", visible);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initScrollAnimations() {
  if (!window.gsap) return;

  if (prefersReducedMotion) return;

  const gsap = window.gsap;
  const hasScrollTrigger = Boolean(window.ScrollTrigger);
  if (hasScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  gsap.from(".nav", {
    autoAlpha: 0,
    y: -24,
    duration: 0.75,
    ease: "power3.out"
  });

  gsap.from(".hero-intro", {
    autoAlpha: 0,
    y: 34,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.14
  });

  if (!hasScrollTrigger) return;

  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      autoAlpha: 0,
      y: 52,
      duration: 0.72,
      ease: "power3.out",
      delay: (i % 2) * 0.08,
      scrollTrigger: {
        trigger: card,
        start: "top 92%",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.from(".experience", {
    autoAlpha: 0,
    y: 56,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".experience",
      start: "top 92%",
      toggleActions: "play none none reverse"
    }
  });
}

prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
renderProjects();
setupLanguageSwitch();
setupBackToTop();
initScrollAnimations();
