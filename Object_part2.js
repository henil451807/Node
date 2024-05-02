import express from 'express'

const app = express()


const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})

//
const tinderuser = {}
tinderuser.name = "Hk"
tinderuser.age = 22
tinderuser.country = "India"
tinderuser.email = "hk@gmail.com"

// console.log(user)

const user = {
    email:"hk@gmail.com",
    fullName: {
        username:{
            firstname:"henil",
            lastname : "Kevadiya"
        }
    }
}

// console.log(user.fullName.username.firstname)
const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"a",
    5:"b",
    6:"c"
}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id:1,
        name:"RH"
    },
    {
        id:2,
        name:"MSD"
    }
]

console.log(Object.keys(tinderuser))
console.log(Object.entries(tinderuser)) // convert all object to array of array

console.log(tinderuser.hasOwnProperty('name')) // give boolian value check this property or not.

const course = {
    coursename:"Reactjs",
    price:100
}

const {coursename,price} = course

console.log(coursename)
console.log(price)