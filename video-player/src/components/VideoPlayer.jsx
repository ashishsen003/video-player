import React from 'react'
import ReactPlayer from 'react-player'


const VideoPlayer = ({submission}) => {
    const link = submission.mediaUrl
  return (
    <div className='bg-gray-900 h-screen p-4 flex-col justify-center items-center'>
        <div className='flex justify-center items-center my-2' >
            <ReactPlayer url={submission.mediaUrl} controls playing={true}
                // width="100%"
                // height="100%"
            />
        </div>
        
        <div className='py-2 w-2/4 border-t m-auto my-2'>
            <h4 className='text-white font-medium' >{submission.title}</h4>
            <p className='text-gray-400 text-sm overflow-hidden'>{submission.description}</p>
        </div>
    </div>
  )
}

export default VideoPlayer