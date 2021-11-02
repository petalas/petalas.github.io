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
    <>
      <div class="min-h-screen min-w-max flex flex-col justify-between items-stretch bg-primary-800">
        <main class="flex flex-col flex-1 max-w-lg self-center items-center m-2 bg-secondary-600 shadow-lg rounded-xl text-primary-400">
          {children}
        </main>
        <footer class="p-2 mt-2 text-center bg-secondary-800 text-primary-500">
          © {new Date().getFullYear()}, Nick Petalas
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
