const PROJECTS = [
  {
    title: "Enterprise React Design System",
    company: "Dayforce",
    desc: "Built and architected components for a new Design System (UI React Component Library) used by feature teams, improving developer productivity and saving thousands of hours. Wrote accessible code adhering to WCAG AA standards and developed internal tools for Design System contributors.",
    tags: ["React", "TypeScript", "a11y", "WCAG", "CI/CD"],
    category: "frontend",
    icon: "bi-palette",
    link: "#",
  },
  {
    title: "Master Data Automation",
    company: "Chubb Fire and Security",
    desc: "Reduced 90% of manual efforts to maintain master data by implementing macros. Wrote SQL scripts to pull and analyze data from the timesheet application, streamlining maintenance and reporting workflows.",
    tags: ["SQL", "Macros", "Automation", "Data Analysis"],
    category: "backend",
    icon: "bi-gear",
    link: "#",
  },
  {
    title: "SAP HCM Spin-Off Projects",
    company: "ADP",
    desc: "Technical point of contact for US and Canada spin-off projects of HP, Delphi Technologies, and UTC. Handled SAP HCM support and upgrade projects involving business process analysis, configuration, customization, and production support.",
    tags: ["SAP HCM", "Configuration", "Business Analysis", "Testing"],
    category: "fullstack",
    icon: "bi-people",
    link: "#",
  },
  {
    title: "Cloud Automation — Python",
    company: "IBM",
    desc: "Automated marketing application package installations on Cloud Platform (Pure Unice Patterns) using Python, reducing manual deployment steps and improving reliability of cloud provisioning workflows.",
    tags: ["Python", "Cloud", "Automation", "DevOps"],
    category: "backend",
    icon: "bi-cloud-arrow-up",
    link: "#",
  },
  {
    title: "Mobile App Development Training",
    company: "IBM",
    desc: "Part of the academic initiative team at IBM, trained students across multiple colleges on mobile application development using IBM Worklight platform.",
    tags: ["IBM Worklight", "Mobile Dev", "Training"],
    category: "fullstack",
    icon: "bi-phone",
    link: "#",
  },
  {
    title: "Airbnb Listings Explorer",
    company: "Northeastern University",
    desc: "Academic project that dynamically fetches and renders Airbnb SF listings using the Fetch API. Features include search, filtering by amenities, responsive card layouts, and creative hover animations — all in vanilla JavaScript.",
    tags: ["JavaScript", "Fetch API", "CSS3", "HTML5"],
    category: "academic",
    icon: "bi-house-door",
    link: "#",
  },
  {
    title: "Personal Portfolio Website",
    company: "Northeastern University",
    desc: "This website! A multi-page portfolio built with vanilla HTML5, CSS3, ES6 modules, and Bootstrap 5. Features include scroll animations, project filtering, and an interactive AI chatbot page.",
    tags: ["HTML5", "CSS3", "ES6", "Bootstrap 5"],
    category: "academic",
    icon: "bi-person-workspace",
    link: "#",
  },
  {
    title: "Heart Disease Prediction",
    company: "Lambton College",
    desc: "Used Machine Learning models including Logistic Regression, Random Forest Classifier, and K-Fold cross-validation to predict the presence of heart disease from patient data with high accuracy.",
    tags: [
      "Python",
      "Machine Learning",
      "Logistic Regression",
      "Random Forest",
    ],
    category: "academic",
    icon: "bi-heart-pulse",
    link: "#",
  },
  {
    title: "Customer Purchase Strategy Identification",
    company: "Lambton College",
    desc: "Analyzed a dataset of 440 customers' yearly contributions to different products. Divided customers into clusters using the K-Means algorithm to identify purchase strategies and behavioral patterns.",
    tags: ["Python", "K-Means", "Data Analysis", "Clustering"],
    category: "academic",
    icon: "bi-diagram-3",
    link: "#",
  },
];

const renderProjects = (projects) => {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  projects.forEach((project, index) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.style.animationDelay = `${index * 0.08}s`;

    const tagsHtml = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");

    col.innerHTML = `
      <article class="project-card fade-in visible">
        <div class="project-card-header">
          <div class="project-card-icon">
            <i class="bi ${project.icon}"></i>
          </div>
          <span class="timeline-date">${project.company}</span>
        </div>
        <div class="project-card-body">
          <h2 class="project-card-title">${project.title}</h2>
          <p class="project-card-desc">${project.desc}</p>
          <div class="project-tags">${tagsHtml}</div>
        </div>
      </article>
    `;

    grid.appendChild(col);
  });
};

const initFilters = () => {
  const filterBar = document.getElementById("filter-bar");
  if (!filterBar) return;

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    // Update active state
    filterBar
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active-filter"));
    btn.classList.add("active-filter");

    const category = btn.dataset.filter;
    const filtered =
      category === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === category);

    renderProjects(filtered);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(PROJECTS);
  initFilters();
});
