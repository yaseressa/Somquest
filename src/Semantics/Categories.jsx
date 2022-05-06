import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Categories({setCat}) {
    const [categ,setCateg] = useState([
        "Programming Languages",
        "Databases",
        "Technology",
        "Algorithms",
        "Interpreters and Compiler"
    ]);

    
  return (
    
    <div id='cater'>
    {categ.map((cat) =>{
      setCat(cat)
       return <div><Link to={`/categorizer/${cat}`}><h1>{cat}</h1></Link></div>
    })}
    </div>
  )
}
