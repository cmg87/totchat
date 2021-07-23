import React , { useContext } from 'react';
import { SocketContext } from "./SocketContext";


const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return(
        <div>
            {stream && (
                <div><video playsInline={true} muted={true} ref={myVideo} autoPlay={true}/></div>
            )}
            <div className="player"><video playsInline={true} ref={userVideo} autoPlay={true}/></div>
        </div>
    )
}

export default VideoPlayer;