import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const SweetSanity = () => (
  <Layout>
    <SEO title="Sweet Sanity" />
    <Portfolio
      projectName="Sweet Sanity"
      projectSummary="Sweet sanity is a blog &amp; e-commerce store that aims to help people stay sane through change."
      bannerImage="/images/sweet-sanity-banner.png"
      goalsContent="The client needed a clean, bright modern desaign that focused on a blog with small shop."
      processImage="/images/sweet-sanity-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/angelholm-brand-guidelines"
    ></Portfolio>
  </Layout>
)

export default SweetSanity
