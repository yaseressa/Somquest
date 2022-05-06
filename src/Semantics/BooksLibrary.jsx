import React, { useState } from 'react'
import Book from './Book'
import BookBody from './BookBody'

function BooksLibrary({setSrc, setDown,setAuthor,category, books,setCaa,setDee,setNamer}) {
    var src = [];
  return (
    <>
     <h4 id='btitle'>{category}</h4>
    <hr id='hd'/>
    <div id='booker'>
      {books.map((book, index) =>{
        src.push(book.src)
        return <Book setSrc={setSrc} setDown={setDown} download={book.down} key={index} index={index} setAuthor={setAuthor} category={book.category} description={book.description} setCaa={setCaa} setDee={setDee} setNamer={setNamer} name={book.name} src={src} author={book.author}/>
      })}
      
    </div> 

    </>
    
  )
}

export default BooksLibrary