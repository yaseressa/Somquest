import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book';

export default function Categorizer({books,setSrc, setDown,setAuthor,category,setCaa,setDee,setNamer}) {
    const {searcher} = useParams()
    var v=[]
    const [catore, setCatore]  = useState(searcher)
    if(category != "Most Popular"){
      setCookie("category", category, 1)

      }
 useEffect(() =>{
      let book = getCookie("category");
      if (book != "") {
        setCatore( getCookie("category"))


      }
  },[])





     if(books != null){
     v = books.filter((book) =>{
      
        return String(book.category).toLowerCase() === ((searcher.toLowerCase()))
     })}
      var src =[]
  return (
      <>
    <h4 id='btitle'>{catore}</h4>
    <hr id='hd'/>
    <div id='booker'>
      {v.map((book, index) =>{
        src.push(book.src)
        return <Book setSrc={setSrc} setDown={setDown} download={book.down} key={index} index={index} setAuthor={setAuthor} category={book.category} description={book.description} setCaa={setCaa} setDee={setDee} setNamer={setNamer} name={book.name} src={src} author={book.author}/>
      })}
      
    </div> 

    </>
  )
}








function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/s/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}