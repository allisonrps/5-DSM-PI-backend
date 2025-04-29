const connection = require('../database/connection');

module.exports = {
    listarTodas: (req, res) => {
        connection.query("SELECT * FROM respostas", (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao listar respostas" });
            return res.status(200).json({ respostas: result });
        });
    },

    criarResposta: (req, res) => {
        const { id_usuario, id_pergunta, resposta_sim_nao, valor_resposta } = req.body;
        const SQL = "INSERT INTO respostas (id_usuario, id_pergunta, resposta_sim_nao, valor_resposta) VALUES (?, ?, ?, ?)";
        connection.query(SQL, [id_usuario, id_pergunta, resposta_sim_nao, valor_resposta], (err, result) => {
            if (err) return res.status(500).json({ error: "Erro ao salvar resposta" });
            return res.status(201).json({ message: "Resposta registrada", id: result.insertId });
        });
    }
};
