var mysql = require("mysql2");

var connection = mysql.createConnection({
    host:"localhost",
    user:"allisonrps",
    password:"fatecfranca123#"
});

connection.connect(function(err) {
   
    if(err) throw err;
    
    console.log("Conectado!");

    connection.query("CREATE DATABASE if not exists MINHA_API", 
        function (err, result) {
        if (err) throw err;
        console.log("Banco de Dados OK !");
      });

});

