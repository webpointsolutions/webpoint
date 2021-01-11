import React, { Component } from "react"
import Slider from "react-slick"
import "./agencySlider.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function AgencySlider() {
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
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: "ondemand",
    autoPlay: true,
    autoplaySpeed: 500,
    slidesToShow: 2,
    pauseOnHover: false,
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
      <div className="row justify-content-end">
        <div className="col-lg-11 slider-wrap">
          <Slider
            {...settings}
            //rtl={rtl}
            asNavFor={nav}
            ref={slider => (slider1 = slider)}
          >
            <div key={1}>
              <img src="/images/banner-1.png" alt="Project 1" />
            </div>
            <div key={2}>
              <img src="/images/banner-2.png" alt="Project 2" />
            </div>
            <div key={3}>
              <img src="/images/banner-3.png" alt="Project 3" />
            </div>
            <div key={4}>
              <img src="/images/banner-4.png" alt="Project 4" />
            </div>
            <div key={5}>
              <img src="/images/banner-5.png" alt="Project 5" />
            </div>
          </Slider>
          <button
            id="previous"
            className="button button-prev"
            onMouseOver={() => (interval = setInterval(previous, 1000))}
            onMouseOut={() => clearInterval(interval)}
          >
            Previous
          </button>
          <button
            id="next"
            className="button button-next"
            onMouseOver={() => (interval = setInterval(next, 1000))}
            onMouseOut={() => clearInterval(interval)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
