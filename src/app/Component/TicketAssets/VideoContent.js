'use client'
import { useState } from "react";
const VideoContent = () => {
    const [mute,setMute]=useState(false)
    function toggleMute() {
      const video=document.getElementById("promoVideo");
      video.muted = !video.muted;
      setMute(!mute)  
    }
    return (
        <div  className='relative'>
          <p className='vid-alert'><img src='./Shapes/sound.png' alt="" /> &nbsp; Make Sure Your Sound Is Turned On!</p>
          <video id='promoVideo' width="100%" autoPlay muted playsInline>
            <source src='./Shapes/promo.mp4' type="video/mp4"/>
              <source src='./Shapes/promo.mp4' type="video/ogg"/>
                Your browser does not support the video tag.
              </video>
              <img className={`${mute?'unmute2':'unmute'}`} src='./Shapes/sound.gif' alt="" onClick={toggleMute}/>
            </div>
    );
};

export default VideoContent;