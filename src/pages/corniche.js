import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const Corniche = () => (
  <Layout>
    <SEO title="Corniche" />
    <Portfolio
      projectName="Corniche"
      projectCategory="UI/UX, Front-end, CMS"
      projectLink="https://cornichewatches.com/"
      projectSummary="Corniche is a luxury watch compnay that develops high quality watches for men & women."
      bannerImage="/images/Corniche-banner.png"
      goalsContent="The main objective was to design a safisticated theme with a color scheme and layout the conveys the idea of luxury."
      processImage="/images/Corniche-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      techUsed={["Sketch", "HTML/CSS", "WordPress"]}
      nextPage="/lineage-journey"
    ></Portfolio>
  </Layout>
)

export default Corniche
