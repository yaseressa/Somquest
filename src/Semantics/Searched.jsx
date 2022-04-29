import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

function Searched({category, books, value}) {
  const {search} = useParams()
  const v = books.filter((book) =>{
    return String(book.name).toLowerCase().includes((search.toLowerCase()))
   });
  return (
    <>
    <h4 id='btitle'>{`Searched '${search}'`}</h4>
    <hr id='hd'/>
    <div id='booker'>
      
      {v.map((book) =>{


           return <Book src={book.src} name={book.name} author={book.author}/>
        })}
        {console.log(v)}
    </div>
    </>
    
  )
}

Searched.propTypes={
  category: PropTypes.string,
  books:PropTypes.array,
  value:PropTypes.string
}

export default Searched