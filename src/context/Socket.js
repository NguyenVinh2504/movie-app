import { createContext, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { API_RENDER } from '~/utils/constants';
console.log(API_RENDER);

const socket = io(API_RENDER, {
    withCredentials: true,
});
export const SocketContext = createContext(socket);
export const useSocket = () => {
    return useContext(SocketContext);
};
function SocketProvider({ children }) {
    useEffect(() => {
        if (!socket) return;
        socket.on('connect', () => {
            console.log('connected to socket server');
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
export default SocketProvider;
