const express=require("express")
const app=express();
const port= process.env.port || 3003
const book =require("./book")

app.get("/",(req,res)=>{
    res.send("welcome to the  Express js")
})
app.get("/api/books",(req,res)=>{
    res.json(book)
})
app.listen(port ,()=>{
    console.log(`server started from ${port} `)
})
