import { CVIcon, DownIcon, ExpIcon, HomeIcon, LinksIcon, ProjectsIcon } from "./icons";

export function setupNav(element: HTMLElement) {
  // only relevant before the md breakpoint - used to show/hide the nav menu

  if (!element) return;

  element.innerHTML = `
    <div id="nav-toggle">${DownIcon}</div>
    <ul id="nav-list" class="hidden flex-col fixed top-0 w-full mx-auto md:relative md:flex md:flex-row md:container md:h-full">
      <li class="nav-item"><a href="#about">${HomeIcon}<span>About</span></a></li>
      <li class="nav-item"><a href="#experience">${ExpIcon}<span>Experience</span></span></a></li>
      <li class="nav-item"><a href="#projects">${ProjectsIcon}<span>Projects</span></a></li>
      <li class="nav-item"><a href="#links">${LinksIcon}<span>Links</span></a></li>
      <li class="nav-item"><a href="/Nick_Petalas_CV.pdf" download="Nick_Petalas_CV.pdf">${CVIcon}<span>CV.pdf</span></a></li>
      <li class="nav-item"><button id="theme-button">🌞</button></li>
    </ul>
  `;

  const navList = document.querySelector("#nav-list");
  const toggle = document.querySelector("#nav-toggle")! as HTMLDivElement;

  const toggleNav = (hidden = true) => {
    window.requestAnimationFrame(() => {
      if (hidden) {
        hideNav();
        showToggle();
      } else {
        showNav();
        hideToggle();
      }
    });
  };

  const hideNav = () => {
    navList?.classList?.add("hidden");
    navList?.classList?.remove("flex");
  };

  const showNav = () => {
    navList?.classList?.remove("hidden");
    navList?.classList?.add("flex");
    console.log(navList?.classList);
  };

  const showToggle = () => {
    toggle?.classList?.remove("hidden");
    toggle?.classList?.add("nav-toggle");
  };

  const hideToggle = () => {
    toggle?.classList?.add("hidden");
    toggle?.classList?.remove("nav-toggle");
  };
  toggle.onclick = () => toggleNav(false);

  const listItems = navList?.children;
  for (let i = 0; i < (listItems?.length ?? 0); i++) {
    listItems?.[i]?.addEventListener("click", () => toggleNav(true));
  }

  const themeButton = document.querySelector("#theme-button")! as HTMLButtonElement;
  themeButton.onclick = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeButton.innerHTML = "🌞";
    } else {
      themeButton.innerHTML = "🌓";
    }
  };
}
