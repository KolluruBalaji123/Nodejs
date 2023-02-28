const express=require("express")
const app=express();
const port= process.env.port || 3004
 const router =express.Router()
  router.use('/sample',(req,res,next)=>{
    console.log(` RFirst Call Back:`)
    next();
  },(req,res,next)=>{
    console.log(`second call Back`)
    next();
  })
  router.get('/sample',(req,res)=>{ 
    console.log("third call back")
    res.send('sample page')
  })
  app.use('/',router)
 app.listen(port,()=>{
    console.log(`server started  on ${port}`)
 })