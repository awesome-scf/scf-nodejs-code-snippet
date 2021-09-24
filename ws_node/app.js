var wslib = require('ws');

const wss = new wslib.WebSocketServer({ port: 9000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('Server Received: %s', message);
    console.log('Server Send: %s', message);
    ws.send(message.toString());
  });
  
});

wss.on('close',function close(){
    console.log("Connection Close")
})