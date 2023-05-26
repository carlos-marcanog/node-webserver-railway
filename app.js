const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

hbs.registerPartials(__dirname + '/views/partials')
// require('hbs')
app.set('view engine', 'hbs')

//Servir contenido estatico
app.use(express.static('public'))

app.get('/',  (req, res) => {
    res.render('home', {
      nombre: 'Carlos Marcano',
      titulo: 'Aplicacion de Node'
    })
})

app.get('/generic',  (req, res) => {
    res.render('generic', {
      nombre: 'Carlos Marcano',
      titulo: 'Aplicacion de Node'
    })
})

app.get('/elements',  (req, res) => {
    res.render('elements', {
      nombre: 'Carlos Marcano',
      titulo: 'Aplicacion de Node'
    })
})

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })