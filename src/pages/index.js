import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroVideo from "../components/HeroVideo/heroVideo"
import Service from "../components/Service/service"
import Work from "../components/Work/work"

const IndexPage = () => (
  <Layout>
    <SEO title="Webpoint Soltuions" description="Webpoint is a full service web & mobile applications development company. We specialize in creating clean and modern UI/UX designs and web and app development using the latest technologies." />
    <HeroVideo />
    <Service />
    <Work />
  </Layout>
)

export default IndexPage
