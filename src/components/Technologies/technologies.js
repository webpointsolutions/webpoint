import React, { useState } from "react"
import TechList from "./tech"
import { filter } from "lodash"
import "./style.scss"

const Technologies = props => {
  const renderTopics = (active, setActive) => {
    return (
      <ul className="topic-container">
        {Object.keys(TechList).map((item, index) => (
          <li
            key={`title-${index}`}
            className={`${index + 1 === active ? "active" : ""} topic`}
            onClick={() => {
              setActive(index + 1)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    )
  }

  const [selTopic, setTopic] = useState(1)
  const renderTopicContaint = topic => {
    const topicC = filter(Object.values(TechList), item => item.id === topic)[0]
    console.log(topicC)
    return (
      <div className="tech-c">
        {topicC.list.map((item, index) => (
          <div key={`item-${index}`} className="tech-item">
            <div className="tech-img">
              <img src={item.icon} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <section className="technology">
      <div className="container-fluid">
        <div className="tech-container row justify-content-center ">
          <div className="col-lg-10">
            <div className="tech-title">
              <p>Technologies we work with</p>
            </div>
            <div className="tech-choices">
              {renderTopics(selTopic, setTopic)}
            </div>
            <div className="tech-stacks">{renderTopicContaint(selTopic)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
