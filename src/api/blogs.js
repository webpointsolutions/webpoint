import axios from 'axios'

const BASE_URL = "http://blog.webpoint.io/wp-json/wp/v2/"

export const fetchBlogPosts = async () => {
    return await axios.get(`${BASE_URL}posts`)
}

export const fetchBlogCategories = async () => {
    return await axios.get(`${BASE_URL}categories`)
}