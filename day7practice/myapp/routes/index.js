var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  description: 'this is index page description'
 });
});

//about
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us',
  description: 'thi is about page'
 });
});
router.get('/terms', function(req, res, next) {
  res.render('terms', { title: 'terms and conditions',
  description: 'thi is terms and conditions page'
 });
});
router.get('/dbdemo',function(req,res,next){
  const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./mydb')

db.serialize(() => {
  db.run('CREATE TABLE lorem (info TEXT)')
  const stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (let i = 0; i < 10; i++) {
    stmt.run(`Ipsum ${i}`)
  }

  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    console.log(`${row.id}: ${row.info}`)
  })
})

db.close()

})


module.exports = router;
