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
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Webpoint Solutions, LLC",
    "image": "https://webpoint.io/images/logo-blue.svg",
    "url": "https://webpoint.io/",
    "telephone": "+1 (470) 755-6225",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "255 Arthurs Lane",
      "addressLocality": "Covington",
      "addressRegion": "GA",
      "postalCode": "30016",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/webpointsolutionsllc",
      "https://twitter.com/WebpointSoluti1",
      "https://www.linkedin.com/company/webpoint-solutions-llc/"
    ],

  }
  return (
    <Layout hideFooter={!animCompleted}>
      <SplashScreen onAnimCompleted={() => {
        setAnimCompleted(true)
      }}>
        <SEO title="Website Design & Development | App Development" schemaMarkup={schema}/>
        <HeroVideo />
        <Service />
        <Work />
        <Calendly />
      </SplashScreen>
    </Layout>
  )
}

export default IndexPage
