import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Categories() {
    const [categ,setCateg] = useState([
        "Comedy",
        "Fiction",
        "Horror",
        "Novel"
    ]);

    
  return (
    
    <div id='cater'>
    {categ.map((cat) =>{
       return <div><Link to={`/categorizer/${cat}`}><h1>{cat}</h1></Link></div>
    })}
    </div>
  )
}
