const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set("view engine", "handlebars");




const PORT = 3333;
app.listen(PORT, () => console.log(`SERVER RODANDO NA PORT ${PORT}`))