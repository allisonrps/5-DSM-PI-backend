const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/Resultado');

router.post('/', Resultado.criarResultado);
router.get('/', Resultado.listarResultado);

module.exports = router;