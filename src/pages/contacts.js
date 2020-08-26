import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid privacy-policy">
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="contact">
            <h1>We’d like to work together</h1>
            <div className="form-wrap">
              <h3>Drop us a line</h3>
              <p>
                Feel free to fill out this form to just say hi or start a new
                project.
              </p>
              <form>
                <div className="d-flex justify-content-between">
                  <input placeholder="Name" type="text" name="name" />
                  <div class="input-wrapper">
                    <input
                      id="firstName"
                      name="fname"
                      type="email"
                      maxlength="50"
                      required
                    />
                    <span class="placeholder" data-placeholder="Email"></span>
                  </div>
                </div>
                <div class="input-wrapper textarea-wrap">
                  <textarea
                    name="message"
                    rows="1"
                    cols="30"
                    required
                  ></textarea>
                  <span
                    class="placeholder"
                    data-placeholder="Tell us about your project"
                  ></span>
                </div>
                <div class="round">
                  <input type="checkbox" id="checkbox" />
                  <label for="checkbox">
                    <span></span>I have read and agree with{" "}
                    <a href="">Privacy Policy</a>
                  </label>
                </div>
                <button>Send It</button>
              </form>
              <div className="contact-btm">
                <p>or just write to us</p>
                <a href="mailto:sales@webpoint.io">sales@webpoint.io</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
