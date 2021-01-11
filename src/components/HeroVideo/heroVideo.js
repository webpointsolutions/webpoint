import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "./heroVideo.scss"
const HeroVideo = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1200)
  }, [])

  return (
  <section data-aos="fade-up" className="HeroVideo">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="HeroVideo_text">
            <h1 data-aos="fade-up" data-aos-duration="800">
              Your Web & Mobile App Development Partner - Empowered By Innovation 
            </h1>
            <div data-aos="fade-up" data-aos-duration="1000">
            <Link to="/contact" className={loaded?"loaded-link":""}>Let’s work together</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-11">
          <div
            className="HeroVideo_video"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source src="videos/Webpoint Reel.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

export default HeroVideo
