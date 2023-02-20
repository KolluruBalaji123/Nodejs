//HTTPMETHODS
// GET -TO GET ALL RECORDS
// POST -TOadd record
// PUT-to update record
// Delete - to delete the record
// response code
//200-sucess
//404-error
//500-
// DNS-Domain name  sevice
//local ip addrss=127.0.0.0,127.0.0.1,127.0.0.2

const http = require('http')
const server =http.createServer((res,req) => {
    res.write("this is my first response server")
    res.end()
})
const port = 80
server.listen(port);