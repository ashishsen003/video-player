import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getVideos} from '../Redux/videos/action'
import VideoCard from './VideoCard'


const VideoList = () => {

    const videos = useSelector((store)=>store.videos.data)
    const dispatch = useDispatch()
  
    useEffect(()=>{
      getVideos(dispatch)
      console.log(videos);
    },[])
    console.log(videos);
    
  return (
    <div>
        {videos && videos.posts.map((el, i)=>{
            return (
                <div key={i}>
                    <VideoCard {...el} />
                </div>
            )
        })}
    </div>
  )
}

export default VideoList

