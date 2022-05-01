import React from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book';

export default function Categorizer({book}) {
    const {searcher} = useParams()
    const v = book.filter((book) =>{
        return String(book.category).toLowerCase() === ((searcher.toLowerCase()))
       });
  return (
      <>
    <h4 id='btitle'>{searcher}</h4>
    <hr id='hd'/>
    <div id='booker'>
      
    {v.map((book) =>{
            return <Book src={book.src} name={book.name} author={book.author}/>
})}
    </div> 
    </>
  )
}
