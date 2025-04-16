var mysql = require("mysql2");
var connection = require("../database/connection");

connection.connect(function(err) {
  
    if (err) throw err;
    console.log("Connected!");
    var sql = "create table if not exists perguntas (id int primary key auto_increment, pergunta longtext );";
    connection.query(sql, function(err,result) {
         if (err) throw err;
         console.log("Tabela: Perguntas OK");
    })

    var sql = "create table if not exists respostas (id int primary key auto_increment, pergunta_id int, resposta longtext, FOREIGN KEY (pergunta_id) REFERENCES perguntas(id));";

    connection.query(sql, function(err,result) {
    if (err) throw err;
    console.log("Tabela: Respostas OK");
    })
    
})

module.exports = connection;
