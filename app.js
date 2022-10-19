const express = require('express');
const ownersController = require('./controllers/ownersController.js')
const petsController = require('./controllers/petsController.js')
const {pool} = require('./db.js');
const app = express();
const port = 3000; 


app.use(express.json());

app.get('/owners', ownersController.getOwners)
app.get('/pets', petsController.getPets);
app.get('/pets/:id', petsController.getSinglePet);
app.post('/pets', petsController.addPets)

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})