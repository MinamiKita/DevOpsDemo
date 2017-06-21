/**
 * app.js
 * @authors chn
 * @date    2017-06-20 09:18:05
 */

'use strict';

let express = require('express');
let app = express();
let server = require('http').Server(app);
const ChatRoom = require('./chat');

app.set('port', (process.env.PORT || 5000));

// Route
app.use(express.static(__dirname+'/page'));

// Create a chat room
new ChatRoom(server);

// Listen
server.listen(app.get('port'), () => {
	console.log('Node server is running on port', app.get('port'));
});