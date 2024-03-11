import { SINGLE_VIDEO_SUCCESS, VIDEO_FAILURE, VIDEO_LOADING, VIDEO_SUCCESS } from './actionTypes'

const initialState = {
    videos: [],
    loading: false,
    error: false,
    singleVideo: null,
    dataLength: null
}

export const reducer = (state = initialState, {type, payload}) => {
    
    switch (type){
        
        case VIDEO_SUCCESS: {
            return {...state, loading: false, videos: payload, dataLength: payload.data.posts.length}
        }
        
        case VIDEO_FAILURE: {
            return {...state, loading: false, error: true}
        }
        
        case VIDEO_LOADING: {
            return {...state, loading: true}
        }

        case SINGLE_VIDEO_SUCCESS: {
            return {...state, singleVideo: payload}
        }

        default: {return state}
    }

}
