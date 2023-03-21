const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");


app.engine('handlebars', handlebars.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get("/criar", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    res.send("Titulo: " + req.body.title + " Conteudo: " + req.body.content);
})

const PORT = 1919;
app.listen(PORT, () => console.log(`SERVER RUNNIG https://localhost:${PORT}`));
