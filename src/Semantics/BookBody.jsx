import React, { useEffect, useState } from 'react'
export default function BookBody({ name, description,category,author }) {
    const [namer,setnamer] = useState(name)
    const [desc,setDesc] = useState(description)
    const [catega,setCatega] = useState(category)
    if(name != ""){
        setCookie('name', name, 1)
        setCookie('description', description,1)
        setCookie('category',category, 1)
        }
   useEffect(() =>{
        let book = getCookie("name");
        if (book != "") {
          setnamer( getCookie("name"))
          setDesc(getCookie("description"))
          setCatega(category = getCookie("category"))

        }
    },[])
  return (
    <div id='BB'>
        {namer &&
        <>
        <div id='hdBB'>
        <h1 id='hd1'>{namer}</h1>
    <hr />
        </div>
        <div id="p1">
        <img src={require('../images/-5789516285107877536_121.jpg')} alt="" />
        <div id='div-btn'>
        <div>
        <button>READ</button>
        <button>DOWNLOAD</button>
        </div>
        <div>
          <cite>by: {author}</cite>
        </div>
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

