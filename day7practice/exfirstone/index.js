const express=require("express")
const app=express();
const port= process.env.port || 3004

const book=[
    {
        title :"Book1",
        author:"Author1"
    },
    {
        title :"Book2",
        author:"Author3"
    },
    {
        title :"Book3",
        author:"Author3"
    }
]
const myLogger = function (req, res, next) {
    console.log('i am  from middleware')
    next()
  }
  app.use(myLogger)


app.get("/",(req,res)=>{
    res.send("welcome to the  Express js just added  and removed")
})
app.get("/contactus",(req,res)=>{
    res.send("welcome to the  contactjs page")
})
app.get("/about us",(req,res)=>{
    res.send("welcome to the  aboutus  page")
})
app.get("/api/books",(req,res)=>{
    res.json(book)
})
app.get("/api/books",(req,res)=>{
    res.json(book)
})
app.post("/update",(req,res)=>{
    res.send(`first argument is  ${req.params.first}<br> second argument is ${req.params.second}`)
});

app.get("/paramcheck/:first/:second",(req,res)=>{
    res.send(`first argument is  ${req.params.first}<br> second argument is ${req.params.second}`)
})
app.listen(port ,()=>{
    console.log(`server started from ${port} `)
})
