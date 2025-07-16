import { CVIcon, DownIcon, ExpIcon, HomeIcon, LinksIcon, MoonIcon, ProjectsIcon, SunIcon } from "./icons";

export function setupNav(element: HTMLElement) {
  // only relevant before the md breakpoint - used to show/hide the nav menu

  if (!element) return;

  element.innerHTML = `
    <div class="nav-container">
      <div class="nav-brand">
        <span class="brand-text">petalas.dev</span>
      </div>
      <ul id="nav-list" class="nav-list hidden flex-col fixed top-16 left-0 right-0 bg-latte-crust dark:bg-mocha-crust shadow-lg border-b border-latte-surface0 dark:border-mocha-surface0 md:relative md:flex md:flex-row md:h-auto md:top-0 md:left-0 md:right-0 md:bg-transparent md:dark:bg-transparent md:shadow-none md:border-none">
        <li class="nav-item"><a href="#about">${HomeIcon}<span>About</span></a></li>
        <li class="nav-item"><a href="#experience">${ExpIcon}<span>Experience</span></a></li>
        <li class="nav-item"><a href="#projects">${ProjectsIcon}<span>Projects</span></a></li>
        <li class="nav-item"><a href="#links">${LinksIcon}<span>Links</span></a></li>
        <li class="nav-item"><a href="/Nick_Petalas_CV.pdf" download="Nick_Petalas_CV.pdf">${CVIcon}<span>CV.pdf</span></a></li>
      </ul>
      <div class="mobile-controls">
        <div class="theme-toggle-container">
          <button id="theme-button" class="theme-toggle-btn" aria-label="Toggle dark mode">${SunIcon}</button>
        </div>
        <div id="nav-toggle" class="nav-toggle-button">${DownIcon}</div>
      </div>
    </div>
  `;

  const navList = document.querySelector("#nav-list");
  const toggle = document.querySelector("#nav-toggle")! as HTMLDivElement;

  const toggleNav = () => {
    window.requestAnimationFrame(() => {
      const isHidden = navList?.classList.contains("hidden");
      if (isHidden) {
        showNav();
      } else {
        hideNav();
      }
    });
  };

  const hideNav = () => {
    navList?.classList?.add("hidden");
    navList?.classList?.remove("flex");
    toggle?.classList?.remove("rotate-180");
  };

  const showNav = () => {
    navList?.classList?.remove("hidden");
    navList?.classList?.add("flex");
    toggle?.classList?.add("rotate-180");
  };

  toggle.onclick = () => toggleNav();

  const listItems = navList?.children;
  for (let i = 0; i < (listItems?.length ?? 0); i++) {
    listItems?.[i]?.addEventListener("click", () => hideNav());
  }

  const themeButton = document.querySelector("#theme-button")! as HTMLButtonElement;
  themeButton.onclick = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeButton.innerHTML = SunIcon;
    } else {
      themeButton.innerHTML = MoonIcon;
    }
  };
}
