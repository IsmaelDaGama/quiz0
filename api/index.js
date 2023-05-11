const express = require("express")
const cors = require('cors')

const authRouter = require('./controllers/Auth')

const app = express()
app.use(cors())
const PORT = 8080;


app.get('/ping', (req, res) => {
    res.send("Pong");
})


app.use(express.json());
app.use(authRouter);



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})