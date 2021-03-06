import { io } from 'socket.io-client';

function ChatSocket(socketFactory) {
  'ngInject';
  const SOCKET_PATH = io.connect('http://localhost:3000');

  const socket = socketFactory({
    ioSocket: SOCKET_PATH
  });

  return socket;
}

export default {
  name: 'ChatSocket',
  fn: ChatSocket
}