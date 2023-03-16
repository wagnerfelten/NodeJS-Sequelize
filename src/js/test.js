const Sequelize = require("sequelize");
const sequelize =  new Sequelize("sistemadecadastro", "root", "Wr@271019", {
    host: "localhost",
    dialect: "mysql"
});

const Post = sequelize.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

Post.create({
    name: "Wagner f r",
    email: "wagnerfr@email.com",
    idade: 12
})

//Post.sync({force: true}) //<==> Vai criar a postagem


sequelize.authenticate().then(() => {
    console.log("Conectado com SUCESSO!!!")
}).catch((error) => {
    console.log("Falha ao se CONECTAR < br/>" + error)
})