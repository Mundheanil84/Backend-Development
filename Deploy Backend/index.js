require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/Linkedin', (req, res) => {
    res.send('Anil Mundhe')
})

app.get('/login', (req, res) =>{
    res.send('<h1>Please login at Linkedin </h1>')
})

app.get('/youtube', (req, res) =>{
    res.send(' <h2>Backend Development Playlist</h2>')
})

app.listen(process.env.PORT || port, () =>{
    console.log(`Example app listening on port ${process.env.PORT || port}`)
})
