import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroVideo from "../components/HeroVideo/heroVideo"
import Service from "../components/Service/service"
import Work from "../components/Work/work"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroVideo />
    <Service />
    <Work />
  </Layout>
)

export default IndexPage
