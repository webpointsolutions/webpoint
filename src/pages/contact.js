import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss"
import ContactForm from "../components/ContactForm/contactForm"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Have an idea? Tell us about it. We can't wait to partner with you on your next project!"/>
      <div className="container-fluid privacy-policy">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8 col-sm-10">
            <div className="contact">
              <h1 data-aos="fade-up">We’d like to work together</h1>
              <div className="form-wrap">
                <h3 data-aos="fade-up">Get in touch</h3>
                <p data-aos="fade-up">
                  Feel free to fill out this form to just say hi or start a new
                  project.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
