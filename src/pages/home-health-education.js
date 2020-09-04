import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const HomeHealthEducation = () => (
  <Layout>
    <SEO title="Home Health Education" />
    <Portfolio
      projectName="Home Health Education"
      projectSummary="HHES has a network of independent sales representatives who needed a platform to view their customer’s information, payment history, location, receive deliquency alerts, and receive new leads."
      bannerImage="/images/hhes-banner.png"
      goalsContent="We worked with the client to come up with the user flow and responsive layout that would be intuitive to use, and easy to visualize important information"
      processImage="/images/hhes-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/annual-report"
    ></Portfolio>
  </Layout>
)

export default HomeHealthEducation
