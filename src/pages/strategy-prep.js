import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const StrategyPrep = () => (
  <Layout>
    <SEO title="Strategy Prep" />
    <Portfolio
      projectName="Strategy Prep"
      projectCategory="UI/UX Design"
      projectSummary="LAST Prep organizes LSAT preparation courses and offers tutoring services."
      bannerImage="/images/Strategy-banner.png"
      goalsContent="The client wanted a modernized landing page to help visitors easily find the relavent information."
      processImage="/images/Strategy-process.png"
      resultContent="We designed a clean and modern landing page design that was mobile friendly and helped conversion rates by making it easy to find relevant information."
      techUsed={["Figma"]}
      nextPage="/sweet-sanity"
    ></Portfolio>
  </Layout>
)

export default StrategyPrep
