

// this app will give option to add remove,
// list, update book 
// Five Operation
// create
// Read
// update
// Delete
// list
// bookapp create --title="Book1" --author ="Author1"
// createBook
// Bookapp delete --title="Book1"
// RemoveBook
// Bookapp update --title="Book1" --newtitle="updateBook"
// updateBook
// BookappList
// List of Books

const book=require("./Bookfun")




var argv = require('yargs/yargs')(process.argv.slice(2))
.command('create','create new book',
function (yargs) { 
    return yargs.options({
    't': {
         alias: 'title',
         describe: 'Title of the book'
         },
     'a':
      { 
         alias: 'author',
       describe: 'Author of the book' }
     } 
     )},
     function (argv) { 
        book.addBook(argv.title,argv.author)
        })
        .command('list','listbooks',function (yargs){
            return

        },
        function (argv){
            book.listBook();
        }
        )
       

 .command('update','update new book',
function (yargs) { 
    return yargs.options({
    't': {
         alias: 'title',
         describe: 'Title of the book'
         },
     'nt':
      { 
         alias: 'newtitle',
       describe: 'new title' }
     } 
     )},
     function (argv) { 
   
        console.log(argv.newtitle)
       
        })
        .command('delete','delete new book',
function (yargs) { 
    return yargs.options({
    't': {
         alias: 'title',
         describe: 'Title of the book'
         },
     'd':
      { 
         alias: 'delete',
       describe: 'remove the book' }
     } 
     )},
     function (argv) { 
        console.log(argv.delete)
      
        })


         .help()
          .argv