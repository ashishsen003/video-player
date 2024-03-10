import axios from 'axios'
import { VIDEO_FAILURE, VIDEO_LOADING, VIDEO_SUCCESS } from './actionTypes';

export const getVideos = (dispatch)=>{

    dispatch({type: VIDEO_LOADING})
    
     axios.get(`https://internship-service.onrender.com/videos?page=2`)
    .then((res)=>{
        dispatch({type: VIDEO_SUCCESS, payload: res.data})
        // console.log(res.data);
        // return res
    })
    .catch((err)=>{
        dispatch({type: VIDEO_FAILURE})
        console.log(err);
    })
    
}