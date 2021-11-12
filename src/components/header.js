import {Link} from "gatsby";
import * as React from "react";
import ExpIcon from "../icons/experience";
import HomeIcon from "../icons/home";
import LinksIcon from "../icons/links";
import ProjectsIcon from "../icons/projects";

const Header = () => {
    return (
        <>
            <header class="h-12 flex justify-center bg-secondary-900 text-secondary-300 custom-box-shadow z-10">
                <i class="md:hidden">x</i>
                <ul class="container mx-auto flex justify-around">
                    <li class="nav-item">
                        <HomeIcon class="nav-icon" />
                        <Link class="px-2" to="#about">About</Link>
                    </li>
                    <li class="nav-item">
                        <ExpIcon class="nav-icon" />
                        <Link class="px-2" to="#experience">Experience</Link>
                    </li>
                    <li class="nav-item">
                        <ProjectsIcon class="nav-icon" />
                        <Link class="px-2" to="#projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <LinksIcon class="nav-icon" />
                        <Link class="px-2" to="#links">Links</Link>
                    </li>
                </ul>
            </header>
            <div id="backdrop" class="h-5 bg-secondary-900 mb-4"></div>
        </>
    )
}

export default Header;