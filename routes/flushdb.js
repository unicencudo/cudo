var express = require('express');
var router = express.Router();
const db = require('../db')
const schema = require('../db/schema')
const testData = require('../db/data/testData')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.sequelize
        .authenticate()
        .then(() => {
            console.log('Postgres Connection has been established successfully.');
        })
        .then(() => {
            // schema.order.sync({force: true});
            db.sequelize.sync({
                // force: true will drop the table if it already exists
                force: true
            }).catch(err => {
                console.error('Unable to sync Postgres:', err);
            });
        })
        .catch(err => {
            console.error('Unable to connect to Postgres:', err);
        });
    res.send("Flush Database Successfully");
});

/* GET testData
*  Insert testing data.
* */
router.get('/testdata', function (req, res, next) {
    db.sequelize
        .authenticate()
        .then(
            insertOrders
        );
    res.send("Insert testing data successfully");
});

function insertOrders() {
    console.log('Postgres insert test data: orders.');
    schema.order.bulkCreate(testData.orders)
        .then(() => {
            console.log('Postgres insert test data: orders. Success.');
        })
        .catch(() => {
            console.log('Postgres insert test data: orders. Fail.');
        });
};

function insertVehicles() {
    console.log('Postgres insert test data: vehicles.');

};

function insertMalls() {
    console.log('Postgres insert test data: malls.');

};

module.exports = router;