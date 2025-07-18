import { setupLinks } from "./contact.ts";
import { setupExperience } from "./employment.ts";
import { setupFooter } from "./footer.ts";
import { setupAbout } from "./intro.ts";
import { setupNav } from "./nav.ts";
import { setupProjects } from "./projects.ts";
// import { setupFAQ } from "./faq.ts"; // Commented out for now
import "./style.css";

function initializeApp() {
  const appElement = document.querySelector<HTMLDivElement>("#app");
  if (!appElement) {
    console.error("App element not found");
    return;
  }

  appElement.innerHTML = `
    <div class="wrapper">
      <a href="#main-content" class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-latte-blue dark:bg-mocha-blue text-white p-2 z-50">Skip to main content</a>
      <header>
        <nav id="nav" role="navigation" aria-label="Main navigation"></nav>
      </header>
      <main id="main-content" class="main" role="main">
        <section id="about" aria-labelledby="about-heading"></section>
        <h2 id="experience-heading" class="text-xl md:text-2xl p-2 text-latte-green dark:text-mocha-green font-semibold">Where I've worked</h2>
        <section id="experience" aria-labelledby="experience-heading" role="region"></section>
        <h2 id="projects-heading" class="text-xl md:text-2xl p-2 text-latte-green dark:text-mocha-green font-semibold">Projects</h2>
        <section id="projects" aria-labelledby="projects-heading" role="region"></section>
        <h2 id="contact-heading" class="text-xl md:text-2xl p-2 text-latte-green dark:text-mocha-green font-semibold">Get in touch</h2>
        <section id="links" aria-labelledby="contact-heading" role="region"></section>
      </main>
      <footer id="footer" role="contentinfo"></footer>
    </div>
  `;

  const navElement = document.querySelector<HTMLElement>("#nav");
  const aboutElement = document.querySelector<HTMLElement>("#about");
  const experienceElement = document.querySelector<HTMLElement>("#experience");
  const projectsElement = document.querySelector<HTMLElement>("#projects");
  const linksElement = document.querySelector<HTMLElement>("#links");
  const footerElement = document.querySelector<HTMLElement>("#footer");

  if (navElement) setupNav(navElement);
  if (aboutElement) setupAbout(aboutElement);
  if (experienceElement) setupExperience(experienceElement);
  if (projectsElement) setupProjects(projectsElement);
  if (linksElement) setupLinks(linksElement);
  if (footerElement) setupFooter(footerElement);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
