import React from 'react'
import { Link } from 'react-router-dom'

function Book({setAuthor,name,index, src, author,category,setCaa,setDee,setNamer,description}) {
  const jj = () =>{
     setDee(description)
     setCaa(category)
     setNamer(name)
     setAuthor(author)
  }
  return (
    <>
    {src[index] &&
    
    <div onClick={jj}>
      
        <Link to={`/s/${name}`}>
        <img src={`${src}`} width='150' height='250'/>
        <h4>{name}</h4>
        <h5>{author}</h5>
        </Link>
    </div>
}
    </>
  )
}

export default Book