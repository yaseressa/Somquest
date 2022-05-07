import React, { useState, useEffect } from 'react'
import Book from './Book'
import BookBody from './BookBody'

function BooksLibrary({setSrc, setDown,setAuthor,category,setCaa,setDee,setNamer}) {
    var src = [];
    const [books, setbk]  =useState([])
    useEffect(() => {
      fetch('https://som-quest.herokuapp.com/')
      .then(back =>{ return back.json()})
      .then(js =>{ setbk(js)})
      .catch(err => console.log(err))
    
    }, [])
  return (
    <>
     <h4 id='btitle'>{category}</h4>
    <hr id='hd'/>
    <div id='booker'>
      {books.map((book, index) =>{
        src.push(book.src)
        return <Book named={book.named} setSrc={setSrc} setDown={setDown} download={book.down} key={index} index={index} setAuthor={setAuthor} category={book.category} description={book.description} setCaa={setCaa} setDee={setDee} setNamer={setNamer} name={book.name} src={src} author={book.author}/>
      })}
      
    </div> 

    </>
    
  )
}

export default BooksLibrary