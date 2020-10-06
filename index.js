const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {



    // console.log(`Looking for route: ${req.url}`)

    if(req.url === '/'){
        res.writeHead(200, {'content-Type': 'text/html'});
        const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')
        readStream.pipe(res)
    } else if(req.url === '/about') {
        res.writeHead(200, {'content-Type': 'text/html'});
        const readStream = fs.createReadStream(__dirname + '/about.html', 'utf-8')
        readStream.pipe(res)
    } else {
        res.writeHead(404, {'content-Type': 'text/html'});
        const readStream = fs.createReadStream(__dirname + '/404.html', 'utf-8')
        readStream.pipe(res)
    }


})

server.listen(3000, () => {

    console.log('Server listening on port 3000')

})
// const myJSON = JSON.stringify(server)
// console.log(myJSON)
// console.log(Object.keys(server))
// console.log(server.createServer())

server
//node const server = http.createServer()
