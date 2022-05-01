import React, { useState } from 'react'
import Book from './Book'
import BookBody from './BookBody'

function BooksLibrary({setAuthor,category, books,setCaa,setDee,setNamer}) {
    var src = [];
  return (
    <>
     <h4 id='btitle'>{category}</h4>
    <hr id='hd'/>
    <div id='booker'>
      {books.map((book, index) =>{
        src.push(book.src)
        return <Book key={index} index={index} setAuthor={setAuthor} category={book.category} description={book.description} setCaa={setCaa} setDee={setDee} setNamer={setNamer} name={book.name} src={src[index]} author={book.author}/>
      })}
    </div> 

    </>
    
  )
}

export default BooksLibrary