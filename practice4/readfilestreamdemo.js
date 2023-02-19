const fs =require ("fs")
console.log("program start")
const readStreamObj=fs.createReadStream("./bigfile.txt")
let data=""
readStreamObj.on("data",(chunk)=>{
    console.log("==========@@@@@@@@@@========")
    data=data+chunk

})
readStreamObj.on("end",()=>{
    // console.log(data)
})
console.log("program end")