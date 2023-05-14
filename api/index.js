

const express = require("express")
const app = express()
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);

const cors = require('cors')
const authRouter = require('./controllers/Auth')
const PORT = 8080;
const SOCKETPORT = 8081;


const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    // ...
});


httpServer.listen(SOCKETPORT, ()=> {
    console.log(`Socket.io Listening on port ${SOCKETPORT}`);

});



app.use(cors())
app.use(express.json());
app.use(authRouter);




/*
io.on("connection", (socket) => {
    //console.log(`User Connected:${socket.id}`);
    socket.on("join_room",(data)=>{
        socket.join(data);
    });
    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("receive_message",data);
    });           
});
*/




app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
})

app.get('/ping', (req, res) => {
    res.send("Pong");
})
