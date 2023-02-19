
const EventEmitter=require('events')//its is an object event emitter

let myEventEmitter=new EventEmitter(); //craeting the custom eventemitter 
const fundemo=()=>{
    console.log('i am from fun demo')

}
const enjoy=()=>{
    console.log("i am enjoy")
}
const happy=()=>{
    console.log("i am happy")
}
// event mapping  with call back function 
myEventEmitter.on("fun",fundemo)//it will map the  first argument as string and next one is function
myEventEmitter.on("balu",enjoy)
// myEventEmitter.on("fun",happy)
myEventEmitter.addListener("fun",happy)//we can also use addlister instead of "on"
//trigger Event
myEventEmitter.emit("fun")
myEventEmitter.emit("balu")
console.log("===================")
myEventEmitter.removeListener("fun",happy)//it will not print the function when it is in off
myEventEmitter.emit("fun")//it print what the "fun" trigger 

