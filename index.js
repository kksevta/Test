// var WebSocketServer = require('websocket').server;
// var http = require('http');
// var server = http.createServer(function (request, response) {
//     // process HTTP request. Since we're writing just WebSockets
//     // server we don't have to implement anything.
// });
// server.listen(1337, function () { });

// // create the server
// wsServer = new WebSocketServer({
//     httpServer: server
// });

// wsServer.on('request', function (request) {
//     var connection = request.accept(null, request.origin);
//     connection.sendUTF(
//         JSON.stringify({ type: 'history', data: [] }));
//     // This is the most important callback for us, we'll handle
//     // all messages from users here.
//     connection.on('message', function (message) {
//         if (message.type === 'utf8') {
//             // process WebSocket message
//         }
//     });

//     connection.on('close', function (connection) {
//         // close user connection
//     });
// });
var jwt = require('jsonwebtoken');
var secretWeb = 'mysecret';
var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    // res.render('index',
    //     { title: 'Guru99', message: 'Welcome' })
    // res.send('Hello Worls')
    var token = jwt.sign({ id: 'Kuldeep' }, secretWeb, {
        expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
});


app.get('/getName', function (req, res) {
    // res.render('index',
    //     { title: 'Guru99', message: 'Welcome' })
    // res.send('Hello Worls')

});
var server = app.listen(3001, function () { });