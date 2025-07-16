import { setupLinks } from "./contact.ts";
import { setupExperience } from "./employment.ts";
import { setupFooter } from "./footer.ts";
import { setupAbout } from "./intro.ts";
import { setupNav } from "./nav.ts";
import { setupProjects } from "./projects.ts";
// import { setupFAQ } from "./faq.ts"; // Commented out for now
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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

setupNav(document.querySelector<HTMLElement>("#nav")!);
setupAbout(document.querySelector<HTMLElement>("#about")!);
setupExperience(document.querySelector<HTMLElement>("#experience")!);
setupProjects(document.querySelector<HTMLElement>("#projects")!);
// setupFAQ(document.querySelector<HTMLElement>("#faq")!); // Commented out for now
setupLinks(document.querySelector<HTMLElement>("#links")!);
setupFooter(document.querySelector<HTMLElement>("#footer")!);
