import React, { useEffect, useState } from 'react'
import { fetchFeaturedMedia } from '../../api/blogs'

const LazyImage = ({ type, value, containerClass, imgClass }) => {
    const [loaded, setLoaded] = useState(false)
    const [media, setMedia] = useState()

    const fetchMedia = async (mediaId) => {
        const featured_image = await fetchFeaturedMedia(mediaId)
        setMedia(featured_image.data.guid.rendered)
        setLoaded(true)
    }

    useEffect(() => {
        if (type === "id") {
            fetchMedia(value)
        } else {
            setMedia(value)
            setLoaded(true)
        }
    }, [])
    return (
        <div className={containerClass}>
            {loaded ?
                <img src={media} alt="Some Value" className={imgClass}/> :
                <div className={`${containerClass} loading`}></div>
            }
        </div>
    )
}

export default LazyImage