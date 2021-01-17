import React, { useEffect, useState } from 'react'
import { filter } from 'lodash'
import { fetchCommentsByPost } from '../../api/blogs'

const CommentsComponent = ({postId}) => {
    const [comments, setComments] = useState([])
    const [loaded, setLoaded] = useState(false)

    const fetchArticleComments = async (postId) => {
        const _comments = await fetchCommentsByPost(postId)
        if(_comments.status === 200) {
            var _comment_tree = {}
             _comments.data.forEach(comment => {
                _comment_tree
            })
        }
    }

    useEffect(() => {
        fetchArticleComments(postId)
    }, [])
    
    return (
        <div>

        </div>
    )
}
export default CommentsComponent