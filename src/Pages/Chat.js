import React from 'react'
import Sidebar from '../components/Sidebar'

const Chat = () => {
    return (
        <div className="row w-100 h-100 m-0">
            <div className="col-lg-3">
                <Sidebar />
            </div>
            <div className="col-lg-9 bg-success"></div>
        </div>
    )
}

export default Chat
