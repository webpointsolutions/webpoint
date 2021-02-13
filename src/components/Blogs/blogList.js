import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import LazyImage from "../FeaturedBlog/lazyImage"

const BlogCard = ({ image, title, tag, date, slug }) => {
  const formattedDate = moment(date).format("MMMM DD, YYYY")
  return (
    <div className="blog-card">
      <Link to={`/article?q=${slug}`} className="no-decoration">
        <div>
          <LazyImage
            type={image.type}
            value={image.value}
            containerClass="card-img-holder"
            imgClass="card-image"
          />
        </div>
        <div>
          <div className="card-subtitle">
            <p className="card-tag">{tag}</p>
            <div className="dot-div"></div>
            <p className="card-date">{formattedDate}</p>
          </div>
          <p className="card-title">{title}</p>
        </div>
      </Link>
    </div>
  )
}

const BlogList = ({ items }) => {
  return (
    <div className="wrap-container">
      {items.map((item, index) => (
        <BlogCard
          image={item.image}
          title={item.title}
          tag={item.tags}
          date={item.date}
          slug={item.slug}
        />
      ))}
    </div>
  )
}

export default BlogList
