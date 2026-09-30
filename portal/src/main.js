import "./style.css";

const units = [
  { number: "01", name: "Unit 1", path: "unit-1", projects: ["Project 1", "Project 2"] },
  { number: "02", name: "Unit 2", path: "unit-2", projects: ["Project 1", "Project 2"] },
  { number: "03", name: "Unit 3", path: "unit-3", projects: ["Project 1", "Project 2"] },
  { number: "04", name: "Unit 4", path: "unit-4", projects: ["Project 1", "Project 2"] },
  { number: "05", name: "Unit 5", path: "unit-5", projects: ["Project 1", "Project 2"] },
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="wordmark" href="/" aria-label="All Unit Projects home">
        <span class="wordmark-mark">W</span>
        <span>WEB PROJECTS</span>
      </a>
      <p class="topbar-note">STUDENT WORK <span>/</span> 2026</p>
    </header>

    <main>
      <section class="intro" aria-labelledby="page-title">
        <div class="intro-copy">
          <p class="eyebrow"><span class="live-dot"></span> PROJECT INDEX <span class="eyebrow-divider">/</span> 10 BUILDS</p>
          <h1 id="page-title">All unit projects.<br /><span>One address.</span></h1>
          <p class="intro-caption">Browse the work by unit and open any project directly.</p>
        </div>
        <label class="search-box">
          <span aria-hidden="true">⌕</span>
          <input id="project-search" type="search" placeholder="Find a unit or project" autocomplete="off" />
          <kbd>/</kbd>
        </label>
      </section>

      <div class="list-meta">
        <span id="result-count">10 projects</span>
        <span>FIVE UNITS <span class="meta-divider">/</span> TWO PROJECTS EACH</span>
      </div>

      <section id="unit-list" class="unit-list" aria-label="Projects by unit">
        ${units.map((unit) => `
          <section class="unit-section" data-unit="${unit.name.toLowerCase()}">
            <header class="unit-heading">
              <span class="unit-number">${unit.number}</span>
              <h2>${unit.name}</h2>
              <span class="unit-count">02 PROJECTS</span>
            </header>
            <div class="project-grid">
              ${unit.projects.map((project, index) => {
                const projectNumber = index + 1;
                const route = `/${unit.path}/project-${projectNumber}/`;
                return `
                  <a class="project-link" data-search="${unit.name} ${project}" href="${route}">
                    <span class="project-index">${unit.number}.${String(projectNumber).padStart(2, "0")}</span>
                    <span class="project-name">${project}</span>
                    <span class="project-open" aria-hidden="true">&#8599;</span>
                  </a>
                `;
              }).join("")}
            </div>
          </section>
        `).join("")}
        <p id="empty-state" class="empty-state" hidden>No matching projects.</p>
      </section>
    </main>

    <footer class="footer">
      <span>WEB PROJECTS <span class="footer-year">2026</span></span>
      <span>10 PROJECTS <span class="meta-divider">/</span> 1 DOMAIN</span>
    </footer>
  </div>
`;

const searchInput = document.querySelector("#project-search");
const projectLinks = [...document.querySelectorAll(".project-link")];
const unitSections = [...document.querySelectorAll(".unit-section")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  for (const link of projectLinks) {
    const isVisible = link.dataset.search.toLowerCase().includes(query);
    link.hidden = !isVisible;
    visibleCount += Number(isVisible);
  }

  for (const section of unitSections) {
    section.hidden = !section.querySelector(".project-link:not([hidden])");
  }

  resultCount.textContent = `${visibleCount} project${visibleCount === 1 ? "" : "s"}`;
  emptyState.hidden = visibleCount > 0;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});