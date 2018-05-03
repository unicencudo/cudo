const {Pool} = require('pg')
const Sequelize = require('sequelize');

// Your postgres configuration:
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'CUDO',
    password: 'post',
    port: 5432,
})

const sequelize = new Sequelize('CUDO', 'postgres', 'post', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});


// query:
module.exports = {
    query: (text, params, callback) => {
        const start = Date.now()
        return pool.query(text, params, (err, res) => {
            const duration = Date.now() - start
            console.log('executed query', {text, duration, rows: res.rowCount})
            callback(err, res)
        })
    },
    sequelize:sequelize
}