import {StaticImage} from "gatsby-plugin-image"
import * as React from "react"
import Item from "../components/item"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {employmentHistory} from "../data/positions"


const IndexPage = () => (
  <Layout>
    <Seo title="Nick Petalas Portfolio Homepage" meta="" />
    <div class="flex-1 text-primary-500 rounded-xl flex flex-col lg:flex-row text-xs lg:text-sm">

      <section class="p-2 flex flex-row bg-secondary-600 lg:flex-col border-b-2 mb-2 mr-0 lg:mb-0 lg:mr-2 lg:border-b-0 lg:border-r-2">
        <StaticImage
          class="w-1/3 lg:w-full"
          loading="eager"
          src="../images/nick.jpg"
          width={256}
          quality={95}
          alt="Profile Picture"
        />

        <section class="w-80 lg:w-64 xl:w-80 pl-2 lg:pl-0 lg:pt-2 flex-grow">
          <h2 class="text-lg">Nick Petalas</h2>
          <h3 class="text-base">Senior Software Engineer</h3>
          <p>Science, technology, crypto, photography.</p>
        </section>
      </section>


      <section class="grid gap-2 lg:gap-2 grid-cols-1 lg:grid-cols-2">
        {employmentHistory.map(i =>
          <section class="p-2 bg-secondary-600">
            <Item {...i}></Item>
          </section>
        )}
      </section>
    </div>

  </Layout>
)

export default IndexPage
