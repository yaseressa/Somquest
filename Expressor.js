const express = require('express')
const { getDb, connectToDb } = require('./mongoc')
const cors = require("cors");
const app = express()
app.use(cors());
let db
connectToDb((err) => {
  if(!err){
    app.listen('3010', () => {
      console.log('app listening on port 3010')
    })
    db = getDb()
  }
})

app.get('/', (req, res) => {
  let books = []

  db.collection('books')
    .find()
    .forEach(book => books.push(book))
    .then(() => {
      res.status(200).json(books)
    })
})
