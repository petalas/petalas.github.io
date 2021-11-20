import {Link} from "gatsby";
import * as React from "react";
import DownIcon from "../icons/down";
import ExpIcon from "../icons/experience";
import HomeIcon from "../icons/home";
import LinksIcon from "../icons/links";
import ProjectsIcon from "../icons/projects";

const Header = () => {

    const navList = React.useRef(null);
    const toggle = React.useRef(null);

    // only relevant before the md breakpoint - used to show/hide the nav menu
    const toggleNav = (hidden = true) => {
        window.requestAnimationFrame(() => {
            if (hidden) {
                hideNav();
                showToggle();
            }
            else {
                showNav();
                hideToggle();
            }
        })

    }

    const hideNav = () => {
        navList?.current?.classList?.add('hidden');
        navList?.current?.classList?.remove('flex');
    }

    const showNav = () => {
        navList?.current?.classList?.remove('hidden');
        navList?.current?.classList?.add('flex');
    }

    const showToggle = () => {
        toggle?.current?.classList?.remove('hidden');
        toggle?.current?.classList?.add('nav-toggle');
    }

    const hideToggle = () => {
        toggle?.current?.classList?.add('hidden');
        toggle?.current?.classList?.remove('nav-toggle');
    }

    return (
        <>
            <header class="h-12 flex justify-center items-center bg-secondary-900 text-secondary-300 custom-box-shadow z-10">

                <div ref={toggle} class="nav-toggle md:hidden">
                    <DownIcon class="nav-icon" onClick={() => toggleNav(false)} />
                </div>

                <ul ref={navList} class="hidden flex-col fixed top-0 w-full bg-secondary-900 mx-auto md:relative md:flex md:flex-row md:container md:h-full" >
                    <li class="nav-item" onClick={() => toggleNav(true)}>
                        <HomeIcon class="nav-icon" />
                        <Link class="px-2" to="#about">About</Link>
                    </li>
                    <li class="nav-item" onClick={() => toggleNav(true)}>
                        <ExpIcon class="nav-icon" />
                        <Link class="px-2" to="#experience">Experience</Link>
                    </li>
                    <li class="nav-item" onClick={() => toggleNav(true)}>
                        <ProjectsIcon class="nav-icon" />
                        <Link class="px-2" to="#projects">Projects</Link>
                    </li>
                    <li class="nav-item" onClick={() => toggleNav(true)}>
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