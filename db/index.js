const {Pool} = require('pg')

// Your postgress configuration:
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CODU',
    password: 'post',
    port: 5432,
})


// query:
module.exports = {
    query: (text, params, callback) => {
        const start = Date.now()
        return pool.query(text, params, (err, res) => {
            const duration = Date.now() - start
            console.log('executed query', {text, duration, rows: res.rowCount})
            callback(err, res)
        })
    }
}