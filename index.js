const express = require("express"); // importando o express
const app = express(); // definindo o objeto app como express
const bodyParser = require("body-parser"); // importando o body-parser
const connection = require("./database/connection"); // conexao com banco de dados
const porta = 4000; // porta que vai rodar a aplicação
const question = require("./question/Question"); // controller de perguntas


// definindo a view principal do express com ejs
app.set('view engine', 'ejs');

// definindo a pasta publica de arquivos estáticos
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// definindo a rota principal atraves de um controller
const homeController = require("./home/homeController");
const questionController = require("./question/QuestionController");

app.use("/",homeController);
app.use("/",questionController);

// escutando a porta tornando a aplicação acessível
app.listen(porta, ()=> {
    console.log("conectado na porta: " + porta);
})
