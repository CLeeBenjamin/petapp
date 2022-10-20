const Owner = require('../models/ownerModel.js')

const getOwners = async (request, response) => {
    const ownersData = await Owner.getOwnersFromDB();
    response.send(ownersData.rows);
}


module.exports = {
   getOwners 
}