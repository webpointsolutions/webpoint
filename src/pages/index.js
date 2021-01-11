import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SplashScreen from '../components/SplashScreen'
import HeroVideo from "../components/HeroVideo/heroVideo"
import Service from "../components/Service/service"
import Work from "../components/Work/work"
import Calendly from '../components/Calendly'

const IndexPage = () => {
  const [animCompleted, setAnimCompleted] = useState(false)
  return (
    <Layout hideFooter={!animCompleted}>
      <SplashScreen onAnimCompleted={() => {
        setAnimCompleted(true)
      }}>
        <SEO title="Website Design & Development | App Development - Atlanta" description="Webpoint is a leading web and mobile applications development company. We create beautiful UI/UX designs and engaging user experiences" />
        <HeroVideo />
        <Service />
        <Work />
        <Calendly />
      </SplashScreen>
    </Layout>
  )
}

export default IndexPage
