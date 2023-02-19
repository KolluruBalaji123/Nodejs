const fs=require("fs")

console.log("program start")
//Write sync
let data="I am Balaji i am from Kolluru"
// fs.writeFileSync("./mynewFile.txt",data)
// fs.writeFile("./mynewFile.txt")
// console.log("file created")

//WriteAsynsc 
fs.writeFile("./mynewFile.txt",data,(err) => {
    if (err) throw err 
    console.log("File created")
})


console.log("Prgram end")