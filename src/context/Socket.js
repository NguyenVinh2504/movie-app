import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { API_ROOT } from '~/utils/constants';

export const SocketContext = createContext();
export const useSocket = () => {
    return useContext(SocketContext);
};
function SocketProvider({ children }) {
    const [socket, setSocket] = useState();
    useEffect(() => {
        setSocket(
            io(API_ROOT, {
                withCredentials: true,
            }),
        );
    }, []);
    useEffect(() => {
        if (!socket) return;
        socket.on('connect', () => {
            console.log('connected to socket server');
        });
        return () => {
            socket.disconnect();
        };
    }, [socket]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
export default SocketProvider;
