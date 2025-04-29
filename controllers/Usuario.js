const connection = require('../database/connection');

module.exports = {
    listarTodos: (req, res) => {
        connection.query("SELECT * FROM usuarios", (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao listar usuários" });
            return res.status(200).json({ usuarios: result });
        });
    },

    criarUsuario: (req, res) => {
        const { nome, email } = req.body;
        const SQL = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
        connection.query(SQL, [nome, email], (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao criar usuário" });
            return res.status(201).json({ message: "Usuário criado", id: result.insertId });
        });
    }
};
