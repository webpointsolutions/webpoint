import React from "react"
import "./style.scss"
import YouthSummit from "./svgfiles/youth-summit.svg"
import corniche from "./svgfiles/corniche.svg"
import ccc from "./svgfiles/ccc.svg"
import lineage from "./svgfiles/lineage.svg"
import jiwit from "./svgfiles/jiwit-bachan.svg"
import cryptox from "./svgfiles/cryptox.svg"
import plate from "./svgfiles/plate.svg"
import sweetsanity from "./svgfiles/sweetsanity.svg"
import fhcb from "./svgfiles/fhcb.svg"
import youth from "./svgfiles/youth.svg"

const TestPortfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <span className="works">Our Work</span>
      <span className="view-works">View all works</span>
      <div className="portfolio-box">
        <img src={youth} />
        <img src={corniche} />
        <img src={ccc} />
        <img src={lineage} />
        <img src={cryptox} />
        <img src={jiwit} />
        <img src={plate} />
        <img src={sweetsanity} />
        <img src={fhcb} />
      </div>
    </div>
  )
}

export default TestPortfolio
