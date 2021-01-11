import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/Portfolio/portfolio"

const Cryptox = () => (
  <Layout>
    <SEO title="Cryptox" />
    <Portfolio
      projectName="Cryptox"
      projectSummary="Cryptox is a platform that allows you to quickly and easily buy or sell shares."
      bannerImage="/images/Cryptox-banner.png"
      goalsContent="The main goal is to create an eye-catching design related to cryptocurrency exchanges. In addition, it is important to enable users to leave their personal data for further feedback."
      processImage="/images/Cryptox-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/youth-summit"
    ></Portfolio>
  </Layout>
)

export default Cryptox
