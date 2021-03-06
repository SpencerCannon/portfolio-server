const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host:'portfolio-instance.cf1papb8yehx.us-east-2.rds.amazonaws.com',
    database:'projects',
    password:'password',
    port: '5432',
})
const getProjects = (request, response) => {
    pool.query('SELECT * FROM projects', (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}
module.exports = { getProjects }