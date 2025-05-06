const connection = require('../database/connection');

module.exports = {
    listarTodos: (req, res) => {
        connection.query("SELECT * FROM usuarios", (err, result) => {
            if (err) {
                console.error("Erro ao listar usuários:", err);
                return res.status(500).json({ error: "Erro ao listar usuários" });
            }
            return res.status(200).json({ usuarios: result });
        });
    },

    criarUsuario: (req, res) => {
        const { nome, idade, sexo } = req.body;

        if (!nome || !idade || !sexo) {
            return res.status(400).json({ error: "Campos nome, idade e sexo são obrigatórios" });
        }

        const SQL = "INSERT INTO usuarios (nome, idade, sexo) VALUES (?, ?, ?)";
        connection.query(SQL, [nome, idade, sexo], (err, result) => {
            if (err) {
                console.error("Erro ao criar usuário:", err.message);
                return res.status(500).json({ error: "Erro ao criar usuário" });
            }
            return res.status(201).json({ message: "Usuário criado", id: result.insertId });
        });
    }
};
