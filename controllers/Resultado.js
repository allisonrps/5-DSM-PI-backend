const connection = require('../database/connection');

module.exports = {
    listarTodos: (req, res) => {
        connection.query("SELECT * FROM resultados", (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao listar resultados" });
            return res.status(200).json({ resultados: result });
        });
    },

    criarResultado: (req, res) => {
        const { id_usuario, pontuacao, score } = req.body;
        const SQL = "INSERT INTO resultados (id_usuario, pontuacao, score) VALUES (?, ?, ?)";
        connection.query(SQL, [id_usuario, pontuacao, score], (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao registrar resultado" });
            return res.status(201).json({ message: "Resultado salvo", id: result.insertId });
        });
    }
};
