var express = require('express');
var router = express.Router();
const db = require('../db')
const schema = require('../db/schema')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("orders' data");
});

/* GET All orders
* */
router.get('/all', function (req, res, next) {
    schema.order.findAll().then( orders => {
        let myDate = new Date();
        console.log(myDate.toLocaleString() + " GET: SELECT all orders");
        return orders;
    }).then(orders =>{
        res.json(orders);
    })
    //res.send("Select all orders");
});


/* POST insert one order
* */
router.post('/insert', function (req, res, next) {
    let myDate = new Date();
    if (req.body && !Array.isArray(req.body)) {
        // OrderID maybe doesn't exist! Add check function in the further.
        if (req.body['orderID'])
        {
            schema.order.findOrCreate({where: {orderID: req.body['orderID']}, defaults: req.body})
                .spread((order, created) => {
                    console.log(myDate.toLocaleString() + " POST: INSERTION Created: " + created);
                    res.json(req.body);
                })
        }
        else {
            schema.order.create(req.body).then(() =>{
                console.log(myDate.toLocaleString() + " POST: INSERTION")
            }).catch(()=>{
                console.log(myDate.toLocaleString() + " POST: INSERTION ERROR")
            });
            res.json(req.body);
        }
    }
    else {
        console.log(myDate.toLocaleString() + " POST: JSON ERROR");
        res.status(400);
    }
});


/* POST update order by orderID
* */
router.post('/update', function (req, res, next) {
    let myDate = new Date();
    if (req.body && !Array.isArray(req.body)) {
        // OrderID maybe doesn't exist! Add check function in the further.
        if (req.body['orderID'])
        {
            schema.order.findOrCreate({where: {orderID: req.body['orderID']}, defaults: req.body})
                .spread((order, created) => {
                    console.log(myDate.toLocaleString() + " POST: INSERTION Created: " + created);
                    res.json(req.body);
                })
        }
        else {
            schema.order.create(req.body).then(() =>{
                console.log(myDate.toLocaleString() + " POST: INSERTION")
            }).catch(()=>{
                console.log(myDate.toLocaleString() + " POST: INSERTION ERROR")
            });
            res.json(req.body);
        }
    }
    else {
        console.log(myDate.toLocaleString() + " POST: JSON ERROR");
        res.status(400);
    }
});




module.exports = router;