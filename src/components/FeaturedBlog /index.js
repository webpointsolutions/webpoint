import React, { useEffect, useState } from 'react'
import { fetchBlogPosts, fetchBlogCategories } from '../../api/blogs'
import './style.scss'

const parseHtml = (html, tag, attr) => {
    var dom = new DOMParser()
    var htmlDoc = dom.parseFromString(html, "text/html")
    return htmlDoc.querySelector(tag)[attr]
}

const FeaturedBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [categories, setCategories] = useState(null)
    const fetchBlogs = async () => {
        var b = await fetchBlogPosts()
        console.log(b)
        var blogList = b.data.slice(0,2).map(bl => {
            const cat_names = bl.categories.map(c => {
                return categories.filter(cc => cc.id === c)[0].name
            })
            return {
                title: bl.title.rendered,
                subTitle: cat_names.join(", "),
                image: parseHtml(bl.content.rendered, "img", "src")
            }
        })
        // if()
        setBlogs(blogList)
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
                            {blogs.map(blog =>
                                <div className="blog-item">
                                    <div className="blog-img-holder">
                                        <img src={blog.image} alt={"Blog image"} />
                                    </div>
                                    <p className="b-title">{blog.title}</p>
                                    <p className="b-sub">{blog.subTitle}</p>
                                </div>)}
                        </div>
                        <div className="b-more">
                            <div className="b-m-inner">
                                <p>More Article</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedBlog