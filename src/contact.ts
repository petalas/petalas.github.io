import { ArtgenIcon, EmailIcon, CVIcon, InstagramIcon, LinkedinIcon, GithubIcon } from "./icons";

export function setupLinks(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    <p>My inbox is always open and I will be looking for a new role soon!</p>
    <p>
      Let me know if you have suggestions for improvements or if you'd like to collaborate on any of my projects (more
      on github).
    </p>
    <div class="link-bar">
      <a href="mailto:webmasternikos@gmail.com" target="_blank" rel="noreferrer" class="link-item">
        ${EmailIcon}
      </a>
      <a href="https://github.com/petalas/" target="_blank" rel="noreferrer" class="link-item">
        ${GithubIcon}
      </a>
      <a href="https://www.linkedin.com/in/petalas/" target="_blank" rel="noreferrer" class="link-item">
        ${LinkedinIcon}
      </a>
      <a href="https://artgen.xyz/" target="_blank" rel="noreferrer" class="link-item">
        ${ArtgenIcon}
      </a>
      <a href="https://www.instagram.com/petalas.dev/" target="_blank" rel="noreferrer" class="link-item">
        ${InstagramIcon}
      </a>
      <a
        href="/Nick_Petalas_CV.pdf"
        download="Nick_Petalas_CV.pdf"
        target="_blank"
        rel="noreferrer"
        class="link-item"
      >
        ${CVIcon}
      </a>
    </div>
  `;
}
