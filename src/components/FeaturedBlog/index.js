import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import {
  fetchBlogPosts,
  fetchBlogCategories,
  fetchFeaturedMedia,
} from "../../api/blogs"
import { parseHtml } from "../../utils/utils"
import LazyImage from "./lazyImage"
import "./style.scss"

const FeaturedBlog = ({ navigate }) => {
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories] = useState(null)

  const fetchBlogs = async () => {
    var b = await fetchBlogPosts()
    var blogList = b.data.slice(0, 2).map(bl => {
      const cat_names = bl.categories.map(c => {
        return categories.filter(cc => cc.id === c)[0].name
      })
      return {
        title: bl.title.rendered,
        subTitle: cat_names.join(", "),
        image:
          bl.featured_media !== 0
            ? { type: "id", value: bl.featured_media }
            : {
                type: "src",
                value: parseHtml(bl.content.rendered, "img", "src"),
              },
        slug: bl.slug,
      }
    })
    setBlogs(blogList)
  }

  const fetchCategories = async () => {
    const _categories = await fetchBlogCategories()
    if (_categories.status === 200) {
      let _categoriesList = _categories.data.map(cat => ({
        name: cat.name,
        id: cat.id,
      }))
      setCategories(_categoriesList)
    }
  }
  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    if (categories) {
      fetchBlogs()
    }
  }, [categories])

  return (
    <section className="featured-blog">
      <div className="container-fluid">
        <div className="fb-container row justify-content-center">
          <div className="col-lg-10">
            <div className="fb-title">
              <p>Featured blogs</p>
            </div>
            <div className="blog-list">
              {blogs.map(blog => (
                <Link to={`/article?q=${blog.slug}`} className="blog-item">
                  <div className="blog-item-inner">
                    <div className="blog-img-holder">
                      <LazyImage
                        type={blog.image.type}
                        value={blog.image.value}
                        containerClass="img-holder"
                      />
                    </div>
                    <p className="no-outline b-title">{blog.title}</p>
                    <p className="no-outline b-sub">{blog.subTitle}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="b-more">
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <div className="b-m-inner">
                  <p> More Article</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlog
