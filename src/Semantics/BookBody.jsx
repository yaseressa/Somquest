import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function BookBody({ source, download, name, description,category,author }) {
  const{book} = useParams()
  const [bk, setbk] = useState(null)
  useEffect(() => {
    fetch(`https://som-quest.herokuapp.com/s/${book}`)
    .then(back =>{ return back.json()})
    .then(js =>{ setbk(js)})
    .catch(err => console.log(err))
  
  }, [])

  return (
    <div id='BB'>
        {bk &&
        <>
        <div id='hdBB'>
        <h1 id='hd1'>{bk.name}</h1>
    <hr />
    <cite><code style={{fontVariant : 'small-caps'}}>by: {bk.author}</code></cite>
        </div>
        <div id="p1">
          <div>
        <div>
        <img src={`${bk.src}`} alt="" />
        </div>

        </div>
        <div id='div-btn'>
        <button>READ</button>
        <button><a href={bk.down}target='_blank'>DOWNLOAD</a></button>

        </div>
        </div>
        <div id="disc">
            <h1 id='hd2'>Description</h1>
            <code>Genre: {bk.category}</code>
            <p>{bk.description}</p>
        </div>
        </>}
    </div>
  )
}

