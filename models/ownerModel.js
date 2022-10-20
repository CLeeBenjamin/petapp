const {pool} = require('../db.js');


class Owner { 
    static getOwnersFromDB()  {
        return pool.query('SELECT * FROM owners');
    }

}


module.exports = Owner;