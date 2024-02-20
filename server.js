// const { Socket } = require('dgram');
const express = require('express')
const app = express();

const http = require('http').createServer(app);

const PORT = process.env.PORT || 5000;

http.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/' , (req,resp)=>{
    resp.sendFile( __dirname + '/index.html')
});

// ------------------->socket<------------->

const io = require('socket.io')(http)

io.on('connection', (Socket)=>{
    console.log('connected...')
})
