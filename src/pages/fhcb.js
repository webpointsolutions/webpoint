import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const FHCB = () => (
  <Layout>
    <SEO title="FHCB" />
    <Portfolio
      projectName="Family Home Christian Books"
      projectSummary="Family Home Christian Books is a e-commerce bookstore that has been enriching families with books, DVDs, and other materials."
      bannerImage="/images/fhcb-banner.png"
      goalsContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      processImage="/images/fhcb-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/plate-app"
    ></Portfolio>
  </Layout>
)

export default FHCB
