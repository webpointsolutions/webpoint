import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/Portfolio/portfolio"

const HomeHealthEducation = () => (
  <Layout>
    <SEO title="Home Health Education Service" />
    <Portfolio
      projectName="Home Health Education Service"
      projectCategory="UI/UX, Front-end, PWA, Custom API"
      projectSummary="HHES has a network of independent sales representatives who needed a platform to view their customer’s information, payment history, location, receive deliquency alerts, and receive new leads."
      bannerImage="/images/hhes-banner.png"
      goalsContent="We worked with the client to come up with the user flow and responsive layout that would be intuitive to use, and easy to visualize important information and address several issues with their current workflow"
      processImage="/images/hhes-process.png"
      resultContent="We created a fully custom platform that drastically reduced paperwork, reduced that time to follow up on leads, and provide critical information for the sales reps to maximize their efficiency"
      techUsed={[
        "Figma",
        "React",
        "SCSS",
        "PostgreSQL",
        "AWS Redis",
        "AWS EC2",
      ]}
      nextPage="/work/annual-report"
    ></Portfolio>
  </Layout>
)

export default HomeHealthEducation
