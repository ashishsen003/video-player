import axios from "axios";
import { VIDEO_FAILURE, VIDEO_LOADING, VIDEO_SUCCESS } from "./actionTypes";

export const getVideos = (params) => (dispatch) => {

  dispatch({ type: VIDEO_LOADING });

  axios.get(`https://internship-service.onrender.com/videos`, params)
    .then((res) => {
        console.log(res.data.data.posts.length);
        
      dispatch({ type: VIDEO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: VIDEO_FAILURE });
      console.log(err);
    });
};
