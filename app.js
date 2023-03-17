const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine('handlebars', handlebars.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/criarPost", (req, res) => {
    res.render("form");
});


const PORT = 1919;
app.listen(PORT, () => console.log(`SERVER RUNNIG https://localhost:${PORT}`));
