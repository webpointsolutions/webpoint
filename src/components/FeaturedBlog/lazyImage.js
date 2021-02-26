import React, { useEffect, useState } from "react"
import { fetchFeaturedMedia } from "../../api/blogs"

const LazyImage = ({ type, value, containerClass, imgClass }) => {
  const [loaded, setLoaded] = useState(false)
  const [media, setMedia] = useState()

  const fetchMedia = async mediaId => {
    try {
      const featured_image = await fetchFeaturedMedia(mediaId)
      setMedia(featured_image.data.guid.rendered)
      setLoaded(true)
    } catch (error) {
      console.log("fetchMedia", error)
    }
  }

  useEffect(() => {
    if (type === "id") {
      console.log("value", value)
      fetchMedia(value)
    } else {
      setMedia(value)
      setLoaded(true)
    }
  }, [])

  console.log("type", type)

  return (
    <div className={containerClass}>
      {loaded ? (
        <img src={media} alt="" className={imgClass} />
      ) : (
        <div className={`${containerClass} loading`}></div>
      )}
    </div>
  )
}

export default LazyImage
