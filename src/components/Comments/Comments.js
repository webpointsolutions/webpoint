import React, { useEffect, useState } from 'react'
import { filter, isEqual, sortBy, isEmpty } from 'lodash'
import moment from 'moment'
import { tz } from 'moment-timezone'
import { fetchCommentsByPost, postComment } from '../../api/blogs'
import "./comments.scss"

const getTimeDifference = (pastTime) => {
    const now = moment()
    const then = moment(pastTime)
    var diff = now.diff(then, 'minute')
    var unit = "minutes"
    if ((diff) > 59) {
        diff = now.diff(then, 'hours')
        diff === 1 ? unit = "hour" : unit = "hours"
        if (diff > 23) {
            diff = now.diff(then, 'days')
            diff === 1 ? unit = "day" : unit = "days"
        }
    }
    console.log(tz(now, "Asia/Kathmandu").utcOffset(345))
    return `${diff} ${unit} ago`
}

const ReplyHandler = ({ item, onReload, levelOne = false }) => {
    const [reply, setReply] = useState(levelOne)
    const [comment, setComment] = useState({ name: "", email: "", comment: "" })

    const handleReplyPosting = async (request) => {
        const response = await postComment(request)
        console.log("Post Comment :", response)
        if (response.status === 201) {
            onReload(false)
        } else {
            console.log(response.statusText)
        }

    }

    return (
        <div className="cmt-reply-holder">
            {!reply ?
                <div
                    className="cmt-reply"
                    onClick={() => {
                        setReply({
                            author_name: ""
                        })
                    }}
                >
                    <p>Reply</p>
                </div> :
                <div>
                    <textarea
                        onChange={(e) => setComment({ ...comment, name: e.target.value })}
                        value={comment.name}
                        placeholder="Name" />
                    <textarea
                        onChange={(e) => setComment({ ...comment, email: e.target.value })}
                        value={comment.email}
                        placeholder="Email" />
                    <textarea
                        onChange={(e) => setComment({ ...comment, comment: e.target.value })}
                        value={comment.comment}
                        placeholder="Comment" />
                    <p
                        className="send-btn"
                        onClick={() => {
                            handleReplyPosting({ ...comment, parent: levelOne ? 0 : item.id, post: item.post })
                        }}
                    >{`Send It`}</p>
                </div>
            }
            {reply && !levelOne && <div
                className="cancel-holder"
                onClick={() => {
                    setReply(null)
                }}
            >
                <svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192m0 128l128-128"></path></svg>
            </div>}
        </div>
    )
}

const CommentsComponent = ({ postId, onChangeComments, order = "asc" }) => {
    const [uncategorisedComments, setUComments] = useState([])
    const [comments, setComments] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [currentOrder, setOrder] = useState(order)

    const createCommentTree = (_comments_copy, sortOrder = "asc") => {
        var categorised_comments = []
        _comments_copy.sort((a, b) => a.parent - b.parent)

        console.log("Comment arranged: ", _comments_copy)
        _comments_copy.forEach((comment, index) => {
            if (comment.parent === 0) {
                categorised_comments.push(comment)
            }
        })
        const filterNAddToTree = (parent_id, children_list) => {
            var _list = []
            var _children_list_copy = Object.assign([], children_list)
            var index_to_be_removed = []
            children_list.forEach((child, index) => {
                if (isEqual(child.parent, parent_id)) {
                    _list.push(child)
                    index_to_be_removed.push(index)
                }
            })
            if (!isEmpty(index_to_be_removed)) {
                index_to_be_removed.forEach(_index => {
                    _children_list_copy.splice(_index, 1)
                })
            }
            if (!isEmpty(_list)) {
                _list.forEach((_child, index) => {
                    _list[index]["comments"] = filterNAddToTree(_child.id, _children_list_copy)
                })
                return _list
            } else {
                return []
            }

        }
        var c_tree = categorised_comments.map((comment, index) => {
            return { ...comment, comments: filterNAddToTree(comment.id, _comments_copy) }
        })

        console.log(c_tree, categorised_comments)
        return c_tree
    }
    const fetchArticleComments = async (postId) => {
        const _comments = await fetchCommentsByPost(postId)

        if (_comments.status === 200) {
            onChangeComments(_comments.data.length)
            setUComments(_comments.data)
            let categorised_comments = createCommentTree(Object.assign([], _comments.data))
            setComments(categorised_comments)
            setLoaded(true)
        }
    }

    useEffect(() => {
        !loaded && fetchArticleComments(postId)
    }, [loaded])

    useEffect(() => {
        if (order === "asc") {
            setLoaded(false)
            let categorised_comments = Object.assign([], comments)
            categorised_comments.sort((a, b) => new Date(a.date) - new Date(b.date))
            setComments(categorised_comments)
            setOrder("desc")
            setLoaded(true)
        } else if (loaded && order === "desc") {
            setLoaded(false)
            let categorised_comments = Object.assign([], comments)
            categorised_comments.sort((a, b) => new Date(b.date) - new Date(a.date))
            setComments(categorised_comments)
            setOrder("asc")
            setLoaded(true)

        }
    }, [order, currentOrder, uncategorisedComments])

    const CommentTreeNode = (item, depth, setReload) => {
        // const [focused, setFocused] = useState(null)
        return (
            <div className={`cmt-obj depth-${depth}`}>
                <div className="cmt-top">
                    {/* <div className="cmt-img">
                        <img src={Object.values(item.author_avatar_urls)[2]} alt="user" />
                    </div> */}
                    <div>
                        <p className="cmt-author">{item.author_name}</p>
                        <p className="cmt-time">{getTimeDifference(item.date)}</p>
                    </div>
                </div>
                <div className="cmt-text" dangerouslySetInnerHTML={{ __html: item.content.rendered }}>

                </div>
                <ReplyHandler
                    focused={item.id}
                    item={item}
                    onReload={setReload}
                    onFocus={(id) => {

                    }}
                />
                {
                    item.comments && item.comments.map(cmt => CommentTreeNode(cmt, depth + 1, setReload))
                }
            </div>
        )
    }
    return (
        <div className="cmt-body">
            {loaded ?
                <div>
                    {comments.map(comment =>
                        <div>
                            {CommentTreeNode(comment, 0, setLoaded)}
                        </div>
                    )
                    }
                    <div className="reply-global">
                        <p>Post a reply</p>
                        <ReplyHandler
                            item={{ post: postId }}
                            onReload={setLoaded}
                            levelOne
                        />
                    </div>
                </div> :
                <div className="loader-container">
                    <div className="loader">

                    </div>
                </div>
            }
        </div>
    )
}
export default CommentsComponent