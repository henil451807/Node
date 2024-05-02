import express from 'express'

const app = express()


const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})

const userLoggedIn= true
const card = true

if(userLoggedIn && card){
    console.log("Executed");
}

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;

        case 2:
        console.log("Feb");
        break;

        case 3:
            console.log("March");
            break;

    default:
        console.log("Default case match");
        break;
}

const usrEmail  = "hk@gmail.com"
if(usrEmail){
    console.log("Got Email");
}else{
    console.log("Don't have a usr email.");
}

//falsy value
//false 0 ,-0, BigInt 0n,"",

//truthy value
//"0",'false',[],{},function(){}

const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Objet is empty");
}

//Nullist coalescing Operator (??) : null undefined
 // It will take the first value if first one is undefineed or null it will move forward.
let val3  = 5 ?? 10
let val4 = undefined ?? 15

let val5  = null ?? 10 ?? 20
console.log(val3);
console.log(val4);
console.log(val5);  