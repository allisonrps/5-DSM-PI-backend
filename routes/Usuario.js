const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/Usuario');

router.post('/', Usuario.criarUsuario);
router.get('/', Usuario.listarUsuarios);

module.exports = router;
