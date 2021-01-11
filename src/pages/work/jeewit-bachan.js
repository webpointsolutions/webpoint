import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/Portfolio/portfolio"

const JeewitBachan = () => (
  <Layout>
    <SEO
      title="Jeewit Bachan Website &amp; Mobile App" 
      description="Create a complete design system for the client and then implement this into a modern responsive web app that was media focused and offered offline PWA functionality, in addition to a mobile app"
    />
    <Portfolio
      projectName="Jeewit Bachan Website &amp; Mobile App"
      projectCategory="UI/UX, Branding Mobile, PWA, Front-end, CMS"
      projectLink="https://jeewitbachan.com"
      projectSummary="Jeewit Bachan is an online Christian resource site in the Nepali language"
      bannerImage="/images/Jeewit-Bachan-banner.png"
      goalsContent="Create a complete design system for the client and then implement this into a modern responsive web app that was media focused and offered offline PWA functionality, in addition to a mobile app"
      processImage="/images/Jeewit-Bachan-process.png"
      resultContent="This project is still in progress, and should be completed by November, 2020"
      techUsed={["Figma", "React", "MongoDB", "StrapiCMS", "React Native", "AWS EC2"]}
      nextPage="/fhcb"
    ></Portfolio>
  </Layout>
)

export default JeewitBachan
