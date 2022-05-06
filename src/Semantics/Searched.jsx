import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

function Searched({ setSrc, setDown,setAuthor,category,setCaa,setDee,setNamer}) {
  const {search} = useParams()
  const[books, setbk] = useState([])
  useEffect(() => {
    fetch('https://som-quest.herokuapp.com/')
    .then(back =>{ return back.json()})
    .then(js =>{ setbk(js)})
    .catch(err => console.log(err))
  
  }, [])
  var src=[]
  
  const v = books.filter((book) =>{
    return String(book.name).toLowerCase().includes((search.toLowerCase()))
   });
  return (
    <>
    <h4 id='btitle'>{`Searched '${search}'`}</h4>
    <hr id='hd'/>
    <div id='booker'>
    {v.map((book, index) =>{
        src.push(book.src)
        return <Book setSrc={setSrc} setDown={setDown} download={book.down} key={index} index={index} setAuthor={setAuthor} category={book.category} description={book.description} setCaa={setCaa} setDee={setDee} setNamer={setNamer} name={book.name} src={src} author={book.author}/>
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