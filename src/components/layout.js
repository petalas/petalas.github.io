import {graphql, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="min-h-screen flex flex-col justify-between items-stretch bg-primary-800">
      <Header />
      <main class="container m-auto flex flex-col rounded-xl text-primary-400">
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
