const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/Resposta');

router.post('/', Resposta.criarResposta);
router.get('/', Resposta.listarResposta);

module.exports = router;