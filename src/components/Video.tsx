import React from 'react'
import bangkokVideo from './../assets/videos/bangkok-video1.mp4'
import type { VideoProps } from '../interfaces/components/video'

const Video: React.FC<VideoProps> = ({ children }) => {
  return (
    <div className='bg-video'>
      <video src={bangkokVideo} autoPlay loop muted></video>
      {children}
    </div>
  )
}

export default Video
