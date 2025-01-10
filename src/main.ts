import { setupLinks } from "./contact.ts";
import { setupExperience } from "./employment.ts";
import { setupFooter } from "./footer.ts";
import { setupAbout } from "./intro.ts";
import { setupNav } from "./nav.ts";
import { setupProjects } from "./projects.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="wrapper">
    <nav id="nav"></nav>
    <div class="main">
      <section id="about"></section>
      <h2 class="text-lg p-2 text-latte-green dark:text-mocha-green">Where I've worked</h2>
      <section id="experience"></section>
      <h2 class="text-lg p-2 text-latte-green dark:text-mocha-green">Projects</h2>
      <section id="projects"></section>
      <h2 class="text-lg p-2 text-latte-green dark:text-mocha-green">Get in touch</h2>
      <section id="links"></section>
    </div>
    <footer id="footer"></footer>
  </div>
`;

setupNav(document.querySelector<HTMLElement>("#nav")!);
setupAbout(document.querySelector<HTMLElement>("#about")!);
setupExperience(document.querySelector<HTMLElement>("#experience")!);
setupProjects(document.querySelector<HTMLElement>("#projects")!);
setupLinks(document.querySelector<HTMLElement>("#links")!);
setupFooter(document.querySelector<HTMLElement>("#footer")!);
