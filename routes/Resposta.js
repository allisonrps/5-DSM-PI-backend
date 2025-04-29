const express = require('express');
const router = express.Router();
const Resposta = require('../controllers/Resposta');

// ROTAS
router.get('/', Resposta.listarTodas);
router.post('/', Resposta.criarResposta);

module.exports = router;
