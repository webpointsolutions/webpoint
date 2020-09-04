import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const ReachNepal = () => (
  <Layout>
    <SEO title="Reach Nepal" />
    <Portfolio
      projectName="Reach Nepal"
      projectSummary="Reach Nepal exists to bring the Everlasting Gospel to every Nepali person around the globe through media ministry and personal evangelism."
      bannerImage="/images/reach-nepal-banner.png"
      goalsContent="Give the website a modern look, add functionality and update user flow. "
      processImage="/images/reach-nepal-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/cryptox"
    ></Portfolio>
  </Layout>
)

export default ReachNepal
