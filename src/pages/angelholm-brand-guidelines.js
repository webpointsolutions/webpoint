import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const AngelholmBrandGuidelines = () => (
  <Layout>
    <SEO title="Angelholm Brand Guidelines" />
    <Portfolio
      projectName="Angelholm Brand Guidelines"
      projectCategory="Graphic design, Branding"
      projectSummary="Detailed and comprehensive deign and brand guidelines."
      bannerImage="/images/Angelholm-banner.png"
      goalsContent="Create a universal template in a minimalist style for use in branding guidelines."
      processImage="/images/Angelholm-process.png"
      resultContent="50 page universal template for quick and easy brand guide customization. The Angelholm Brand Guidelines cover all aspects of design including logo, color, type, web, social media, print, packaging and imagery."
      techUsed={["Sketch", "Figma", "InDesign"]}
      nextPage="/home-health-education"
    ></Portfolio>
  </Layout>
)

export default AngelholmBrandGuidelines
