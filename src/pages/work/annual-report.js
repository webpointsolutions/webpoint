import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/Portfolio/portfolio"

const AnnualReport = () => (
  <Layout>
    <SEO title="Annual Report" />
    <Portfolio
      projectName="Annual Report"
      projectCategory="Graphic Design"
      projectSummary="Annual report for a large investment company."
      bannerImage="/images/annual-banner.png"
      goalsContent="Coming soon...."
      resultContent="Coming soon"
      techUsed={["InDesign"]}
      nextPage="/reach-nepal"
    ></Portfolio>
  </Layout>
)

export default AnnualReport
