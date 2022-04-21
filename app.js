const express = require("express");
const path = require("path")
const app = express();

app.use(express.static('public'))
app.listen(3038, () => {
    console.log("está corriendo el servidor")
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});