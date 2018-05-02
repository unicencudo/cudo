var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize')
const db = require('../db')
const schema = require('../db/schema')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .then(() => {
            // schema.order.sync({force: true});
            db.sequelize.sync({
                // force: true will drop the table if it already exists
                force: true
            });
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });


    // User.findAll().then(user => {
    //     console.log(user)
    // })
    res.send("Flush Database Successfully");
});

module.exports = router;