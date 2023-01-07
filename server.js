require('dotenv').config()
const express = require('express')
const cors = require('cors')
const projects = require('./projects.json')
const about = require('./about.json')


const app = express()

const PORT = process.env.PORT || 4000

//midleware
app.use(cors())


// routes
app.get('/', (req, res) => {
   res.send("Route is Working!")
})

// projects route
app.get('/projects', (req, res) => {
    // sent the projects json file
    res.json(projects)
})


// about route 
app.get('/about', (req, res) => {
    // send the about json file
    res.json(about)
})


app.listen(PORT, () => {[
    console.log(`listening on port ${PORT}`)
]})


