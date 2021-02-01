import React from "react"

import "./footer.scss"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="flex-sb col-lg-10 d-flex sm-column mw-1170">
          <div className="footer_left">
            <span className="footer_left_title">Contact us</span>
            <a href="/contact/" className="footer_left_link">
              Let’s work together
            </a>
          </div>
          <div className="footer_right">
            <span className="footer_right_title">Address</span>
            <span className="footer_right_description">
              255 Arthur's Ln <br /> Covington, GA 30016
            </span>
            <span className="footer_right_title">Get in touch</span>
            <span className="footer_right_description">
              <a href="mailto:sales@webpoint.io">sales@webpoint.io</a> <br />
              +1 (470) 755-6225
            </span>
            <a
              className="facebook"
              href="https://facebook.com/webpointsolutionsllc/"
              target="_blank"
            >
              Facebook
            </a>
            <a
              className="facebook"
              target="_blank"
              href="https://www.instagram.com/webpointsolutions/"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="col-lg-10 footer_bottom mw-1170">
          <span>© {new Date().getFullYear()} WebPoint Solutions, LLC</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
