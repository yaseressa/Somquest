import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function BookBody() {
  const{book} = useParams()
  const [bk,setbk] = useState(null)
  useEffect(() => {
    fetch(`https://som-quest.herokuapp.com/s/${book}`)
    .then(back =>{ return back.json()})
    .then(js =>{ setbk(js)})
    .catch(err => console.log(err))
  
  }, [])
  var download, name , source ,description,category,author;
  if(bk != null){
     download = bk.down
     name = bk.name
     source = bk.src
     description = bk.description
     category = bk.category
     author = bk.author

  }
    const [namer,setnamer] = useState(name)
    const [desc,setDesc] = useState(description)
    const [catega,setCatega] = useState(category)
    const [auth, setAuth] = useState(author)
    const[srcg,setSrcg] = useState(source)
    const[dld,setDld] =useState(download)
    if(name != ""){
        setCookie('name', name, 1)
        setCookie('description', description,1)
        setCookie('category',category, 1)
        setCookie('author',author, 1)
        setCookie('source',source, 1)
        setCookie('down',download, 1)
        }
   useEffect(() =>{
        let book = getCookie("name");
        if (book != "") {
          setnamer( getCookie("name"))
          setDesc(getCookie("description"))
          setCatega(getCookie("category"))
          setAuth(getCookie("author"))
          setSrcg(getCookie('source'))
          setDld(getCookie("down"))


        }
    },[])
  return (
    <div id='BB'>
        {namer &&
        <>
        <div id='hdBB'>
        <h1 id='hd1'>{namer}</h1>
    <hr />
    <cite><code style={{fontVariant : 'small-caps'}}>by: {auth}</code></cite>
        </div>
        <div id="p1">
          <div>
        <div>
        <img src={`${srcg}`} alt="" />
        </div>

        </div>
        <div id='div-btn'>
        <button>READ</button>
        <button><a href={dld}target='_blank'>DOWNLOAD</a></button>

        </div>
        </div>
        <div id="disc">
            <h1 id='hd2'>Description</h1>
            <code>Genre: {catega}</code>
            <p>{desc}</p>
        </div>
        </>}
    </div>
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

