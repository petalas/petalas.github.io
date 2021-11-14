import {StaticImage} from "gatsby-plugin-image"
import * as React from "react"
import Experience from "../components/experience.section"
import Layout from "../components/layout"
import Projects from "../components/projects.section"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Nick Petalas Portfolio Homepage" meta="" />
    <div class="flex-1 text-primary-500 flex flex-col text-xs">

      <section id="about" class="p-2 rounded-lg flex flex-row bg-secondary-900 border-primary-300 mb-2">
        <StaticImage
          class="w-1/3"
          loading="eager"
          src="../images/nick.jpg"
          width={256}
          quality={95}
          alt="Profile Picture"
        />

        <section class="flex-grow p-2">
          <h2 class="text-lg text-primary-300">Nick Petalas</h2>
          <h3 class="text-base text-primary-400">Senior Software Engineer</h3>
          <p class="text-sm text-primary-500">Science, technology, crypto, photography.</p>
        </section>
      </section>


      <h2 class="pt-4 text-lg text-secondary-200">Where I've worked</h2>
      <Experience id="experience" class="grid gap-2 grid-cols-1" />

      <h2 class="pt-4 text-lg text-secondary-200">Some of my side projects</h2>
      <Projects id="projects" />

      <section id="links">
        <h2 class="pt-4 text-lg text-secondary-200">Get in touch</h2>
        <p>Links placeholder</p>
      </section>
    </div>

  </Layout>
)

export default IndexPage
