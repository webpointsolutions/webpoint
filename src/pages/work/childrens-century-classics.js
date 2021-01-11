import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/Portfolio/portfolio"

const ChildrenCenturyClassics = () => (
  <Layout>
    <SEO
      title="Children Century Classics
    "
    />
    <Portfolio
      projectName="Childrens Century Classics"
      projectCategory="UI/UX, Mobile, Front-end, CMS"
      projectSummary=" The Children’s Century Classics online provides subscription access to activities and companion audiobooks for a children’s book set."
      projectLink="https://childrenscenturyclassics.com"
      bannerImage="/images/Childrens-Century-banner.png"
      goalsContent="The previous version of the site had an outdated design and did not meet modern development requirements. Poor functionality, inconvenient navigation, lack of a responsive version - all this negatively affected users."
      processImage="/images/Childrens-Century-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device. We built a responsive web app using React Gatsby, and also created a new mobile app with an improved user interface using React Native"
      techUsed={["Gatsby", "React Native", "SCSS", "WordPress"]}
      nextPage="/strategy-prep"
    ></Portfolio>
  </Layout>
)

export default ChildrenCenturyClassics
