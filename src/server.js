const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});


const PORT = 3333;

app.listen(PORT, () => console.log(`SERVER RODANDO NA PORT ${PORT}`))