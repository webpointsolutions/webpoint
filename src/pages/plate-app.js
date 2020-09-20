import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const PlateApp = () => (
  <Layout>
    <SEO title="Plate App" />
    <Portfolio
      projectName="Plate App"
      projectCategory="UI/UX, Mobile"
      projectSummary="Plate App is a service for delivering your favorite food from restaurants on your mobile phone."
      bannerImage="/images/plate-banner.png"
      goalsContent="FCreate a convenient and functional application that supports iOS devices. The main task is to give a quick way to find the right dish at an affordable price and with fast delivery. The main problems that competitors encounter are a confusing interface. Often, to order food, the user has to go through a kind of quest. Our task is to simplify and facilitate this way."
      processImage="/images/plate-process.png"
      resultContent="We were able to create a truly impressive application with a high user rating. The application provides a convenient filter. With it, you can choose a specific kitchen, delivery time, minimum amount and payment method. Also in the program you can read reviews about this or that restaurant and check ratings. If you are a regular customer of the service, you can create a personal account with order histories, discounts and unique offers."
      techUsed={["Sketch", "React Native"]}
      nextPage="/childrens-century-classics"
    ></Portfolio>
  </Layout>
)

export default PlateApp
