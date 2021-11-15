import * as React from "react";
import HomeIcon from "../icons/home";

const Links = (props) => {
    return (
        <div {...props}>
            <p>My inbox is always open but please keep in mind I am not currently looking for a new role.</p>
            <p>Let me know if you have suggestions for improvements or if you'd like to collaborate on any of my side projects.</p>
            <div class="container flex flex-grow mx-auto justify-center items-center text-primary-400 mt-2 link-bar" >
                <a href="mailto:webmasternikos@gmail.com" target="_blank" class="link-item" >
                    <HomeIcon class="nav-icon"></HomeIcon>email
                </a>

                <a href="https://github.com/WebmasterNikos/" target="_blank" class="link-item">
                    <HomeIcon class="nav-icon mx-1"></HomeIcon>github
                </a>

                <a href="https://www.linkedin.com/npetalas/" target="_blank" class="link-item">
                    <HomeIcon class="nav-icon mx-1"></HomeIcon>linkedin
                </a>

                <a href="https://artgen.xyz/" target="_blank" class="link-item">
                    <HomeIcon class="nav-icon mx-1"></HomeIcon> artgen.xyz
                </a>
            </div>
        </div>
    );
}

export default Links;