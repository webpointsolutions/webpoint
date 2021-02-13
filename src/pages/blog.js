import React, { useState, useEffect, useRef } from "react"
import moment from "moment"
import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"
// import ImageBackground from '../components/ImageBackground'
import SEO from "../components/seo"
import { convertHtmlToDom, parseHtml } from "../utils/utils"
import {
  fetchBlogCategories,
  fetchBlogPosts,
  fetchBlogTags,
} from "../api/blogs"
import "./blog.scss"
import LazyImage from "../components/FeaturedBlog/lazyImage"
import TopBar from "../components/Blogs/topNav"
import BlogList from "../components/Blogs/blogList"
import { Link } from "gatsby"

const Blog = props => {
  const [loaded, setLoaded] = useState(false)
  const [categories, setCategories] = useState(null)
  const [tags, setTags] = useState(null)
  const [featured, setFeatured] = useState([])
  const [blogs, setBlogs] = useState([])
  const [tagChoice, setTagChoice] = useState(null)
  const [orderChoice, setOrderChoices] = useState(null)
  const [blogLoading, setBlogLoading] = useState(false)

  const fetchBlogs = async (tag_choice = null, date_order = "desc") => {
    var b = await fetchBlogPosts(tag_choice, date_order)
    var blogList = b.data.slice(0, 2).map(bl => {
      const cat_names = bl.categories.map(c => {
        return categories.filter(cc => cc.id === c)[0].name
      })
      const tag_names = bl.tags.map(t => {
        return tags.filter(tt => tt.id === t)[0].name
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
        content: bl.content.rendered,
        slug: bl.slug,
        tags: tag_names,
        date: bl.date,
      }
    })
    return blogList
  }

  const fetchInitialList = async () => {
    const blog_list = await fetchBlogs()
    setBlogs(blog_list)
    setFeatured(blog_list[0])
    setLoaded(true)
  }

  const fetchSubsequentList = async (tag_choice, order) => {
    setBlogLoading(true)
    const blog_list = await fetchBlogs(tag_choice, order)
    setBlogs(blog_list)
    setBlogLoading(false)
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

  const fetchTags = async () => {
    const _tags = await fetchBlogTags()
    if (_tags.status === 200) {
      let _tagsList = _tags.data.map(tag => ({
        name: tag.name,
        slug: tag.slug,
        id: tag.id,
      }))
      setTags(_tagsList)
    }
  }
  useEffect(() => {
    fetchTags()
    fetchCategories()
  }, [])

  useEffect(() => {
    if (categories && tags) {
      fetchInitialList()
    }
  }, [categories, tags])

  useEffect(() => {
    if (loaded) {
      fetchSubsequentList(tagChoice, orderChoice ? "desc" : "asc")
    }
  }, [tagChoice, orderChoice, loaded])

  console.log(props)

  return (
    <div>
      <Header />
      <SEO
        title="Webpoint Blog"
        description="The Webpoint blog focuses on various design and development tutorials. You will find actionable tips and helpful resources on web performance and security, UX/UI Design, best technologies, and much more..."
      />
      <section id="blog-main">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="d-flex b-outer">
              <div>
                {loaded ? (
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="b-inner">
                      <div className="col-lg-8">
                        <p className="top-title">Webpoint Blog</p>
                      </div>
                    </div>
                    <div className="b-overlay-container">
                      <div className="featured-image-container">
                        <LazyImage
                          type={featured.image.type}
                          value={featured.image.value}
                          containerClass="featured-image-container"
                          imgClass="feat-image"
                        />
                      </div>
                      <div className="b-overlay">
                        <div className="col-md-8">
                          <div className="overlay-top">
                            <div className="featured-text">
                              <p>Featured</p>
                            </div>
                            <p className="feat-topic">{featured.tags}</p>
                            <p className="feat-date">
                              {moment(featured.date).format("MMMM DD, YYYY")}
                            </p>
                          </div>
                          <Link to={`/article?q=${featured.slug}`}>
                            <p className="feat-title">{featured.title}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      {/* Header Options */}
                      <TopBar
                        tags={tags}
                        onTopicChange={t => {
                          const id = t.id === 0 ? "" : t.id
                          setTagChoice(id)
                        }}
                        onFilterApplied={() => {}}
                      />
                      {blogLoading ? (
                        <div className="loader-container-mini">
                          <div className="loader"></div>
                        </div>
                      ) : (
                        <BlogList items={blogs} />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Blog
