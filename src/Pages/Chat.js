import React from 'react'
import { useSelector } from 'react-redux'
import ChatPanel from '../components/ChatPanel';
import Sidebar from '../components/Sidebar'

const Chat = () => {
    const currentChannel = useSelector(state => state.channels.currentChannel);
    console.log(currentChannel);
    return (
        <div className="row w-100 h-100 m-0">
            <div className="col-lg-3 col-md-3">
                <Sidebar />
            </div>
            <div className="col-lg-9 col-md-9 p-0 border-start">
                {
                    currentChannel && <ChatPanel currentChannel={currentChannel} />
                }
            </div>
        </div>
    )
}

export default Chat
