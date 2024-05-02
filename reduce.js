import express from 'express'

const app = express()


const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})

const nums = [1,2,3]


const num1 = nums.reduce((acc,current) => (acc + current),0)
console.log("num is :",num1);

const num2 = [1,2,3,4,5]
const total = num2.reduce((acc,current) => {
    return  acc + current
},0)

console.log("total is ",total);


const cart = [   
    {
        itemName: "jsCourse",
        price:1999
    },

    {
        itemName: "Python",
        price:2499
    },

    {
        itemName: "Data Science",
        price:2999
    },

    {
        itemName: "ML",
        price:3999
    },
]

const TotalAmount =  cart.reduce((acc,item) => (acc + item.price),0)

console.log("TotalAmount is : ",TotalAmount);     