/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import "../../static/css/bootstrap-grid.min.css"
import "../../static/css/fonts.scss"
import "../../static/css/function.scss"
import "../../static/css/components.scss"
import "../../static/css/variables.scss"
import "../../static/css/base.scss"
import Footer from "./Footer/footer"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
