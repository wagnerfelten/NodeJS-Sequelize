const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const post = require("./models/Post");


app.engine('handlebars', handlebars.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts});
    })
});

app.get("/criar", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    post.create({
        title: req.body.title,
        content: req.body.content
    }).then(()=> {
       res.redirect('/')
    }).catch((erro)=> {
        res.send("ERRO NO ENVIO " + erro);
    });
})

const PORT = 1919;
app.listen(PORT, () => console.log(`SERVER RUNNIG https://localhost:${PORT}`));
