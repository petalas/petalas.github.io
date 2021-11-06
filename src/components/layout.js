import * as React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

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
      <main class="container m-auto p-2 flex flex-col rounded-xl text-primary-400">
        {children}
      </main>
      <footer class="p-2 mt-2 text-center bg-secondary-900 text-primary-300">
        © {new Date().getFullYear()}, Nick Petalas
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
