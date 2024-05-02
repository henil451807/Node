import express from 'express'

const app = express()


const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})

                    /* Objects */

//singleton
// Object.create   this way creating a object called a singleTon
//Object literls

const Mysym = Symbol("key1")  
const user = {
    name:"Henil",
    "full name":"Henil Kevadiya",
    [Mysym]:'myKey',
    age:22,
    location:"Ahmedabad",
    email:'abc@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
}

console.log("Name : ",user.name)
console.log("full name : ",user["full name"])
console.log("Email : ",user["email"])
console.log("Symbol is : ",user[Mysym])

user.email = "hk@gmail.com"
// console.log(user["email"])

// Object.freeze(user)   // can't change the value
// user.email = "abc1@gmail.com"
// console.log(user)

user.greeting = function(){
    console.log("hello")
}

user.greetingTwo = function(){
    console.log(`Hello : ${this.age}`)
}
console.log("user Greeting ",user.greeting())
console.log("Gretting 2",user.greetingTwo())

const country  = {
    "india":"India",
    "aus":"Austrlia",
    "nz":"New Zeland",
    "rsa":"SouthAfrica"
}

console.log("country is : ",typeof(country));
 
const ArrayofObject = Object.keys(country).map(key => ({
    value:key,
    label:country[key]
})) 

console.log("Array is : ",ArrayofObject);

const findval = ArrayofObject.find(option => option.value === "india")
console.log("findVal is : ",findval);


let set1 = new Set(["India",'SA','RSA','NZ'])
console.log("set1 is : ",set1);
console.log("size of set is : ",set1.size);

let set2 = new Set("IND")
set2.add("AUS").add(10) // it is a value that added to the set
console.log("Set2 is : ",set2);
console.log("Return Value of Delete",set2.delete("I"))  // return true or false
console.log("after Delete set2 value is : ",set2);

let s3 = new Set([10,20,30])
// s3.clear() // to clear the set and return empty object. and return value undefinned
console.log("Set3 is : ",s3);
console.log("entries",s3.entries().next().value)
console.log("has methods is : ",s3.has(50));
console.log("keys is : ",s3.keys());

console.log(Boolean(!!0));

// const merge = () => {
//     let final = ""
//     for(let p = 0; p < arguments.length; p++){
//         final += arguments[p] + " ";
//     }
//     return final
// }

// let ans = merge(""Test","At","His","Best");
// console.log("ans is : ", ans);

// function merge() {
//     let final = "";
//     for (let p = 0; p < arguments.length; p++) {
//        final += arguments[p] + " ";
//     }
//     return final;
//  }
//  let ans = merge("Test", "at", "His", "Best");
//  console.log("ans is : ",ans);

// const merge = (...arguments) => {
//     let final = "";
//     for (let p = 0; p < arguments.length; p++) {
//         final += arguments[p] + " ";
        
//     }
//     return final;
// }

// let ans = merge("Test", "at","his","Best")
// console.log("ans is : ",ans);

const merge = (...args) => {
    let final = "";
    for (let p = 0; p < args.length; p++) {
        final += args[p] +" ";
    }
    return final;
}

let ans = merge("Test", "at", "his", "Best");
console.log("ans is : ", ans);

const number =[7,6,4,3,1,8]
const max_number = Math.max.apply(null,number)
console.log("max_number is : ",max_number);

const min_number = Math.min.apply(null,number);
console.log("Min_number is : ",min_number);

const point1 = {
    X:100,
    Y:100
}

const point2 = {
    X:200,
    Y:100
}

const point3 = {
    X:350,
    Y:400
}

const printVal = function()  {
    // console.log("Cordinate is : ",this.X + "," + this.Y);
    console.log("Coordinate is : ", this.X + "," + this.Y);
}

const printFunc2 = printVal.bind(point1)
printFunc2()

const printFunc3 = printVal.bind(point2)
printFunc3()

const printFunc4 = printVal.bind(point3)
printFunc4()


const multiply = (x,y) => {
    return x * y
}

const multiplyByTwo = multiply.bind(null,2)
console.log("Multiplication is : ",multiplyByTwo(5));

// const outer = () => {
//     console.log("Outer function will be executed ");
//     const inner = () => {
//         console.log("Inner Function wil be executed");
//     }
//     inner()
// }

// outer()


// const outer1 = () => {
//     console.log("Outer1 Function will be executed");
//     return  function inner1(){
//         console.log("Inner1 Function will be executed");
//     }
// }

// const func = outer1()
// func()
// func()

// var cnt = 100;
// const decrement = () => {
//     cnt = cnt - 1
//     console.log("Decrement value is : ",cnt);
// }

// decrement();
// decrement();
// decrement();

const counter = () => {
    let cnt = 100;
    return function decrement() {
        cnt = cnt -1
        console.log("Decrement value is : ",cnt);
    }
}

const func1 = counter()
func1()
func1()
func1()

const division = (a=100,b=50) => {
    console.log("divison is : ",a/b);
}

division()
division(100,20)
division(100,undefined)
division(undefined,20)


const sum = (...num) => {
    let totalSum = 0;
    for(let p =0; p < num.length; p++){
        totalSum += num[p];
    }
    console.log("Total Sum is : ",totalSum);
}

sum(1,2,3,4)

