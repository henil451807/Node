import express from 'express'

const app = express()


const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})

                                      /* DATE */

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))

let myCreatedDate = new Date(2023,0,23) // month start from 0 : january
console.log(myCreatedDate.toDateString())

let createDate = new Date(2023,0,23,6,0,23)  // year,month, date, houre, minite, second
console.log(createDate.toLocaleString())

let timeStamp =Date.now()
console.log(timeStamp) 
console.log(createDate.getTime())
console.log(Math.floor(Date.now()/1000)) // convert to Second

let NewDate = new Date()
console.log(NewDate.getMonth() + 1)

console.log(NewDate.toLocaleString('default',{
    weekday: 'long',
})) //lot of property in localString and custmize the date


                /*ARRAY*/

let Myarr = ["India",1,"AUS","NEW"]
//methods
Myarr.push(6) 
// Myarr.pop() 

Myarr.unshift("India") // add value on 0th index
Myarr.shift() // remove first value
console.log(Myarr)

const newArr = Myarr.join("")   
console.log(newArr)

//Slice , splice
// console.log("A ," ,Myarr.slice(1,3))
let n1 = Myarr.splice(1,3)
console.log("B",Myarr)  // Index no of 1,2 and 3 was removed
console.log("C ", n1)  // and that store in this n1


const A1 = ["India","Aus", "Sa","New Zeland"]
const A2 = [1,2,3,4]

// A1.push(A2)
// const A3 = A1.concat(A2) //return new Array
// const A3 = [...A1,...A2]

const A4 = [1,2,3,[4,5,6],[7,8,[4,5]],9]
const Arr = A4.flat(Infinity)
console.log(Arr)
console.log(Array.isArray("India"))
console.log(Array.from("India"))