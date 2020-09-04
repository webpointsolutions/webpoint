import React from "react"
import "./heroVideo.scss"
import { Link } from "gatsby"

const HeroVideo = () => (
  <section data-aos="fade-up" className="HeroVideo">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="HeroVideo_text">
            <h1 data-aos="fade-up" data-aos-duration="800">
              We are a full service web &amp; mobile applications development
              company
            </h1>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Link to="/contact">Let’s work together</Link>
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
)

export default HeroVideo
