function acc(){
  socket.emit('acceso');
}
function spe(){
  socket.emit('spento');
}

var socket = io.connect();
