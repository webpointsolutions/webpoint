import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const AnnualReport = () => (
  <Layout>
    <SEO title="Annual Report" />
    <Portfolio
      projectName="Annual Report"
      projectSummary="Annual report for a large investment company."
      bannerImage="/images/annual-banner.png"
      goalsContent="The previous version of the site had an outdated design and did not meet modern development requirements. Poor functionality, inconvenient navigation, lack of a responsive version - all this negatively affected users."
      processImage="/images/annual-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/reach-nepal"
    ></Portfolio>
  </Layout>
)

export default AnnualReport
