import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import SEO from '../components/seo'
import LazyImage from '../components/FeaturedBlog /lazyImage'
import { fetchFeaturedMedia, fetchBlogCategories, fetchBlogTags, fetchPostBySlug } from '../api/blogs'
import FB from '../../static/images/icons/fb.svg'
import Twitter from '../../static/images/icons/twitter.svg'
import './article.scss'

const Article = (props) => {
    const param = new URLSearchParams(props.location.search)
    const query = param.get('q')
    const [categories, setCategories] = useState(null)
    const [tags, setTags] = useState(null)
    const [blog, setBlog] = useState()
    const [loaded, setLoaded] = useState(false)

    const fetchBlog = async (query, __categories, __tags) => {
        try {
            var data = await fetchPostBySlug(query)
            if (data.status === 200) {
                let _blog = data.data[0]
                // debugger
                const _blog_categories = _blog.categories.map(cat => {
                    return categories.filter(c => c.id === cat)[0].name
                })
                const _blog_tags = _blog.tags.map(t => {
                    return tags.filter(tt => tt.id === t)[0].name
                })
                _blog.categories = _blog_categories
                _blog.tags = _blog_tags
                console.log(_blog)
                setBlog(_blog)
                setLoaded(true)
            }
        } catch (e) {
            console.warn(e)
        }
    }

    const fetchCategories = async () => {
        const _categories = await fetchBlogCategories()
        if (_categories.status === 200) {
            let _categoriesList = _categories.data.map(cat => ({
                name: cat.name,
                id: cat.id
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
                id: tag.id
            }))
            setTags(_tagsList)

            fetchBlog(query)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        if (categories) {
            fetchTags()
        }
    }, [categories])

    useEffect(() => {
        if (tags) {
            fetchBlog(query, categories, tags)
        }
    }, [categories, tags])

    return (
        <div>
            <Header />
            <SEO title="Article" description="..." />
            {
                loaded ?
                    <>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="blog-top">
                                <div className="col-lg-8 top-title-container">
                                    <div>
                                        {blog.tags.map((tag, index) => <p key={`top-${index}`} className="blog-tags">{tag}</p>)}
                                        <div className="dot-div-blog"></div>
                                        <p className="blog-tags">{moment(blog.date).format("MMMM DD, YYYY")}</p>
                                        <div className="dot-div-blog"></div>
                                        <p className="blog-tags">5 min read</p>
                                    </div>
                                    <div>
                                        <p className="blog-tags top-left-item">share article</p>
                                        <img src={FB} className="blog-top-icon" alt="" />
                                        <img src={Twitter} className="blog-top-icon" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-8 top-title-container">
                                    <p className="b-title">{blog.title.rendered}</p>

                                </div>
                            </div>
                            <div className="b-overlay-container">
                                <div className="featured-image-container">
                                    <LazyImage type={"id"} value={blog.featured_media} containerClass="featured-image-container" imgClass="feat-image" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div
                                    dangerouslySetInnerHTML={{"__html": blog.content.rendered}}
                                >

                                </div>
                            </div>
                        </div>
                    </> :
                    <div className="loader-container">
                        <div className="loader">

                        </div>
                    </div>
            }
            <Footer />
        </div>

    )
}

export default Article