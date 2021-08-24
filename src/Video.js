import React, { useState } from 'react';
import Style from './style.module.css'

function Content({ info }) {
 
    const [playVideo, setPlayVideo] = useState(false)

    const toggle = () => {
        setPlayVideo(!playVideo); 
    }

    return (
        <div className={Style.container}>
        { playVideo && 
            <div className={Style.videoContainer}>
              <video className={Style.video} value={info.id} controls={true} autoPlay={true}><source src={info.video}/></video>
            </div>
        }
            <div className={Style.posterContainer}>
              <img className={Style.poster} value={info.id} onClick={toggle} src={info.image} alt={info.name}/>
              <p>{info.name}</p>
              <p className={Style.description}>{info.description}</p>
            </div>
        </div>
    )
}

export default Content;