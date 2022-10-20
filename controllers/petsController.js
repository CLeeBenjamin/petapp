const {pool} = require('../db.js');
const Pet = require('../models/petsModel.js')


const getPets = async (request, response) => {
    const allPets = await Pet.getPetsFromDB()
    response.send(allPets.rows); 
};

const getSinglePet = async (request, response) => {
    const id = request.params.id;
    const pet = await Pet.getPetFromDB(id);
    response.send(pet.rows[0])
}

const addPets = async (request, response) => {
    const {name, type, owner_id} = request.body;
    const postPet = await Pet.postPetToDB(name,type,owner_id);
    const insertedPet = postPet.rows[0];
    response.send(insertedPet);
}


module.exports = {
    getPets,
    getSinglePet,
    addPets
}