const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/Usuario');

// ROTAS
router.get('/', Usuario.listarTodos);
router.post('/', Usuario.criarUsuario);

module.exports = router;
