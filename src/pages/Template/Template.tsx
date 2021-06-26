import React, { useEffect } from 'react'
import { sendToServer, socket } from '../../api/socket/socketHelper';

const Template = () => {

    useEffect(() => {
        // Emit message
        sendToServer("join", {hey: "hey"});

        // Exit socket when listen ends
        return () => {
            socket.off();
          };
    }, []);

    useEffect(() => {
        // Listen to action
        socket.on("FriendConnected", (data) => {
            console.log(data);
        })
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Template
