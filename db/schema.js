const Sequelize = require('sequelize');
const db = require('../db')

const order = db.sequelize.define('order', {
        orderID: {
            type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
        },
        orderLocation: {
            type: Sequelize.STRING
        },
        dropOff: {
            type: Sequelize.BOOLEAN
        },
        timeWindow: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.DOUBLE
        },
        volume: {
            type: Sequelize.DOUBLE
        },
        fixDockingSlotNeeded: {
            type: Sequelize.BOOLEAN
        },
        description: {
            type: Sequelize.TEXT
        },
        ftl: {
            type: Sequelize.STRING
        },
        sequenceOfOrder: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: 'orders',
    }
)

const vehicle = db.sequelize.define('vehicle', {
        vehicleNumber: {
            type: Sequelize.STRING, primaryKey: true
        },
        vehicleType: {
            type: Sequelize.STRING
        },
        weightCapacity: {
            type: Sequelize.DOUBLE
        },
        volumeCapacity: {
            type: Sequelize.DOUBLE
        },
        availableTime: {
            type: Sequelize.STRING
        },
        startDepotLocation: {
            type: Sequelize.STRING
        },
        endDepotLocation: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'vehicles',
    }
)


module.exports = {
    order: order,
    vehicle: vehicle
}