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
const whoweare =(()=>{
    return "<h1> I am from  who we are </h1>"
})

const http = require('http')
const server =http.createServer((req,res) => {

    // res.write(`my url is ${req.url}`)
    //http ://localhost/
    if(req.url == "/"){
        res.write("<h1>  my HomePage <h1>")
    }
    if(req.url =="/aboutus"){
        res.write("<h1> About us </h1>")
    }
    if(req.url == "/who-we-are"){
        // res.write("<h1> who we are</h1>")
        res.write(whoweare());

    }
    res.end()
})
const port = 8081
server .listen(port,()=>{
    console.log(`server is now up  and running port number is ${port}`)
})