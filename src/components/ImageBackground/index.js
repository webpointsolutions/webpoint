import React from 'react'
import './style.scss'

const ImageBackground = (props) => {
    return (
        <div
            className="img-bg-main"
            style={{backgroundImage: props.image}}
        >
            {children}
        </div>
    )
}

export default ImageBackground