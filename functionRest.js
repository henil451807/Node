import express from 'express'

const app = express()


const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})

const calculate = (val1,val2,...num) => {
    return num
}

console.log(calculate(200,30,400))

const one = () => {
    const username = "Henil"
    
    const two = () => {
        const jersyname = "HK"
        console.log(username)
    }
    // console.log(jersyname)   //can't access
    two()
}

one();

//Immediately Invoked function Expression (ITFE) =>  function that is called immediately after it is defined
//beofore execution of this function always required semicolumn before this line whatever you write a code.
(function db ()  {
    //named IIFF
    console.log("DB1 connected .....");
})();

((name) => {
    console.log(`DB2 connected ${name}`);
})("HK");

