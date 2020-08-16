import React from "react"
import "./heroVideo.scss"

const HeroVideo = () => (
  <section className="HeroVideo">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="HeroVideo_text" data-sal="slide-up">
            <h1>
              We are a full service web & mobile applications development
              company
            </h1>
            <a href="#">Let’s work together</a>
          </div>
        </div>
        <div className="col-lg-11">
          <div className="HeroVideo_video">
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
