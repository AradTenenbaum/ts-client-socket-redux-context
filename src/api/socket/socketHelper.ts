import io, { Socket } from "socket.io-client";
import { URL } from "../serverDetails";


export let socket: Socket;
socket = io(URL);

export const sendToServer = (type: string, data: {}) => {
    socket.emit(type, data);
};