const readline = require('readline');
const { io } = require('socket.io-client');

const socket = io('http://localhost:3000');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '[CLIENTE] '
});

socket.on('connect', () => {
  console.log('Conectado ao servidor de mensagens.');
  rl.prompt();

  rl.on('line', (line) => {
    socket.emit('message', line.trim());
    rl.prompt();
  });
});

socket.on('message', (msg) => {
  console.log(`[SERVIDOR] ${msg}`);
});

socket.on('disconnect', () => {
  console.log('Desconectado do servidor de mensagens.');
  rl.close();
});
