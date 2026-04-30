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
const PORT = 3001;
const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
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
app.get('/atividades', async  (req, res) => {
    let [atividades] = await pool.query('select * from tb_atividade;');
    res.json(atividades)
});
app.post('/atividades', (req, res) => {
    try{
        const atv = req.body

        const sql = 'insert into tb_atividade (usuario_id, tipo, distancia_metros, duracao_minutos, co2_kg) VALUES (?, ?, ?, ?, ?)'

        const valores = [atv.tipo, atv.distancia_metros, atv.duracao_minutos, atv.co2_kg];

        await pool.query(sql, valores);
        res.send('ok');
        }catch(e){
            console.log("ERROR REAL:", e.message);
            res.status(500).send(e.message);
        }
});

//servidor é executa                     do

app.listen(PORT, () => {
    console.log("Servidor rodando")
});