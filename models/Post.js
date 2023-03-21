const db = require("./db");

const Post = db.sequelize.define("postagens", {
    title: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post;