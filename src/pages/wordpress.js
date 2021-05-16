import React from "react"
import "../../static/css/wordpress.scss"
import ContactForm from "../components/ContactForm/contactForm"
import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"
import SEO from "../components/seo"
import Maintenance from "../components/Wordpress/Maintenance"
import Testimonials from "../components/Testimonial/Testimonials"
import ServicesWordpress from "../components/service-wordpress/service-wordpress"

const Wordpress = () => {
  return (
    <>
      <Header />
      <SEO
        title="WordPress Design"
        description="We are your WordPress expterts! We built beautiful custom WordPress websites. "
      />
      <section className="wordpress-hero">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wp-header_text">
                <h1>
                  Your One-Stop Solution For Beautiful <br />
                  Custom Wordpress Websites.
                </h1>
              </div>
              <div className="wp-link">
                <a href="#contact-form">Let's Start</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      //{" "}
      {
        <section className="wp-services">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="services-text">
                  <h2>Services</h2>
                </div>
                <div className="services-info-text">
                  <p>
                    We provide a wide range of services for your website needs,
                    to meet your conversion goals.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="wp-services-container">
                      <div className="wp-services-bg">
                        <img
                          src="/images/speed-optimization.svg "
                          alt="Speed Optimization"
                        />
                        <h2>Speed Optimization</h2>
                        <p className="wp-service-description">
                          We ensure your website loads quickest time possible to
                          avoidlosing potential customers due to loading delay.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wp-services-container">
                      <div className="wp-services-bg">
                        <img src="/images/woocommerce.svg" alt="WooCommerce" />
                        <h2>WooCommerce</h2>
                        <p className="wp-service-description">
                          We integrate WooCommerce and customize according to
                          your entire ecommerce business solutions needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="wp-services-container">
                      <div className="wp-services-bg">
                        <img
                          src="/images/api-integration.svg"
                          alt="API Integrations"
                        />
                        <h2>API Integrations</h2>
                        <p className="wp-service-description">
                          We will establish effective interface allowing
                          communication between your programs, devices, data
                          transaction, or any sales services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="wp-services-bg">
                      <img src="/images/custom-theme.svg " alt="Custom Theme" />
                      <h2>Custom Theme</h2>
                      <p className="wp-service-description">
                        We make your site stand out with high end quality
                        customized themeinline with your brand.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wp-services-bg">
                      <img
                        src="/images/custom-plugin.svg"
                        alt="Custom Plugins"
                      />
                      <h2>Custom Plugins</h2>
                      <p className="wp-service-description">
                        With our focused customized plugins for better
                        productivity, we willdisplay product & service features
                        professionally, catered to your business objectives.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="wp-services-bg">
                      <img
                        src="/images/monthly-maintenance.svg"
                        alt="Monthly Maintenance"
                      />
                      <h2>Monthly Maintenance</h2>
                      <p className="wp-service-description">
                        We will provide hosting services and range of
                        maintenance -from 24/7 support, periodical theme &
                        plugin updates, routine backups to premiumsecurity
                        updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="services-learn-more">
                  <a href="#contact-form">Let's Start</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      <ServicesWordpress />
      <Maintenance />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
export default Wordpress
