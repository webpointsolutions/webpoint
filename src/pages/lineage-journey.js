import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const LineageJourney = () => (
  <Layout>
    <SEO 
    title="Lineage Journey" 
    description="Create a clean and modern user interface, increase the site performance and SEO, add new features and restruction the data, and create a mobile app"
    />
    <Portfolio
      projectName="Lineage Journey (CURRENTLY IN PROGRESS"
      projectCategory="UI/UX, Mobile, Front-end, CMS"
      projectLink="https://lineagejourney.com"
      projectSummary="Lineage is a multi-faceted educational tool that helps the user understand their spiritual heritage and explore the links between the past, present and future."
      bannerImage="/images/lineage-banner.png"
      goalsContent="Create a clean and modern user interface, increase the site performance and SEO, add new features and restruction the data, and create a mobile app"
      processImage="/images/lineage-process.png"
      resultContent="This project is currently in progress and we expect to have it completed by December, 2020"
      techUsed={["Figma", "Gatsby", "WordPress", "AWS Amplify", "React Native"]}
      nextPage="/jeewit-bachan"
    ></Portfolio>
  </Layout>
)

export default LineageJourney
