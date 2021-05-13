import React from "react"
import { cardData } from "./maintenance.data"
import Card from "./Maintenance.card"
import "./Maintenance.scss"

const Maintenance = () => {
  return (
    <div className="wp-maintain">
      <div className="container-fluid wp-maintain__inner">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="wp-maintain__heading">WordPress Maintenance</div>
            <div className="wp-maintain__title-wrapper">
              <div className="wp-maintain__title">
                <h2>Comprehensive WordPress <span>Maintenance Service</span></h2>
              </div>
              <div className="wp-maintain__billed">
                <span>Billed yearly</span> Billed Monthly
              </div>
            </div>
            <div className="wp-maintain__card-wrapper">
              {cardData.length &&
                cardData.map((item, index) => (
                  <Card
                    title={item.title}
                    rate={item.rate}
                    services={item.services}
                    key={`card-${index}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maintenance
