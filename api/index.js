// api/index.js
const express = require("express");
const app = express();
const mysql = require("mysql2");
const serverless = require("serverless-http"); // importante

// Configuração do MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Middleware e rotas
app.get("/", (req, res) => {
  res.send("API rodando via Vercel!");
});

// Exporte como função
module.exports = app;
module.exports.handler = serverless(app);
