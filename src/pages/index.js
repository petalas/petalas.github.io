import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Nick Petalas" />
    <div class="text-primary-500 p-2 rounded-xl">
      <p class="text-lg text-center">Hello</p>
      <StaticImage
        class="m-1"
        src="../images/nick.jpg"
        width={300}
        quality={95}
        formats={["webp"]}
        alt="A Gatsby astronaut"
      />
    </div>

  </Layout>
)

export default IndexPage
