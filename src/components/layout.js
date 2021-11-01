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
      <div class="min-h-screen min-w-max flex flex-col justify-between items-stretch bg-gray-500">
        <main class="flex flex-col flex-1 max-w-lg self-center items-center outline-black m-2">{children}</main>
        <footer class="bg-blue-500 p-2 mt-2 text-center">
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
