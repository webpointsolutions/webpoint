import React, { useState } from 'react'
import ArrowDown from '../../../static/images/arrow-down.svg'
import './style.scss'

const TopBar = ({ tags, onTopicChange, onFilterApplied }) => {
    const [selected, setSelected] = useState(1)
    return (
        <div className="b-top-bar">
            <div className="b-top-left">
                {[{ id: 0, name: "Show all", slug: "show all" }].concat(tags).map((tag, index) => <p
                    className={`${selected === index + 1 ? 'active' : ''} f-${index + 1}`}
                    onClick={() => {
                        setSelected(index + 1)
                        onTopicChange(tag)
                    }}
                >
                    {tag.name}
                </p>)}
                {/* <p
                    className={`${selected === 2 ? 'active' : ''} f-2`}
                    onClick={() => {
                        setSelected(2)
                    }}
                >
                    Marketing
                </p>
                <p
                    className={`${selected === 3 ? 'active' : ''} f-3`}
                    onClick={() => {
                        setSelected(3)
                    }}
                >
                    Tech
                </p> */}
            </div>
            <div className="b-top-right">
                <p className="f-4">Filter by</p>
                {/* <p className="f-5">Newest</p> */}
                <select className="f-5 select">
                    <option>Newest</option>
                    <option>Likes</option>
                </select>
                {/* <span className="arrow-holder">
                    <img src={ArrowDown} alt="" height={18}/>
                </span> */}
            </div>
        </div>
    )
}
export default TopBar