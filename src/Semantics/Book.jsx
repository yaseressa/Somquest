import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


function Book({named, setSrc,index,download ,setDown,setAuthor,name, src, author,category,setCaa,setDee,setNamer,description}) {
  const jj = () =>{
     setDee(description)
     setCaa(category)
     setNamer(name)
     setAuthor(author)
     setDown(download)
     setSrc(src[index])
  }
  return (
    <>

    <div onClick={jj}>
             
        <Link to={`/s/${named}`}>
  
      
        <img src={`${src[index]}`} loading="lazy"/>
        <h4>{name}</h4>
        <h5>{author}</h5>
        
        </Link>
    </div>

    </>
  )
}

export default Book