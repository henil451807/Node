import express from 'express'

const app = express()


const port = process.env.PORT || 5000;

app.listen(port,() => {
       console.log(`server start at http://localhost:${port}`)
})


for (let i = 0; i <=10; i++) { 
    console.log(i)  
}

for (let i =1; i<=5 ; i++){
    console.log(`outerLoop is : ${i}`);
    for (let j = 1; j<=10;j++){
        // console.log(`InnerLoop value is : ${j} and ${i}`);
        console.log(i + "*" + j + " =" + i*j);
    }
}

let i = 0
while ( i <= 10) {
    console.log(`value is : ${i}`);
    i = i + 3
}

let score = 3
do {
    console.log(`score is : ${score}`)
    score = score + 3
} while (score <=10);


//Array Specific Loops

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greeting = "Hello"
for (const greet of greeting) {
        console.log(`char is ${greet}`);
}


//Maps - unique value  - iterable

const map = new Map()
map.set('IN','India')
map.set('NZ','New Zeland')
map.set('Aus','Austrlia')

console.log(map);

for (const [key,value] of map) {
        console.log(key, value);
} 

// let obj = {
//     id:'1',
//     name:'HK'
// }

// for (const i of obj) {
//     console.log(i);
// }  it can't work of this becasue obj it can't iterable like map

const myObj = {
    js:'javascript',
    cpp:'C++',
    py:'Python',
    java:'java'
}

for (const key in myObj) {
    // console.log(key);
    console.log(`${key} for each launuage ${myObj[key]}`);
}


const arr1 = ["js",'cpp','py','java'] 

for (const key in arr1) {
    // console.log(key);// it will gives index of each element
    console.log(arr1[key]);
}


// for (const key in map) {
//     console.log(key);
// } // for map forIn can't work


//forOf Object can't work and forIn map can't work.

const arr2 = [1,2,3,4,5]
arr2.forEach(element => {
    console.log(element);
});

arr2.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langName:"Javascript",
        langFilename:"js"
    },

    {
        langName:"python",
        langFilename:"py"
    },

    {
        langName:"Java",
        langFilename:"java"
    },
]

myCoding.forEach((item) => {
    // console.log(item)
    console.log(item['langName']);
})  //forEach can't return a value.