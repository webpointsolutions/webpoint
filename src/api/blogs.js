import axios from 'axios'
import moment from 'moment'

const BASE_URL = "https://blog.webpoint.io/wp-json/wp/v2/"

export const fetchBlogPosts = async (tag=null, order="desc") => {
    let FULL_URL = `${BASE_URL}posts?orderby=date&order=${order}`
    if(tag) {
        FULL_URL+=`&tags=${tag}`
    }
    return await axios.get(FULL_URL)
}

export const fetchBlogCategories = async () => {
    return await axios.get(`${BASE_URL}categories`)
}

export const fetchFeaturedMedia = async (mediaId) => {
    return await axios.get(`${BASE_URL}media/${mediaId}`)
}

export const fetchBlogTags = async () => {
    return await axios.get(`${BASE_URL}tags`)
}

export const fetchPostBySlug = async (slug) => {
    return await axios.get(`${BASE_URL}posts?slug=${slug}`)
}

export const fetchCommentsByPost = async (postId) => {
    return await axios.get(`${BASE_URL}comments?post=${postId}`)
}

export const postComment = async ({name, email, comment, parent, post}) => {
    const formData = new FormData()
    formData.append("author_name", name)
    formData.append('author_email', email)
    formData.append('content', comment)
    formData.append('parent', parent)
    formData.append('post', post)
    // formData.append('date', moment().format("YYYY-MM-DDTHH:MM:SS"))
    return await axios.post(`${BASE_URL}comments`, formData)
}