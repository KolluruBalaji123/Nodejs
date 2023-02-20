const fs = require("fs")
const jsonfile="./bookdata.json"
const saveBook=(bookObj)=>{
    const bookjson =JSON.stringify(bookObj)
    fs.writeFileSync(jsonfile,bookjson)

}


const addBook =(title,author)=>{
    const bookObj={
       title,
       author

    }
    const books=loadBooks()
    books.push(bookObj)
    saveBook(books);
    console.log(`new book craeted!, ${title},${author}`)

}

const loadBooks = () => {
    try{
        const BookBuffer =fs.readFileSync(jsonfile)
        const bookjson=BookBuffer.toString();
        const bookdata=JSON.parse(bookjson)
        return bookdata

    } 
    catch (err){
        return []

    }
}
const listBook =()=>{
    const books =loadBooks()
    books.forEach(book=>{
        console.log(`BookTitle:${book.title}`)
        console.log(`BookTitle:${book.author}`)
        console.log(`\n`)
    })
   
}
module.exports.addBook = addBook
module.exports.listBook=listBook