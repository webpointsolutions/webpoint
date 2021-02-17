import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/Portfolio/portfolio"

const YouthSummit = () => (
  <Layout>
    <SEO title="Youth Summit" />
    <Portfolio
      projectName="Youth Summit"
      projectCategory="UI/UX, Front-end, CMS, E-Commerce"
      projectLink="https://youthsummit.info"
      projectSummary="Plate App is a service for delivering your favorite food from
      restaurants on your mobile phone."
      bannerImage="/images/youth-summit-banner.png"
      goalsContent="Create a complete branding, design, and website upgrade for HHES's youth scholarship program"
      processImage="/images/youth-summit-process.png"
      resultContent="The resulting design was much more attractive than other similar programs. The custom e-commerce functionality helped the program continue to run even during COVID-19"
      techUsed={["Figma", "WordPress", "Elementor", "PHP"]}
      nextPage="/work/corniche"
    ></Portfolio>
  </Layout>
)

export default YouthSummit
