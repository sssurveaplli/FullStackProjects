const inventory = {
    "meats": {

        "quantity": 10
   },

    "vegetables": {

        quantity: 10

    },
    "cheese": {

        quantity: 0

    },
    "Pepperoni": {

        quantity: 10

    },
    "Sausage": {

        quantity: 10

    },
    "Mushrooms": {

        quantity: -1

    },
    "Pineapple": {

        quantity: 10

    },

}


const orders = [
    {
        "orderid": "1",

        "orderdate": "2024-05-30T02:15:12.356Z",
        "toppings": ["meats", 'Pineapple']




    },
    {
        "orderid": "2",

        "orderdate": "2024-05-21T02:15:12.356Z",
        "toppings": ["meats", "vegetables", "Mushrooms"]




    },
    {
        "orderid": "3",

        "orderdate": "2024-05-29T02:15:12.356Z",
        "toppings": ["meats", "vegetables"]




    },
    {
        "orderid": "4",

        "orderdate": "2024-06-03T02:15:12.356Z",
        "toppings": ["meats", "Mushrooms"]




    }]



const inventoryArray = new Set()
const notplacedOrders=[]
orders.sort((a, b) => (new Date(b.orderdate) - new Date(a.orderdate))).forEach((item) => {
    let booleanorder = true
    item.toppings.forEach((item1) => {
        if (inventory[item1].quantity < 0) {
            inventoryArray.add(item1)
            notplacedOrders.push(item.orderid)
            booleanorder = false
                    }
    })
    booleanorder ? console.log(`${item.orderid} order has been placed `) : console.log(`due to stock not availble of items ${[...inventoryArray]} order ${item.orderid} has not been placed `)
})

console.log(`inventory for following not available ${[...inventoryArray]}-- immediatly fill the inventory for ${[...inventoryArray]} for proceeding orders with orderid's ${[notplacedOrders]} `)















