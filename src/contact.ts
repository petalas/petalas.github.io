import { ArtgenIcon, CVIcon, EmailIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

export function setupLinks(element: HTMLElement) {
  if (!element) return;

  element.innerHTML = `
    <div class="contact-content">
      <div class="contact-header">
        <h2>Let's Connect</h2>
        <p class="contact-tagline">Available for new opportunities and collaborations.</p>
      </div>

      <div class="contact-main">
        <p>
          I'm actively seeking new opportunities and would love to hear from you. Whether you have a role that might be a good fit, want to collaborate on a project, or just want to say hello.
        </p>
        <div class="contact-buttons">
          <a href="mailto:webmasternikos@gmail.com" class="contact-cta">
            ${EmailIcon}
            <span>Send me an email</span>
          </a>
          <a href="/Nick_Petalas_CV.pdf" download="Nick_Petalas_CV.pdf" class="contact-cta">
            ${CVIcon}
            <span>Download CV (pdf)</span>
          </a>
        </div>
      </div>

      <div class="social-section">
        <h3>Connect & Follow</h3>
        <div class="social-links">
          <a href="https://github.com/petalas/" target="_blank" rel="noreferrer" class="social-link" title="GitHub">
            ${GithubIcon}
          </a>
          <a href="https://www.linkedin.com/in/petalas/" target="_blank" rel="noreferrer" class="social-link" title="LinkedIn">
            ${LinkedinIcon}
          </a>
          <a href="https://artgen.xyz/" target="_blank" rel="noreferrer" class="social-link" title="Artgen">
            ${ArtgenIcon}
          </a>
          <a href="https://www.instagram.com/petalas.dev/" target="_blank" rel="noreferrer" class="social-link" title="Instagram">
            ${InstagramIcon}
          </a>
        </div>
      </div>
    </div>
  `;
}
