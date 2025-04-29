const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/connection"); // conexão com banco
const app = express();
const porta = 3000;

// Importação das rotas (controllers)
const homeController = require("./home/homeController");
const perguntaRoutes = require("./routes/Pergunta");
const usuarioRoutes = require("./routes/Usuario");
const respostaRoutes = require("./routes/Resposta");
const resultadoRoutes = require("./routes/Resultado");

// View engine
app.set('view engine', 'ejs');

// Arquivos estáticos
app.use(express.static('public'));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.use("/", homeController);
app.use("/perguntas", perguntaRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/respostas", respostaRoutes);
app.use("/resultados", resultadoRoutes);

// Start do servidor
app.listen(porta, () => {
    console.log("Servidor rodando na porta: " + porta);
});
