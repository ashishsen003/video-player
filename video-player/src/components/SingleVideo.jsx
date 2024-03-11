import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoCard from './VideoCard'
import { SINGLE_VIDEO_SUCCESS } from '../Redux/videos/actionTypes'
import VideoPlayer from './VideoPlayer'

const SingleVideo = () => {

    const {postId} = useParams()
    const videos = useSelector((store)=>store.videos.data)
    const singleVideo = useSelector((store)=>store.singleVideo)
    const dispatch = useDispatch()

    
    useEffect(()=>{
        const filteredVideo = videos.posts.find((el)=> el.postId === postId)
        // if (filteredVideo) {
        //     setData(filteredVideo);
        // }
        dispatch({type: SINGLE_VIDEO_SUCCESS, payload: filteredVideo})

    }, [videos, postId]);
    console.log(singleVideo);

  return (
    <div>
        {singleVideo && <VideoPlayer {...singleVideo} />}
    </div>
  )
}

export default SingleVideo

