import React, { useState } from 'react'

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
       return <div ><h1>{cat}</h1></div>
    })}
    </div>
  )
}
