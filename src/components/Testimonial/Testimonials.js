import React from "react"
import { Data } from "./TestimonialData"
import Card from "./TestimonialCard"
import "./Testimonials.scss"

const Testimonials = () => {
  return (
    <div className="wp-testimonial">
      <div className="wp-testimonial__inner container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="wp-testimonial__title">
              <h2>Testimonials</h2>
            </div>
            <div className="wp-testimonial__card-wrapper">
              {Data.length &&
                Data.map((item, index) => (
                  <Card
                    avatar={item.avatar}
                    desc={item.desc}
                    desig={item.desig}
                    name={item.title}
                    key={`t-card-${index}`}
                  />
                ))}
            </div>
            <div className="wp-testimonial__cta">
              <a href="#">Show more testimonials</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
