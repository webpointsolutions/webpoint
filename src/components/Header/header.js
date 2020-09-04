//import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import "./header.scss"
import Navigation from "../Navigation/nav"
import { Link } from "gatsby"

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuToggle = () => {
    setMenu(!menu)
  }

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }
    console.log(scrolled)
    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <>
      <header className={scrolled ? "scroll " : ""}>
        <div className="container-fluid">
          <div className="d-flex row justify-content-center">
            <div className="col-lg-12 d-flex justify-content-between">
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo-blue.svg" />
                </Link>
              </div>
              <div className="menu d-flex align-items-center">
                <a href="#" onClick={menuToggle}>
                  <img src="/images/menu.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation menu={menu} menuToggle={menuToggle} />
    </>
  )
}

export default Header
