import React from "react"
import Logoblue from "../../../static/images/logo-subtract.svg"

const Card = ({ title, rate, services, billingMonthly }) => {
  return (
    <div className="wpm-card">
      <div className="wpm-card__inner">
        <div className="wpm-card__header">
          <div className="wpm-card__title">{title}</div>
          <div className="wpm-card__price">
            <span>{billingMonthly ? rate?.month : rate?.year}</span>
            <span>/</span>{billingMonthly ? "month": "year"}
          </div>
        </div>
        <div className="wpm-card__list">
          {services.length &&
            services.map((item, index) => (
              <div className="wpm-card__list__item" key={`card-item${index}`}>
                <img src={Logoblue} alt="" /> <p>{item}</p>
              </div>
            ))}
        </div>
        <div className="wpm-card__button">
          <div className="services-learn-more">
            <a href="#">Let's Start</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
