const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const handlebars = require("express-handlebars");


app.engine("handlebars", handlebars.engine({defaultLayout: 'main'}));
app.set("view engine", "handlebars");


//Conecção com o banco de dados
const sequelize =  new Sequelize("sistemadecadastro", "root", "Wr@271019", {
    host: "localhost",
    dialect: "mysql"
});

app.get('/post', (req, res) => {
    res.render('form')
});

const PORT = 3333;
app.listen(PORT, () => console.log(`SERVER RODANDO NA PORT ${PORT}`))