import {StaticImage} from "gatsby-plugin-image"
import * as React from "react"
import About from "../components/about.section"
import Experience from "../components/experience.section"
import Layout from "../components/layout"
import Links from "../components/links.section"
import Projects from "../components/projects.section"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Nick Petalas Portfolio Homepage" meta="" />
    <div class="flex-1 text-primary-500 flex flex-col text-xs">

      <section id="about" class="p-1 md:p-2 rounded-lg flex flex-grow bg-secondary-900 border-primary-300 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <StaticImage
          class="w-full"
          loading="eager"
          src="../images/nick.jpg"
          quality={95}
          alt="Nick Petalas - Profile Picture"
        />

        <About class="p-1 md:p-2 lg:col-span-2" />
      </section>


      <h2 class="pt-4 text-lg text-secondary-200">Where I've worked</h2>
      <Experience id="experience" class="grid gap-2 grid-cols-1" />

      <h2 class="pt-4 text-lg text-secondary-200">Some of my side projects</h2>
      <Projects id="projects" />

      <h2 class="pt-4 text-lg text-secondary-200">Get in touch</h2>
      <Links i="links" class="bg-secondary-600 p-2 rounded border-2 border-primary-400 text-secondary-300" />
    </div>

  </Layout>
)

export default IndexPage
