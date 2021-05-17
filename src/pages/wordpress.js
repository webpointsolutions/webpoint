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

      <ServicesWordpress />
      <Maintenance />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
export default Wordpress
