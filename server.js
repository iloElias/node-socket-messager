const readline = require('readline');
const { Server } = require('socket.io');

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '[SERVIDOR] '
});

let autoRespond = true;

io.on('connection', (socket) => {
  console.log('Cliente conectado.');

  socket.on('message', (msg) => {
    console.log(`[CLIENTE] ${msg}`);
    if (autoRespond) {
      const response = 'Resposta automática do servidor.';
      socket.emit('message', response);
      console.log(`[SERVIDOR] ${response}`);
    }
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado.');
  });

  rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'toggle') {
      autoRespond = !autoRespond;
      console.log(`Resposta automática ${autoRespond ? 'ativada' : 'desativada'}.`);
    } else {
      socket.emit('message', line.trim());
      console.log(`[SERVIDOR] ${line.trim()}`);
    }
    rl.prompt();
  });
});

console.log('Servidor de mensagens rodando na porta 3000');
console.log('Digite "toggle" para ativar/desativar a resposta automática.');
rl.prompt();
