import * as React from "react";
import ArtgenIcon from "../icons/artgen";
import EmailIcon from "../icons/email";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";

const Links = (props) => {
    return (
        <div {...props}>
            <p>My inbox is always open but please keep in mind I am not currently looking for a new role.</p>
            <p>Let me know if you have suggestions for improvements or if you'd like to collaborate on any of my side projects.</p>
            <div className="container flex flex-grow mx-auto justify-center items-center text-primary-400 mt-2 link-bar" >
                <a href="mailto:webmasternikos@gmail.com" target="_blank" rel="noreferrer" className="link-item" >
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
            </div>
        </div>
    );
}

export default Links;