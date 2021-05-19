import React from "react"
import "./style.scss"
import corniche from "./svgfiles/corniche.png"
import ccc from "./svgfiles/ccc.png"

import jiwit from "./svgfiles/bachan.png"
import cryptox from "./svgfiles/cryptox.png"
import plate from "./svgfiles/plate.png"
import sweetsanity from "./svgfiles/sweet.png"
import fhcb from "./svgfiles/family.png"
import youth from "./svgfiles/youth.png"
import lineagepng from "./svgfiles/lineage.png"

const TestPortfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <span className="works">Our Work</span>
      <span className="view-works">View all works</span>
      <div className="portfolio-box">
        <img src={youth} draggable="false" />
        <img src={corniche} draggable="false" />

        <img src={ccc} draggable="false" />

        <img src={lineagepng} draggable="false" />
        <img src={cryptox} draggable="false" />
        <img src={jiwit} draggable="false" />
        <img src={plate} draggable="false" />
        <img src={sweetsanity} draggable="false" />
        <img src={fhcb} draggable="false" />
      </div>
    </div>
  )
}

export default TestPortfolio
