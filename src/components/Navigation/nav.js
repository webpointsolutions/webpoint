import React from "react"
import "./navigation.scss"
import { Link } from "gatsby"
const Navigation = ({ menu, menuToggle }) => (
  <section className={menu ? "Navigation active" : "Navigation"}>
    <div className="container-fluid">
      <div className="d-flex row justify-content-center">
        <div className="col-lg-12 d-flex justify-content-between">
          <div className="logo">
            <a href="#">
              <img src="images/logo-white.svg" />
            </a>
          </div>
          <img
            className="close"
            src="images/close.svg"
            alt=""
            onClick={menuToggle}
          />
        </div>
        <div className="col-lg-11 navbar">
          <ul className="menu">
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/agency">Agency</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <a href="#" className="facebook">
            Facebook
          </a>
          <a href="#" className="facebook">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Navigation
