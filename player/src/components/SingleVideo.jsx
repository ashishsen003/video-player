// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import VideoCard from './VideoCard'

// const SingleVideo = () => {

//     const [singleVideo, setVideoSingle] = useState({})
//     const {postId} = useParams()
//     const videos = useSelector((store)=>store.videos.data)

//     // console.log(postId);
    
//     useEffect(()=>{
//         const filteredVideo = videos.posts.find((el)=> el.postId == postId)
//         setVideoSingle(filteredVideo)
//         console.log(videos);
//     },[])
//     // console.log(videos.postId);
//     console.log(videos);

//   return (
//     <div>
//         {singleVideo && <VideoCard {...singleVideo} />}
//     </div>
//   )
// }

// export default SingleVideo

