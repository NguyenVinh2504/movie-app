import { io } from 'socket.io-client';
import { API_ROOT } from '~/utils/constants';
console.log(API_ROOT);

export const socket = io(API_ROOT);
