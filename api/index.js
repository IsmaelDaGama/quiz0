const express = require("express")
const cors = require('cors')
const authRouter = require('./controllers/Auth')
const app = express()
const PORT = 8080;


const SOCKETPORT = 8081;

const { createServer } = require("http");
const Server = require("socket.io");
const httpServer = createServer(app);
const io = Server(httpServer, {
    cors: { origin: ["http://localhost:5073","http://localhost:8081"],
        methods: ["GET", "POST"],
        credentials: true, }, });


app.use(cors())

app.get('/ping', (req, res) => {
    res.send("Pong");
})


app.use(express.json());
app.use(authRouter);

io.on("connection", (socket) => {
    //console.log(`User Connected:${socket.id}`);
    socket.on("join_room",(data)=>{
        socket.join(data);
    });
    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("receive_message",data);
    });           
});


httpServer.listen(SOCKETPORT, ()=> {
    console.log(`Socket.io Listening on port ${SOCKETPORT}`);
});

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
})