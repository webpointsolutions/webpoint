/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import "../../static/css/bootstrap-grid.min.css"
import "../../static/css/fonts.scss"
import "../../static/css/function.scss"
import "../../static/css/components.scss"
import "../../static/css/variables.scss"
import "../../static/css/base.scss"
import Footer from "./Footer/footer"

import AOS from "aos"
import "aos/dist/aos.css"

const Layout = ({ children, hideFooter=false }) => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 500, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    })
  }, [])

  return (
    <>
      <Header />

      <div>
        <main>{children}</main>
        {hideFooter?null:<Footer />}
      </div>
    </>
  )
}

export default Layout
