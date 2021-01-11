import React from "react"
import "./navigation.scss"
import { Link } from "gatsby"

const Navigation = ({ menu, menuToggle }) => (
  <section
    onClick={menuToggle}
    className={menu ? "Navigation active" : "Navigation"}
  >
    <div className="container-fluid">
      <div className="d-flex row justify-content-center">
        <div className="col-lg-12 d-flex justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo-white.svg" />
            </Link>
          </div>
          <img
            className="close"
            src="/images/close.svg"
            alt="close"
            onClick={menuToggle}
          />
        </div>
        <div className="col-lg-11 navbar">
          <ul className="menu">
            <li>
              <Link activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/agency/">
                Agency
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/work/">
                Work
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/contact/">
                Contact
              </Link>
            </li>
          </ul>
          <a
            href="https://facebook.com/webpointsolutionsllc/"
            className="facebook"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/webpointsolutions/"
            className="facebook"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Navigation
