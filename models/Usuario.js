const connection = require('../database/connection');

class Usuario {
    static listarTodos(callback) {
        const SQL = "SELECT * FROM usuarios";
        connection.query(SQL, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    }

    static criar(nome, email, callback) {
        const SQL = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
        connection.query(SQL, [nome, email], (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result.insertId);
        });
    }
}

module.exports = Usuario;
