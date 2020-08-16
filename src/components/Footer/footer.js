import React from "react"

import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10 d-flex sm-column">
          <div className="footer_left">
            <span className="footer_left_title">Contact us</span>
            <a href="#" className="footer_left_link">
              Let’s work together
            </a>
          </div>
          <div className="footer_right">
            <span className="footer_right_title">Address</span>
            <span className="footer_right_description">
              55 Alcovy Forest <br /> Dr Covington GA 30014
            </span>
            <span className="footer_right_title">Get in touch</span>
            <span className="footer_right_description">
              <a href="mailto:sales@webpoint.io">sales@webpoint.io</a> <br />
              +1 (470) 755-6225
            </span>
            <a className="facebook" href="#">
              Facebook
            </a>
          </div>
        </div>
        <div className="col-lg-10 footer_bottom">
          <span>© 2020 WebPoint Solutions, LLC</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
