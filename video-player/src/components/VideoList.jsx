import React, { useEffect, useState } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {getVideos} from '../Redux/videos/action'
import VideoCard from './VideoCard'
import {Link} from 'react-router-dom'
import Pagination from './Pagination'


const VideoList = () => {

  const [buttons, setButtons] = useState(0)
  const [limit, setLimit] = useState(10)

    const {videos, dataLength} = useSelector((store)=>{
      return {
        videos: store.videos.data,
        dataLength: store.dataLength
      }
    }, shallowEqual)

    const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(getVideos(buttons, limit));
      // console.log(videos);
    },[buttons])
    // console.log(dataLength);
    
  return (
    <>
      <h1 className="bg-black text-gray-200 flex justify-center items-center text-3xl font-bold py-3">Explore Videos</h1>
      <div className='bg-gray-900 grid grid-cols-2  ' >
          {videos && videos.posts.map((el, i)=>{
            return (
              <div key={i} >
                      <VideoCard {...el} />
                  </div>
              )
            })}
      </div>
      {/* <Pagination buttons={buttons} limit={limit} setButtons={setButtons}  /> */}
    </>
  )
}

export default VideoList

