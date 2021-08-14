import { combineReducers } from "redux";
import {reducer as firebase} from "react-redux-firebase";
import channelReducers from "./reducers/channelReducers";

const rootReducer = combineReducers({
    firebase,
    channels: channelReducers
})

export default rootReducer;