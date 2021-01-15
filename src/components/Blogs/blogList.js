import React from 'react'
import moment from 'moment'
import LazyImage from '../FeaturedBlog /lazyImage'

const BlogCard = ({ image, title, tag, date }) => {
    const formattedDate = moment(date).format('MMMM DD, YYYY')
    return (
        <div className="blog-card">
            <div>
                <LazyImage type={image.type} value={image.value} containerClass="card-img-holder" imgClass="card-image" />
            </div>
            <div>
                <div className="card-subtitle">
                    <p className="card-tag">{tag}</p>
                    <div className="dot-div"></div>
                    <p className="card-date">{formattedDate}</p>
                </div>
                <p className="card-title">{title}</p>
            </div>
        </div>
    )
}


const BlogList = ({ items }) => {
    return (
        <div className="wrap-container">
            {items.map((item, index) =>
                <BlogCard
                    image={item.image}
                    title={item.title}
                    tag={item.tags}
                    date={item.date}
                />
            )}
        </div>
    )
}

export default BlogList