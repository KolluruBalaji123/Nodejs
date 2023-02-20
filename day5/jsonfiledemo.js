const fs =require("fs")

const book ={
    title:"Nodejs",
    Author:"Rayan Dahl",
    price:300
}
const Bookjson=JSON.stringify(book)
const Bookdata=JSON.parse(Bookjson)
 fs.writeFileSync("./bookdemo.json",Bookjson);




// console.log(book)
// console.log(Bookjson)
// console.log(Bookdata)


