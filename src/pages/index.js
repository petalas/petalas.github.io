import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import About from "../components/about.section"
import Experience from "../components/experience.section"
import Layout from "../components/layout"
import Links from "../components/links.section"
import Projects from "../components/projects.section"
import Seo from "../components/seo"
import {getAdjustedColor} from "../util/util"

const bgColor = 'bg-secondary-900';
const textColor = 'text-primary-400';
const hoverBgColor = 'hover:bg-secondary-800';
const hoverTextColor = 'hover:text-primary-200';

const colorProps = {bgColor, textColor, hoverBgColor, hoverTextColor};

const darkerBg = getAdjustedColor(bgColor, 200);

const IndexPage = () => (
  <Layout colorProps={colorProps}>
    <Seo title="Portfolio" />
    <div className="flex-1 text-primary-500 flex flex-col text-xs">

      <section id="about" className={`p-1 md:p-2 rounded-lg ${textColor.replace('text-', 'border-')} ${darkerBg} border-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        <StaticImage
          className="w-full"
          loading="eager"
          src="../images/nick2.jpg"
          quality={95}
          alt="Nick Petalas - Profile Picture"
        />

        <About className="p-1 md:p-2 lg:col-span-2" textColor={textColor} />
      </section>


      <h2 className={`pt-4 text-lg ${textColor}`}>Where I've worked</h2>
      <Experience id="experience" className="grid gap-2 grid-cols-1" />

      <h2 className={`pt-4 text-lg ${textColor}`}>Some of my side projects</h2>
      <Projects id="projects" />

      <h2 className={`pt-4 text-lg ${textColor}`}>Get in touch</h2>
      <Links id="links" className={`p-2 rounded-lg border-2 ${darkerBg} border-primary-400 text-neutral-300`} />
    </div>

  </Layout>
)

export default IndexPage
