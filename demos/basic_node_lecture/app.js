/*
var http = require('http');

http.createServer(function(request, response) {
    //First thing: tell response it will give client
    response.writeHead(200);
    response.write('Hello');
    response.end();
}).listen(8000);

console.log("Listening on port 8000");
*/

var events = require("events");
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();

//on message event, receive message info into callback function
//Listens for the message, which in this case will be broadcast with chat.emit
chat.on('message', function(message) {
    console.log(message);
});

//broadcast an event to the system - will be picked up by on('message') handler
chat.emit('message', "Whatever message");`

