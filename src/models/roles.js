const Pool = require('pg').Pool
const pool = new Pool({
 user: 'postgres',
 host: 'localhost11',
 database: 'esflood_latest11',
 password: 'Global12$',
 port: 5432,
})

const getUsers = (request, response) => {
 pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json(results.rows)
 })
}

module.exports = {
 getUsers
}