import React from "react"
import speedOptimization from "../../../static/images/speed-optimization.svg"
import woo from "../../../static/images/woocommerce.svg"
import api from "../../../static/images/api-integration.svg"
import theme from "../../../static/images/custom-theme.svg"
import plugins from "../../../static/images/custom-plugin.svg"
import maintenance from "../../../static/images/monthly-maintenance.svg"
import { useState } from "react"
import "./style.scss"

const ServicesWordpress = () => {
  const displayText = {
    speedOptimizationText:
      "We ensure your website loads quickest time possible to  avoid losing potential customers due to loading delay.",
    wooCommerceText:
      "We integrate WooCommerce and customize according to your entire ecommerce business solutions needs.",
    apiText:
      "We will establish effective interface allowing communication between your programs, devices, data transaction, or any sales services.",
    themeText:
      "We make your site stand out with high end quality customized theme inline with your brand.",
    pluginsText:
      "With our focused customized plugins for better productivity, we will display product & service features  professionally, catered to your business objectives.",
    maintenanceText:
      " We will provide hosting services and range of maintenance -from 24/7 support, periodical theme & plugin updates,  routine backups to premium security updates.",
  }

  const generalServicesText =
    "We provide a wide range of services for your website needs, to meet your conversional goals."
  const [textData, setText] = useState(generalServicesText)
  const [classdata, setit] = useState("")
  const [target, setTarget] = useState("")
  let speedShow = "notshow",
    wooShow = "notshow",
    themeShow = "notshow",
    maintenaceShow = "notshow",
    apiShow = "notshow",
    pluginShow = "notshow"
  if (target === 0) {
    speedShow = "show"
  } else if (target === 2) {
    pluginShow = "show"
  } else if (target === 1) {
    wooShow = "show"
  } else if (target === 3) {
    themeShow = "show"
  } else if (target === 4) {
    apiShow = "show"
  } else if (target === 5) {
    maintenaceShow = "show"
  }

  return (
    <div className="service-box">
      <div className="service-title">
        <span className="text">Services</span>
      </div>
      <div className="service-content">
        <div className="service-text">
          <p>{textData}</p>
        </div>
        <div className="service-icons">
          <div
            className="icon"
            onClick={() => setText(displayText.speedOptimizationText)}
            onMouseOver={() => {
              setTarget(0)
            }}
            onMouseLeave={() => {
              setTarget("")
            }}
          >
            <div className={speedShow}>{displayText.speedOptimizationText}</div>
            <img src={speedOptimization} />
            <h2>
              Speed <br />
              Optimiation
            </h2>
          </div>
          <div
            className="icon"
            onClick={() => setText(displayText.wooCommerceText)}
            onMouseOver={() => setTarget(1)}
            onMouseLeave={() => {
              setTarget("")
            }}
          >
            <div className={wooShow}>{displayText.wooCommerceText}</div>
            <img src={woo} />
            <h2>
              Woo
              <br />
              Commerce
            </h2>
          </div>
          <div
            className="icon"
            onClick={() => setText(displayText.apiText)}
            onMouseOver={() => setTarget(4)}
            onMouseLeave={() => {
              setTarget("")
            }}
          >
            <div className={apiShow}>{displayText.apiText}</div>
            <img src={api} />
            <h2>
              API
              <br /> Integration
            </h2>
          </div>
          <div
            className="icon"
            onClick={() => setText(displayText.themeText)}
            onMouseOver={() => {
              setTarget(3)
            }}
            onMouseLeave={() => {
              setTarget("")
            }}
          >
            <div className={themeShow}>{displayText.themeText}</div>
            <img src={theme} />
            <h2>
              Custom <br />
              Theme
            </h2>
          </div>
          <div
            className="icon"
            onClick={() => setText(displayText.pluginsText)}
            onMouseOver={() => {
              setTarget(2)
            }}
            onMouseLeave={() => {
              setTarget("")
            }}
          >
            <div className={pluginShow}>{displayText.pluginsText}</div>
            <img src={plugins} />
            <h2>
              Custom
              <br /> Plugins
            </h2>
          </div>
          <div
            className="icon"
            onClick={() => setText(displayText.maintenanceText)}
            onMouseOver={() => {
              setTarget(5)
            }}
            onMouseLeave={() => {
              setTarget("")
            }}
          >
            <div className={maintenaceShow}>{displayText.maintenanceText}</div>
            <img src={maintenance} />
            <h2>
              Monthly <br />
              Maintenance
            </h2>
          </div>
        </div>
      </div>
      <div className="start">
        <a>Let’s start</a>
      </div>
    </div>
  )
}
export default ServicesWordpress
