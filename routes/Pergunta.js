const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/Pergunta');

router.post('/', Pergunta.criarPergunta);
router.get('/', Pergunta.listarPergunta);
module.exports = router;