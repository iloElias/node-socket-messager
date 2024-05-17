# Aplicação de Mensagens Instantâneas com Node.js e Socket.io

Esta aplicação permite enviar e receber mensagens instantâneas entre um cliente e um servidor utilizando sockets. Além disso, o servidor possui um modo de resposta automática que pode ser ativado ou desativado.

## Pré-requisitos

- Node.js e npm instalados
- Terminal ou console para executar os comandos

## Instalação

1. Clone o repositório ou baixe os arquivos do projeto.
2. Navegue até o diretório do projeto no terminal.
3. Instale as dependências necessárias:

```bash
npm install
```

Arquivos do Projeto

- `server.js`: Código do servidor.
- `client.js`: Código do cliente.

## Executando a Aplicação
### Passo 1: Iniciar o Servidor

No terminal, execute o seguinte comando para iniciar o servidor:

```bash
node server.js
```

Você verá a mensagem: Servidor de mensagens rodando na porta 3000.

### Passo 2: Iniciar o Cliente

Em outra janela do terminal, navegue até o diretório do projeto e execute o seguinte comando para iniciar o cliente:

```bash
node client.js
```

Você verá a mensagem: `Conectado ao servidor de mensagens.`

## Uso

### Enviando Mensagens

- Do Cliente: Digite uma mensagem e pressione Enter. A mensagem será enviada ao servidor.
- Do Servidor: Digite uma mensagem e pressione Enter. A mensagem será enviada ao cliente.

### Resposta Automática

O servidor possui um modo de resposta automática que pode ser ativado ou desativado.

- **Ativar/Desativar Resposta Automática**: No console do servidor, digite toggle e pressione Enter. Isso alternará o estado da resposta automática. Você verá uma mensagem indicando se a resposta automática está ativada ou desativada.

## Exemplos

- **Mensagem do Cliente**:

```css
[CLIENTE] Olá servidor.
```

- **Resposta do Servidor (manual)**:

```css
[SERVIDOR] Olá cliente.
```

- Resposta do Servidor (automática):

```CSS
[SERVIDOR] Resposta automática do servidor.
```
