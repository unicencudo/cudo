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
        let myDate = "[" + (new Date()).toLocaleString() + "]";
        console.log(myDate + " GET: SELECT all orders");
        return orders;
    }).then(orders =>{
        res.json(orders);
    })
    //res.send("Select all orders");
});


/* GET for test
* */
router.get('/test', function (req, res, next) {
    let orders = [{
        id: 1,
        name: "张三",
        price: "100"
    }]
    res.json(orders);

    //res.send("Select all orders");
});


/* POST select/insert one order
* */
router.post('/insert', function (req, res, next) {
    let myDate = "[" + (new Date()).toLocaleString() + "]";
    if (req.body && !Array.isArray(req.body)) {
        // OrderID maybe doesn't exist! Add check function in the further.
        if (req.body['orderID'])
        {
            schema.order.findOrCreate({where: {orderID: req.body['orderID']}, defaults: req.body})
                .spread((order, created) => {
                    console.log(myDate + " POST: INSERT Created: " + created);
                    res.json(req.body);
                })
        }
        else {
            schema.order.create(req.body).then(() =>{
                console.log(myDate + " POST: INSERT")
            }).catch(()=>{
                console.log(myDate + " POST: INSERT ERROR")
            });
            res.json(req.body);
        }
    }
    else {
        console.log(myDate + " POST: JSON ERROR");
        res.status(400);
        res.send(req.body)
    }
});


/* POST update/insert order by orderID
* */
router.post('/update', function (req, res, next) {
    let myDate = "[" + (new Date()).toLocaleString() + "]";
    if (req.body && !Array.isArray(req.body)) {
        // OrderID maybe doesn't exist! Add check function in the further.
        if (req.body['orderID'])
        {
            schema.order.upsert(req.body, {where: {orderID: req.body['orderID']}})
                .then((affected) =>{
                    console.log(myDate + " POST: UPDATE orderID: " + req.body['orderID']);
                    res.json(req.body);
                })
        }
        else {
            schema.order.create(req.body).then(() =>{
                console.log(myDate.toLocaleString() + " POST: UPDATE")
            }).catch(()=>{
                console.log(myDate.toLocaleString() + " POST: UPDATE ERROR")
            });
            res.json(req.body);
        }
    }
    else {
        console.log(myDate.toLocaleString() + " POST: JSON ERROR");
        res.status(400);
        res.send(req.body)
    }
});

/* POST delete order by orderID
* */
router.post('/delete', function (req, res, next) {
    let myDate = "[" + (new Date()).toLocaleString() + "]";
    if (req.body && !Array.isArray(req.body)) {
        // OrderID maybe doesn't exist! Add check function in the further.
        if (req.body['orderID'])
        {
            schema.order.destroy({where: {orderID: req.body['orderID']}})
                .then((affected) =>{
                    console.log(myDate + " POST: DELETE orderID: " + req.body['orderID']);
                    res.json(req.body);
                })
        }
        else {
            res.status(400);
            res.json(req.body);
        }
    }
    else {
        console.log(myDate.toLocaleString() + " POST: JSON ERROR");
        res.status(400);
        res.send(req.body)
    }
});



module.exports = router;