const printWatch = ({brand,price,currency}) => {
    console.log("Price is : ",price, "and Brand is : ",brand , "Currency is : ",currency);
}

const watch = {
    brand:"Titen",
    price:10000,
    currency: "INR"
}

printWatch(watch)

const val = new Number(null,number)
console.log("Val is : ",val) ;

const str1 = String("Hello World")
console.log("str1 is : ",str1);

let strs = new Array("Test","at","His","Best")
console.log("Str is : ",strs);

let car = new Array(20)
console.log("cars is : ",car);


const date = new Date()
console.log("date is : ",date);

const pi_val = Math.PI;
console.log("pi_val is : ",pi_val);

const sine_val = Math.sin(30)
console.log("sine_val is : ",sine_val);
console.log(Math.ceil(5.5));

const sym1 = Symbol()
const sym2 = Symbol()
console.log("sym1 is : ",sym1);
console.log("sym2 is : ",sym2);
if(sym1 === sym2){
    console.log("sym1 and sym2 are Equal");
}else{
    console.log("sym1 and sym2 are not equal");
}

const objId = Symbol()

const person = {
    name:"HK",
    age:23,
    [objId]:"abcd123"
}

console.log("person is : ",person);
console.log("Json person:",JSON.stringify(person)); 

let set = new Set([100,200,3,500])
set.add(10)
set.delete(3)
console.log(set);

for(let value of set.values()){
    console.log("value is : ",value);
}

console.log("set has 200 ? ",set.has(200));

const s1 = new Set(["BMW","Audi","TATA"]);
const s2 = new Set(["BMW","TATA","Honda","Suzuki"]);

const union = new Set([...s1,...s2]) //union
console.log(union);

// for (const value of union.values()) {
//     console.log("value is  : ",value);
// }


//intersection
const inter = new Set();
for(let car of s1){
    if(s2.has(car)){
        inter.add(car)
    }
}

console.log("intersection is : ",inter);
for(let value of inter.values()){
    console.log("value is : ",value);
}


//difference of two set

const diff = new Set(s2)
console.log("Intial set is : ",diff);
for(let car of s1){
    diff.delete(car)
}

console.log("difference is : ", diff);






const obj1 = {name:"hk"}
const obj2 = {age:23}
const weak_set = new WeakSet()
weak_set.add(obj1)
if(weak_set.has(obj1)){
    console.log("obj1 successfully added on weakSet");
}

const map = new Map([["Apple", 100],["Banana",200]])
console.log(map);
map.set("Graps",300)
for(let [key,value] of map){
    console.log("key is : ",key ," : And value is: ",value);
}

const map1 = new Map()
const laptop = {
    brand:"HP",
    model:"Pavillion"
}

map1.set(laptop,10000)
console.log("get value is : ",map1.get(laptop));

// let str = "Hello"
// for(let char of str){
//     console.log("str is : ",char);
// }

// const map2 = new Map([
//     [1,"one"],
//     [2,"two"],
//     [3,"three"]
// ]);

// for(let ele of map2){
//     console.log("element is : ",ele);
// }

// const array = [true,false,20,40,"Hello"]
// array.forEach((ele) => {
//     console.log(ele);
// })

const car1 = {
    name:'Audi',
    model:"Q6",
    price:700000,
}

let prop = "model"
let model = Reflect.get(car1,prop)
console.log(model); 

const p1 = Reflect.set(car1,"doors",4)
console.log(car1.doors);


// class Table{
//     static getSize(){
//         return console.log("10 x 10");
//     }
// }
// Table.getSize()  // static method


class Table{
    static printSize(){
        return"The size of Table is 20 x 20";
    }
    getColor(){
        return "Black";
    }
}
console.log(Table.printSize());
const tableObj = new Table();
console.log("The color of the table is : ",tableObj.getColor());


class Table1{
    static printeSize(){
        return "The size of Table is 20 x 20"
    }
    static getColor(){
        return "The Color of the table is Blue"
    }
}

console.log(Table1.printeSize() ,"and",Table1.getColor());

class Table2{
    static printSize(){
        return "The Size of table is 20 x 20"
    }
    static printSize(){
        return "The Size of table is 30 x 30"
    }
}

console.log(Table2.printSize());


class Num{
    static getSqr(a){
        return a * a
    }
    printSqr(a){
        console.log("The Square of ",a ,"is : ",Num.getSqr(a));
    }
}

const num1 = new Num()
num1.printSqr(6)

const c1 = "INDIA"
console.log(c1.charAt(0).toUpperCase() + c1.slice(1).toLowerCase());


//cart Item
const shoppingCart = () => {
    const cartItem = []
    const add = (item) => {
        cartItem.push(item);
        console.log(`${item.name} add to the cart`);
    }
    const remove = (itemName) => {
        const index = cartItem.findIndex(item => item.name === itemName)
        console.log("index is : ",index);
        if(index !== -1){
            const removedItem = cartItem.splice(index,1)[0];
            console.log(`${removedItem.name} removed from cart`);
        }else{
            console.log(`${itemName} not Found`);
        }
    }
    return{
        add,
        remove
    }
}

const item1 = {name:'car',price:1000000};
const item2 = {name:"Bike",price:72000};

const cart = shoppingCart()
cart.add(item1)
cart.add(item2)
cart.remove("Bike")


