const  fs = require("fs")
//Read Sync
const path =require("path")

console.log("program start")
// let output =fs.readFileSync("./sample.txt")
let output =fs.readFileSync(`.${path.sep}sample.txt`)
console.log(output.toString());
//ReadASync

// fs.readFile("./sample.txt",(err,data)=>{
//     if(err) throw err
//     console.log(data.toString())
// })
console.log("program end")
