const express = require('express');
const router = express.Router();
const Resultado = require('../controllers/Resultado');

// ROTAS
router.get('/', Resultado.listarTodos);
router.post('/', Resultado.criarResultado);

module.exports = router;
