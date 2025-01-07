import * as React from "react";
import ArtgenIcon from "../icons/artgen";
import EmailIcon from "../icons/email";
import GithubIcon from "../icons/github";
import InstagramIcon from "../icons/instagram";
import LinkedinIcon from "../icons/linkedin";
import CVIcon from "../icons/cv";

const Links = (props) => {
  return (
    <div {...props}>
      <p>My inbox is always open and I will be looking for a new role soon!</p>
      <p>
        Let me know if you have suggestions for improvements or if you'd like to collaborate on any of my projects (more
        on github).
      </p>
      <div className="container flex flex-grow mx-auto justify-center items-center text-primary-400 mt-2 link-bar">
        <a href="mailto:webmasternikos@gmail.com" target="_blank" rel="noreferrer" className="link-item">
          <EmailIcon />
        </a>

        <a href="https://github.com/petalas/" target="_blank" rel="noreferrer" className="link-item">
          <GithubIcon />
        </a>

        <a href="https://www.linkedin.com/in/petalas/" target="_blank" rel="noreferrer" className="link-item">
          <LinkedinIcon />
        </a>

        <a href="https://artgen.xyz/" target="_blank" rel="noreferrer" className="link-item">
          <ArtgenIcon />
        </a>

        <a href="https://www.instagram.com/petalas.dev/" target="_blank" rel="noreferrer" className="link-item">
          <InstagramIcon />
        </a>

        <a
          href="/Nick_Petalas_CV.pdf"
          download="Nick_Petalas_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="link-item"
        >
          <CVIcon />
        </a>
      </div>
    </div>
  );
};

export default Links;
