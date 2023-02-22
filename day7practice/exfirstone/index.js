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

app.get("/",(req,res)=>{
    res.send("welcome to the  Express js just added  and removed")
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
