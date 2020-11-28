import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react-web'
import animation from '../../../static/json/splashAnim.json'
import './style.scss'

const SplashScreen = ({ children, onAnimCompleted }) => {
    const [loaded, setLoaded] = useState(false)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFade(true)
        }, 10000)
    }, [])

    useEffect(() => {
        if (fade) {
            setTimeout(() => {
                setLoaded(true)
                onAnimCompleted()
            }, 300)
        }
    }, [fade])


    return (
        <div>
            {loaded ? children :
                <div className={`anim-container ${fade && "fade"}`}>
                    <Lottie
                        eventListeners={[
                            {
                                eventName: "complete",
                                callback: (e) => {
                                    console.log("Loaded fired")
                                }
                            }
                        ]}
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