const http = require('http')
const formidable = require('formidable');
const url = require('url')

http.createServer((request , response) => {
    fs.readFile('index.html', (error, data) => {
    response.writeHead(200,{"content-type" : "text/html"})
    response.write(data)
    response.end()
    
});
}).listen(8082)
http.createServer((request, response) => {
    var q = url.parse(request.url, true)
    var filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            response.writeHead(404 , {'content-type' : 'text/html'})
            response.write("404 error")
           return response.end()
        }

        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write(data)
        console.log(filename)
       return response.end()
    })
}).listen(8081)
