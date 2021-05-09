import React from "react"
import "./contactForm.scss"
import { Link } from "gatsby"

const ContactForm = () => {
  const [checked, setChecked] = React.useState(true)
  const [submit, setSubmit] = React.useState(false)
  return (
    <div className="container-main">
      <div className="get-in-touch">Get in Touch</div>
      <div className="line-left"></div>
      <div className="line-right"></div>
      <form
        action="https://getform.io/f/0439874a-9b9b-4088-b8c5-4335224922ed"
        method="POST"
        // data-aos="fade-up"
      >
        <div className="row">
          <div className="input-container col-md-6 col-sm-12">
            {/* <div className="d-flex justify-content-between"> */}
            <div className="input-wrapper">
              <input
                className="placeholder"
                placeholder="Name"
                type="text"
                name="name"
              />
            </div>

            <div className="input-wrapper">
              <input
                id="email"
                name="email"
                type="email"
                maxLength="50"
                required
              />
              <span className="placeholder" data-placeholder="Email"></span>
            </div>
            {/* </div> */}
            <div className="input-wrapper textarea-wrap">
              <textarea name="message" rows="1" cols="30" required></textarea>
              <span
                className="placeholder"
                data-placeholder="Tell us about your project"
              ></span>
            </div>
          </div>

          <div className="contact-btm col-md-6 col-sm-12">
            <span className="aostext">or just write to us</span>
            <br />
            <span className="aosmail">
              {" "}
              <a href="mailto:sales@webpoint.io">sales@webpoint.io</a>
            </span>
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
  )
}
export default ContactForm
