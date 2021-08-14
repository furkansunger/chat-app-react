import { SETCURRENTCHANNEL } from "../actions/actionTypes";

const initialState = {
    currentChannel: null
}

export default function channelReducers(state = initialState, action) {
    switch (action.type) {
        case SETCURRENTCHANNEL:
            return {
                ...state,
                currentChannel: action.payload
            }
    
        default:
            return state;
    }
}