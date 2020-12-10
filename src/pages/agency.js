import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./agency.scss"
import AgencySlider from "../components/AgencySlider/agencySlider"

const Agnecy = () => (
  <Layout>
    <SEO title="Agency" />
    <div className="container-fluid Agency">
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="Agency_banner d-flex align-items-center mauto">
            <h1>
              Webpoint is a digital agency with fresh ideas and a creative team.
            </h1>
          </div>
        </div>
      </div>
    </div>
    <section className="Agency_services">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">
            <span className="title">Services</span>
            <h3 className="title_desc">
              From analysis to implementation.
              <br /> Full development cycle for any project.
            </h3>
            <div className="row justify-content-end Agency_services_btm">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Design</h4>
                    <ul>
                      <li>UI/UX design</li>
                      <li>Branding / Logo design</li>
                      <li>Websites &amp; mobile apps</li>
                      <li>Prototyping and testing</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h4>Development</h4>
                    <ul>
                      <li>HTML/CSS/JS</li>
                      <li>React/Angular/Vue</li>
                      <li>Backend/API integrations/CMS</li>
                      <li>React Native/Flutter/Native Script apps</li>
                      <li>Speed Optimization</li>
                      <li>WordPress</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h4>E-Commerce</h4>
                    <ul>
                      <li>Shopify</li>
                      <li>WooCommerce</li>
                      <li>BigCommerce</li>
                      <li>Instacart</li>
                      <li>Magento</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h4>Content</h4>
                    <ul>
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
        </div>
      </div>
    </section>
    <section className="Agency_services manifesto">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">
            <span className="title">Our Values</span>
            <h3 className="title_desc">
              In our work, we adhere to the rules that help to maintain a high
              level of service.
            </h3>
            <div className="row justify-content-end Agency_services_btm">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Users are always first</h4>
                    <h4>Solve the problem</h4>
                    <h4>Be inspired</h4>
                    <h4>Help each other</h4>
                  </div>
                  <div className="col-sm-6">
                    <h4>Keep it simple</h4>
                    <h4>Make things that matter </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Agency_slider">
      <AgencySlider />
    </section>
  </Layout>
)

export default Agnecy
