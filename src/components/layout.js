import PropTypes from "prop-types"
import * as React from "react"
import {getAdjustedColor} from "../util/util"
import Footer from "./footer"
import Header from "./header"

const Layout = ({colorProps, children}) => {

  const darkerBg = getAdjustedColor(colorProps?.bgColor, 100);
  const lighterBg = getAdjustedColor(colorProps?.bgColor, -100);

  return (
    <div className={`min-h-screen flex flex-col justify-between items-stretch ${lighterBg}`}>
      <Header {...colorProps} />
      <main className={`container m-auto flex flex-col rounded-xl ${colorProps?.textColor}`}>
        {children}
      </main>
      <Footer {...colorProps} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
