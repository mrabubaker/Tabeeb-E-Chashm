const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port,'0.0.0.0');
console.log('Node Server Started and Listening on Port 3000')

module.exports = server