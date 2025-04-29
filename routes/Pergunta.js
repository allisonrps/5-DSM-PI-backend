const express = require('express');
const router = express.Router();
const Pergunta = require('../controllers/Pergunta');

// ROTAS
router.get('/', Pergunta.listarTodas);
router.post('/', Pergunta.criarPergunta);

module.exports = router;
