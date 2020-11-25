import React, { useRef, useEffect, useState } from 'react'
import Lottie from 'lottie-react-web'
import animation from '../../../static/json/splashAnim.json'
import './style.scss'

const SplashScreen = ({ children }) => {
    const [loaded, setLoaded] = useState(false)
    const [fade, setFade] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setFade(true)
        }, 1000)
    }, [])

    useEffect(() => {
        if(fade){
            setTimeout(() => {
                setLoaded(true)
            }, 300)
        }
    }, [fade])


    return (
        <div>
            {loaded ? children :
                <div className={`anim-container ${fade&&"fade"}`}>
                    <Lottie
                        options={{
                            animationData: animation,
                            autoplay: true,
                            loop: false
                        }}
                    />
                </div>
            }
        </div>
    )
}
export default SplashScreen