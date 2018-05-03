orders = [
    {
        orderLocation: "Mall A",
        dropOff: true,
        timeWindow: "09:00-10:00",
        weight: 425,
        volume: 1,
        fixDockingSlotNeeded: "No",
        description: "",
        ftl: "LTL",
    },
    {
        orderLocation: "Mall B",
        dropOff: true,
        timeWindow: "10:00-12:00",
        weight: 447,
        volume: 2,
        fixDockingSlotNeeded: "No",
        description: "",
        ftl: "LTL",
    },
    {
        orderLocation: "Mall C",
        dropOff: true,
        timeWindow: "10:00-12:00",
        fixDockingSlotNeeded: "No",
        description: "",
        ftl: "GBA1992B",
        sequenceOfOrder: 1
    },
    {
        orderLocation: "Mall D",
        dropOff: true,
        timeWindow: "09:00-10:00",
        fixDockingSlotNeeded: "No",
        description: "",
        ftl: "GBA1992B",
        sequenceOfOrder: 2
    },
    {
        orderLocation: "Mall E",
        dropOff: true,
        timeWindow: "10:00-11:00",
        weight: 411,
        volume: 0.8,
        fixDockingSlotNeeded: "No",
        description: "",
        ftl: "LTL",
    },
    {
        orderLocation: "Mall F",
        dropOff: true,
        timeWindow: "10:00-12:00",
        weight: 409,
        volume: 3,
        fixDockingSlotNeeded: "Yes",
        description: "",
        ftl: "LTL",
    }
]


module.exports = {
    orders: orders
}