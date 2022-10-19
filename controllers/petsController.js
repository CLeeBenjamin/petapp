const {pool} = require('../db.js');

const getPets = async (request, response) => {
    const x = await pool.query('SELECT * FROM pets');
    response.send(x.rows); 
};

const getSinglePet = async (request, response) => {
    const id = request.params.id;
    const pet = await pool.query('SELECT * FROM pets WHERE id = $1',[id]);
    response.send(pet.rows[0])
}

const addPets = async (request, response) => {
    const {name, type, owner_id} = request.body;
    const postPet = await pool.query(
        'INSERT INTO pets (name, type, owner_id) VALUES($1, $2, $3) RETURNING *',[name, type, owner_id])
    const insertedPet = postPet.rows[0];
    response.send(insertedPet);
}


module.exports = {
    getPets,
    getSinglePet,
    addPets
}