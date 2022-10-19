const {pool} = require('../db.js');

const getOwners = async (request, response) => {
    const x = await pool.query('SELECT * FROM owners');
    response.send('Hello')
}


module.exports = {
   getOwners 
}