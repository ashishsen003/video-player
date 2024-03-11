import React from 'react'
import {Link} from 'react-router-dom'

const VideoCard = ({ postId, submission }) => {
    // if (!submission) {
    //   return null; // or handle loading state
    // }
  
    return (
      <Link to={`/video/${postId}`} className='flex m-3 p-3 bg-black rounded-lg border border-gray-700 hover:bg-transparent group relative  duration-2000'>

        <div className='w-full border border-gray-600 rounded-lg'>
          <img src={submission.thumbnail} alt="thumbnail" className='rounded-lg' />
        </div>

        <div className='px-5'>
          <h1 className='text-white font-medium '>{submission.title}</h1>
          <p className='text-gray-400 text-sm overflow-hidden'>{submission.description}</p>
          <p className='text-white relative inset-1/4 hidden group-hover:block animate-bounce'>Click to play</p>
        </div>

      </Link>
    );
  };
  

export default VideoCard

