var mysql = require("mysql2");

var connection = mysql.createConnection({
    host:"localhost",
    user:"allisonrps",
    password:"fatecfranca123#",
    database: "SCORE_VIEW"
});

module.exports = connection;
