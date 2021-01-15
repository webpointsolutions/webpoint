import axios from 'axios'

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