// const express = require('express')
import express from 'express'

const app = express()

app.get("/api",(req,res) => {
    res.json({"country": ["India","New Zeland","Austrlia","SouthAfrica",]})
})

app.get("/country",(req,res) => {
    const country = [
        {
            id:1,
            name:'India',
            sport:'Cricket'
        },

        {
            id:2,
            name:'New Zeland',
            sport:'Cricket'
        },
        {
            id:1,
            name:'Austrlia',
            sport:'Cricket'
        }
    ]
    res.send(country);
})








const port = process.env.PORT || 5000;


app.listen(port,() => {
    console.log(`server start at http://localhost:${port}`)
})