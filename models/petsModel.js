const {pool} = require('../db.js');

class Pet {
    
    static getPetsFromDB() {
        return pool.query('SELECT * FROM pets');
    }
    static getPetFromDB(id) {
        return pool.query('SELECT * FROM pets WHERE id = $1',[id]);
    }
    static postPetToDB(name, type, owner_id) {
            return pool.query(
            'INSERT INTO pets (name, type, owner_id) VALUES($1, $2, $3) RETURNING *',[name, type, owner_id])
    }

}


module.exports = Pet;
