import React from 'react'

const VideoCard = ({postId, submission}) => {

    console.log(submission);

  return 
    (
        <Link to={`/${postId}`} style={{display: 'flex'}}>
            <div style={{width: '15%'}}>
                <img src={submission.thumbnail} alt="thumbnail" style={{width: '100%'}} />
            </div>
            <div>
                <p>{postId}</p>
                <h4>{submission.title}</h4>
                <p>{submission.description}</p>
            </div>
        </Link>
    )
}

export default VideoCard