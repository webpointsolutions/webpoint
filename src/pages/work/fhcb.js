import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/Portfolio/portfolio"

const FHCB = () => (
  <Layout>
    <SEO title="FHCB" />
    <Portfolio
      projectName="Family Home Christian Books"
      projectCategory="UI/UX Design"
      projectSummary="Family Home Christian Books is a e-commerce bookstore that has been enriching families with books, DVDs, and other materials for children and adults on topcis such has health and disease, family values, and spirituality."
      bannerImage="/images/fhcb-banner.png"
      goalsContent="The client wanted to create a clean and more modern design with a more appealing color pallete that matched the company's current branding. The also wanted to address some significant UX issues such as improved navigation, mobile responsiveness, and affiliate portal."
      processImage="/images/fhcb-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      techUsed={["Figma"]}
      nextPage="/plate-app"
    ></Portfolio>
  </Layout>
)

export default FHCB
