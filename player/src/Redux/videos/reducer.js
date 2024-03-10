import { SINGLE_VIDEO_SUCCESS, VIDEO_SUCCESS } from './actionTypes'

const initialState = {
    videos: [],
    singleVideo: null
}

export const reducer = (state = initialState, {type, payload}) => {
    
    switch (type){
        
        case VIDEO_SUCCESS: {
            return {...state, videos: payload}
        }

        case SINGLE_VIDEO_SUCCESS: {
            return {...state, singleVideo: payload}
        }

        default: {return state}
    }

}
