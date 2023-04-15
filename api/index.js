const express = require("express")

const authRouter = require('./controllers/Auth')

const app = express()
const PORT = 8080;


app.get('/ping', (req, res) => {
    res.send("Pong");
})

app.use(express.json());
app.use(authRouter);



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})