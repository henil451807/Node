import express from 'express'

const app = express()


const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})


// const coding = ["js","python","java","cpp","rubey","swift"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item   
// }) // forEach can't return value it is undefined
// console.log(values);


const nums = [1,2,3,4,5,6,7,8,9,10]
const num1 = nums .filter((num) => num > 4 )

// console.log(num1);


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const num2 = myNums.map((item) => item + 10)
// console.log(num2);

//this called as a chaining methods.
const newNum = myNums.map((item) => item * 10).map((item) => item + 2).filter((item) => item >90)
console.log(newNum);



