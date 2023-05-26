const http = require('http')

http.createServer((req, res) => {
    console.log(req)
    res.write('Hola mundo')
    res.end()
})
.listen(8888)

console.log('Escuchando el puerto', 8080)