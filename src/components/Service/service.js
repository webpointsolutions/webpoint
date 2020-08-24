import React, { useState } from "react"
import "./services.scss"

const Service = () => {
  const [design, setDesign] = useState(false)
  const [development, sevtDevelopment] = useState(false)
  const [ecommerce, setEcommerce] = useState(false)
  const [content, setContent] = useState(false)

  return (
    <section className="Services">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 d-flex sm-column">
            <span className="section-title" data-aos="fade-up">
              Our Sevices
            </span>
            <div className="Services_list" data-aos="fade-up">
              <div className="Services_list_wrap">
                <span
                  className="Services_list_title"
                  onClick={() => {
                    setDesign(!design)
                  }}
                  className={
                    design
                      ? "Services_list_title active"
                      : "Services_list_title"
                  }
                >
                  Design
                </span>
                <ul
                  className={
                    design
                      ? "Services_list_description active"
                      : "Services_list_description"
                  }
                >
                  <li>UI/UX design</li>
                  <li>Branding / Logo design</li>
                  <li>Websites &amp; mobile apps</li>
                  <li>Prototyping and testing</li>
                </ul>
              </div>
              <div className="Services_list_wrap">
                <span
                  className="Services_list_title"
                  onClick={() => {
                    sevtDevelopment(!development)
                  }}
                  className={
                    development
                      ? "Services_list_title active"
                      : "Services_list_title"
                  }
                >
                  Development
                </span>
                <ul
                  className={
                    development
                      ? "Services_list_description active"
                      : "Services_list_description"
                  }
                >
                  <li>HTML/CSS/JS</li>
                  <li>React/Angular/Vue</li>
                  <li>Backend/API integrations</li>
                  <li>React Native/Flutter/Native Script apps</li>
                  <li>Speed Optimization</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="Services_list_wrap">
                <span
                  className="Services_list_title"
                  onClick={() => {
                    setEcommerce(!ecommerce)
                  }}
                  className={
                    ecommerce
                      ? "Services_list_title active"
                      : "Services_list_title"
                  }
                >
                  E-Commerce
                </span>
                <ul
                  className={
                    ecommerce
                      ? "Services_list_description active"
                      : "Services_list_description"
                  }
                >
                  <li>Shopify</li>
                  <li>WooCommerce</li>
                  <li>BigCommerce</li>
                  <li>Instacart</li>
                  <li>Magento</li>
                </ul>
              </div>
              <div className="Services_list_wrap">
                <span
                  className="Services_list_title"
                  onClick={() => {
                    setContent(!content)
                  }}
                  className={
                    content
                      ? "Services_list_title active"
                      : "Services_list_title"
                  }
                >
                  Content
                </span>
                <ul
                  className={
                    content
                      ? "Services_list_description active"
                      : "Services_list_description"
                  }
                >
                  <li>Copywriting</li>
                  <li>Animation</li>
                  <li>Iconography</li>
                  <li>2D/3D graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
