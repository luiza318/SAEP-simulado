/* /login - post
/ - get
/like - post, get
/comentario - post, get
/atividades - post, get

fetch() */

// incluo biblioteca e defino as constantes do sistema
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise')
const app = express();
const PORT = 3001
const pool = mysql.createPool({
    host:'localhost',
    port:'3001',
    user:'root',
    password:'senai',
    database:'eco_move'
});

// configuração de conexao com o db, pool é a constante que podem,os usar para realizar operações dentro do banco de dados

// prepara o servidor expressmára facilitar json e cors
app.use(cors());
app.use(express.json());

// definir as rotas/urls/endpoints do sistema

//pagina inicial
app.get('/', (req, res) => {
    res.send("Ok")
});

//login
app.post('/login', (req, res) => {
    res.send("Ok")
});

//likes
app.get('/curtidas', (req, res) => {
    res.send("Ok")
});
app.post('/curtidas', (req, res) => {
    res.send("Ok")
});

//comentarios
app.get('/comentarios', (req, res) => {
    res.send("Ok")
});
app.post('/comentarios', (req, res) => {
    res.send("Ok")
});

//atividades
app.get('/atividades', (req, res) => {
    res.send("Ok")
});
app.post('/atividades', (req, res) => {
    res.send("Ok")
});

//servidor é executado

app.listen(PORT, () => {
    console.log("Servidor rodando")
});