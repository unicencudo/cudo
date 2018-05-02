const Sequelize = require('sequelize');
const db = require('../db')

const order = db.sequelize.define('order', {
    orderID: {
        type: Sequelize.INTEGER, primaryKey: true
    },
    orderLocation: {
        type: Sequelize.STRING
    },
    dropOff:{
        type:Sequelize.BOOLEAN
    },
    timeWindow:{
        type:Sequelize.STRING
    },
    weight:{
        type:Sequelize.DOUBLE
    },
    volume:{
        type:Sequelize.DOUBLE
    },
    fixDockingSlotNeeded:{
        type:Sequelize.BOOLEAN
    },
    description:{
        type:Sequelize.TEXT
    },
    ftl:{
        type:Sequelize.STRING
    },
    sequenceOfOrder:{
        type:Sequelize.INTEGER
    }
});

module.exports = {
    order:order
}