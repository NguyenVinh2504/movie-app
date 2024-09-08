import { createContext, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { userValue } from '~/redux/selectors';
import { API_ROOT } from '~/utils/constants';
const socket = io(API_ROOT, {
    withCredentials: true,
});
export const SocketContext = createContext(socket);
export const useSocket = () => {
    return useContext(SocketContext);
};
function SocketProvider({ children }) {
    const { id } = useSelector(userValue) || {};
    useEffect(() => {
        if (!socket) return;
        socket.on('connect', () => {
            console.log('connected to socket server');
        });
        console.log('idUser', id);

        socket.auth = {
            id,
        };
        return () => {
            socket.disconnect();
        };
    }, [id]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
export default SocketProvider;
