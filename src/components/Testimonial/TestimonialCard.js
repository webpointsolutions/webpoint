import React from "react"
const TestimonialCard = ({ avatar, desc, desig, name }) => {
  return (
    <div className="t-card">
      <div className="t-card__inner">
        <div className="t-card__header">
          <div className="t-card__avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="t-card__details">
            <div className="t-card__name">{name}</div>
            <div className="t-card__desig">{desig}</div>
          </div>
        </div>
        <div className="t-card__desc">{desc}</div>
      </div>
    </div>
  )
}

export default TestimonialCard
