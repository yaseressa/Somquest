import React from 'react'
import Book from './Book'
import BookBody from './BookBody'

function BooksLibrary({setAuthor,category, books,setCaa,setDee,setNamer}) {

  return (
    <>
     <h4 id='btitle'>{category}</h4>
    <hr id='hd'/>
    <div id='booker'>
      {books.map((book) =>{
        return <Book setAuthor={setAuthor} category={book.category} description={book.description} setCaa={setCaa} setDee={setDee} setNamer={setNamer} src={book.src} name={book.name} author={book.author}/>
      })}
    </div> 

    </>
    
  )
}

export default BooksLibrary