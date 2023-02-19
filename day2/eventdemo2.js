const emitter=require('events')
let myemitter=new emitter();

const myfunc1=()=>{
    console.log("this is first function")
}
const myfunc2=()=>{
    console.log("this is secind function")
}
const myfunc3=()=>{
    console.log("this is third function ")
}
//Event Mappaing
myemitter.on("fun",myfunc1)
myemitter.on("fun",myfunc2)
myemitter.once("fun",myfunc3)//it will pass only one time


//Event Triggering
myemitter.emit("fun")
console.log("=======================")
myemitter.emit("fun")
myemitter.off("fun",myfunc2);
console.log("==================")
myemitter.emit("fun")



