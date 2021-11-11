import {graphql, Link, useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"

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
      <header class="p-2 flex justify-center bg-secondary-900 text-secondary-300 custom-box-shadow z-10">
        <i class="md:hidden">x</i>
        <ul class="flex md:w-1/2 justify-around">
          <li class="nav-item"><Link class="p-1" to="#about">about</Link></li>
          <li class="nav-item"><Link class="p-1" to="#experience">experience</Link></li>
          <li class="nav-item"><Link class="p-1" to="#projects">projects</Link></li>
          <li class="nav-item"><Link class="p-1" to="#links">links</Link></li>
        </ul>
      </header>
      <div id="backdrop" class="h-5 bg-secondary-900 mb-4"></div>
      <main class="container m-auto flex flex-col rounded-xl text-primary-400">
        {children}
      </main>
      <footer class="p-2 mt-2 text-center bg-secondary-900 text-secondary-300">
        © {new Date().getFullYear()}, Nick Petalas
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
