import React, { Component } from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import Img from "react-cool-img"
import "./portfolioSlider.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function PortfolioSlider() {
  const [nav, setNav] = React.useState(null)
  let interval

  let slider1 = []

  React.useEffect(() => {
    setNav(slider1)
  }, [slider1])

  const next = () => {
    slider1.slickNext()
  }

  const previous = () => {
    slider1.slickPrev()
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-12 slider-wrap">
          <Slider
            {...settings}
            asNavFor={nav}
            ref={slider => (slider1 = slider)}
          >
            <div key={1}>
              <Link
                to="/work/lineage-journey"
                className="Work_list"
                data-aos="fade-up"
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
                  <source
                    src="videos/Lineage.webm"
                    type="video/webm"
                    className="img-height"
                  />
                </video>
              </Link>
            </div>
            <div key={2}>
              <Link to="/work/cryptox" className="Work_list" data-aos="fade-up">
                <video
                  muted
                  playsInline
                  crossOrigin
                  loop
                  poster
                  preload="auto"
                  autoPlay
                >
                  <source
                    src="videos/Cryptox.webm"
                    type="video/webm"
                    className="img-height"
                  />
                </video>
              </Link>
            </div>
            <div key={3}>
              <Link to="/work" className="Work_list" data-aos="fade-up">
                <video
                  muted
                  playsInline
                  crossOrigin
                  loop
                  poster
                  preload="auto"
                  autoPlay
                >
                  <source
                    src="videos/Newstart.webm"
                    type="video/webm"
                    className="img-height"
                  />
                </video>
                {/* <div className="Work_list_title">Newstart</div>
                <div className="Work_list_description">
                  UI/UX, Front-end, CMS
                </div> */}
              </Link>
            </div>
            <div key={4}>
              <Link
                to="/work/youth-summit"
                className="Work_list"
                data-aos="fade-up"
              >
                <div className="media-container">
                  <Img
                    src="/images/Youth-Summit.png"
                    alt="Youth Summit"
                    className="img-height"
                  />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
                {/* <div className="Work_list_title">Youth Summit</div>
                <div className="Work_list_description">
                  UI/UX, Front-end, CMS
                </div> */}
              </Link>
            </div>
            <div key={5}>
              <Link
                to="/work/childrens-century-classics"
                className="Work_list"
                data-aos="fade-up"
              >
                <div className="media-container">
                  <Img
                    src="/images/Children's-Century.png"
                    alt="Children's Century Classics"
                    height="700px"
                    className="img-height"
                  />
                </div>
              </Link>
            </div>
            <div key={6}>
              <Link to="/work/fhcb" className="Work_list" data-aos="fade-up">
                <div className="media-container">
                  <Img
                    src="/images/Family-Home-Christian-Books.png"
                    alt="Family Home Christian Books"
                    className="img-height"
                    height="700px"
                  />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
              </Link>
            </div>
            <div key={7}>
              <Link
                to="/work/corniche"
                className="Work_list"
                data-aos="fade-up"
              >
                <div className="media-container">
                  <Img
                    src="/images/Corniche-Watches.png"
                    alt="Corniche Watches"
                    className="img-height"
                  />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
              </Link>
            </div>
            <div key={8}>
              <Link
                to="/work/plate-app"
                className="Work_list mb123"
                data-aos="fade-up"
              >
                <div className="media-container">
                  <Img
                    src="/images/Plate-App.png"
                    alt="Plate App"
                    className="img-height"
                  />
                  <span className="open-case">
                    open <br />
                    case
                  </span>
                </div>
              </Link>
            </div>
          </Slider>
          <button
            id="previous"
            className="button button-prev"
            onClick={() => previous()}
          >
            Previous
          </button>
          <button
            id="next"
            className="button button-next"
            onClick={() => next()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
