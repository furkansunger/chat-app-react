import { SETCURRENTCHANNEL } from "./actionTypes"

export const setCurrentChannel = channel => {
    return {
        type: SETCURRENTCHANNEL,
        payload: channel
    }
}