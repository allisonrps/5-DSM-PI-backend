const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// RETORNA JSON DE TODAS AS PERGUNTAS
router.get("/pergunta", (req,res) => {

    var SQL = "SELECT * FROM perguntas ORDER BY id DESC";
    
    connection.query(SQL, function(err,result) {
        if (err) {
            res.sendStatus(401).json({err: "Erro ao listar perguntas"});
        }
        res.status(200).json({perguntas: result});
    })

})
