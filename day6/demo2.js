const http = require('http')
const server =http.createServer((req,res) => {
    res.write("this is my second  response server")
    res.end()
})
const port = 8082
server.listen(port,()=>{
    console.log('server started sucessfully')
});