const connection = require('../database/connection');

module.exports = {
    listarTodas: (req, res) => {
        const SQL = "SELECT * FROM perguntas ORDER BY id DESC";
        connection.query(SQL, (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao listar perguntas" });
            return res.status(200).json({ perguntas: result });
        });
    },

    criarPergunta: (req, res) => {
        const { coluna_dataset, texto_pergunta } = req.body;
        const SQL = "INSERT INTO perguntas (coluna_dataset, texto_pergunta) VALUES (?, ?)";
        connection.query(SQL, [coluna_dataset, texto_pergunta], (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao criar pergunta" });
            return res.status(201).json({ message: "Pergunta criada com sucesso", id: result.insertId });
        });
    }
};
