import { Link } from "gatsby";
import * as React from "react";
import DownIcon from "../icons/down";
import ExpIcon from "../icons/experience";
import HomeIcon from "../icons/home";
import LinksIcon from "../icons/links";
import ProjectsIcon from "../icons/projects";
import CVIcon from "../icons/cv";

const Header = ({ bgColor, textColor, hoverBgColor, hoverTextColor }) => {
  const navList = React.useRef(null);
  const toggle = React.useRef(null);

  // only relevant before the md breakpoint - used to show/hide the nav menu
  const toggleNav = (hidden = true) => {
    window.requestAnimationFrame(() => {
      if (hidden) {
        hideNav();
        showToggle();
      } else {
        showNav();
        hideToggle();
      }
    });
  };

  const hideNav = () => {
    navList?.current?.classList?.add("hidden");
    navList?.current?.classList?.remove("flex");
  };

  const showNav = () => {
    navList?.current?.classList?.remove("hidden");
    navList?.current?.classList?.add("flex");
  };

  const showToggle = () => {
    toggle?.current?.classList?.remove("hidden");
    toggle?.current?.classList?.add("nav-toggle");
  };

  const hideToggle = () => {
    toggle?.current?.classList?.add("hidden");
    toggle?.current?.classList?.remove("nav-toggle");
  };

  const liStyle = `nav-item ${textColor} ${hoverBgColor} ${hoverTextColor}`;

  return (
    <>
      <header className={`h-12 flex justify-center items-center ${bgColor} custom-box-shadow z-10`}>
        <div ref={toggle} className="nav-toggle md:hidden">
          <DownIcon className="nav-icon" onClick={() => toggleNav(false)} />
        </div>

        <ul
          ref={navList}
          className={`hidden flex-col fixed top-0 w-full ${bgColor} mx-auto md:relative md:flex md:flex-row md:container md:h-full`}
        >
          <li className={liStyle} onClick={() => toggleNav(true)}>
            <HomeIcon className="nav-icon" />
            <Link className="px-2" to="#about">
              About
            </Link>
          </li>
          <li className={liStyle} onClick={() => toggleNav(true)}>
            <ExpIcon className="nav-icon" />
            <Link className="px-2" to="#experience">
              Experience
            </Link>
          </li>
          <li className={liStyle} onClick={() => toggleNav(true)}>
            <ProjectsIcon className="nav-icon" />
            <Link className="px-2" to="#projects">
              Projects
            </Link>
          </li>
          <li className={liStyle} onClick={() => toggleNav(true)}>
            <LinksIcon className="nav-icon" />
            <Link className="px-2" to="#links">
              Links
            </Link>
          </li>
          <li className={liStyle} onClick={() => toggleNav(true)}>
            <CVIcon className="nav-icon" />
            <a className="px-2" href="/Nick_Petalas_CV.pdf" download="Nick_Petalas_CV.pdf">
              CV (pdf)
            </a>
          </li>
        </ul>
      </header>
      <div id="backdrop" className={`h-5 ${bgColor} mb-4`}></div>
    </>
  );
};

export default Header;
