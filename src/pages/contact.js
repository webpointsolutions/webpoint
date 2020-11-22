import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss"
import { Link } from "gatsby"
const Contact = () => {
  const [checked, setChecked] = React.useState(true)
  const [submit, setSubmit] = React.useState(false)
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container-fluid privacy-policy">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8 col-sm-10">
            <div className="contact">
              <h1 data-aos="fade-up">We’d like to work together</h1>
              <div className="form-wrap">
                <h3 data-aos="fade-up">Drop us a line</h3>
                <p data-aos="fade-up">
                  Feel free to fill out this form to just say hi or start a new
                  project.
                </p>
                <form
                  action="https://getform.io/f/0439874a-9b9b-4088-b8c5-4335224922ed"
                  method="POST"
                  data-aos="fade-up"
                >
                  <div className="row">
                    <div className="input-container col-md-6 col-sm-12">
                      {/* <div className="d-flex justify-content-between"> */}
                      <div className="input-wrapper">
                        <input placeholder="Name" type="text" name="name" />
                      </div>
                      <div className="input-wrapper">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          maxLength="50"
                          required
                        />
                        <span
                          className="placeholder"
                          data-placeholder="Email"
                        ></span>
                      </div>
                      {/* </div> */}
                      <div className="input-wrapper textarea-wrap">
                        <textarea
                          name="message"
                          rows="1"
                          cols="30"
                          required
                        ></textarea>
                        <span
                          className="placeholder"
                          data-placeholder="Tell us about your project"
                        ></span>
                      </div>
                    </div>
                    <div className="contact-btm col-md-6 col-sm-12" data-aos="fade-up">
                      <p>or just write to us</p>
                      <a href="mailto:sales@webpoint.io">sales@webpoint.io</a>
                    </div>

                  </div>
                  <div className="round">
                    <input
                      type="checkbox"
                      id="checkbox"
                      onChange={() => setChecked(!checked)}
                      required="required"
                    ></input>
                    <label for="checkbox">
                      <span></span>I have read and agree with{" "}
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </label>
                    {checked && submit && (
                      <p className="error-msg">Please checked this field!</p>
                    )}
                  </div>
                  <button onClick={() => setSubmit(true)}>Send It</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
