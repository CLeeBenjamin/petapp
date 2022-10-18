const { Pool } = require('pg')


const pool = new Pool({
    database: 'petsapp',
    user:     'postgres',
    password: ''
})


module.exports = {
    pool
}
