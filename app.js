const express = require('express');
const { request } = require('http');
const {pool} = require('./db.js');
const app = express();
const port = 3000; 


app.use(express.json());


app.get('/pets', async (request, response) => {
    const x = await pool.query('SELECT * FROM pets');
    console.log(x.rows);
})

app.post('/pets', async (request, response) => {
    const {name, type, owner_id} = request.body;
    console.log(name, type, owner_id)
    pool.query('INSERT INTO pets (name, type, owner_id) VALUES($1, $2, $3)', [name, type, owner_id])
    response.send(request.body);
})

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})