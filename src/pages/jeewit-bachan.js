import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const JeewitBachan = () => (
  <Layout>
    <SEO
      title="Jeewit Bachan
    "
    />
    <Portfolio
      projectName="Jeewit Bachan"
      projectSummary="Plate App is a service for delivering your favorite food from restaurants on your mobile phone."
      bannerImage="/images/Jeewit-Bachan-banner.png"
      goalsContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      processImage="/images/Jeewit-Bachan-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/fhcb"
    ></Portfolio>
  </Layout>
)

export default JeewitBachan
