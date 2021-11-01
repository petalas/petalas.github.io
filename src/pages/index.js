import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p class="m-2 text-center bg-blue-500">Page 1</p>

    <StaticImage
      class="m-1"
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["webp"]}
      alt="A Gatsby astronaut"
    />

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
