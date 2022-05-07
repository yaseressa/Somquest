import logo from './logo.svg';
import {React, useEffect, useState} from 'react'
import './App.css';
import Header from './Semantics/Header';
import {Routes, Route,Link} from 'react-router-dom'
import BooksLibrary from './Semantics/BooksLibrary';
import Bodier from './combo/Bodier'
import Categories from './Semantics/Categories';
import Searched from './Semantics/Searched';
import BookBody from './Semantics/BookBody';
import Categorizer from './Semantics/Categorizer';
import FileView from './Semantics/FileView';

function App() {
  const [caa, setCaa] = useState('')
  const [author, setAuthor] = useState('')
  const [dee, setDee] = useState('')
  const [namer, setNamer] = useState('')
  const [valuer,setValuer] = useState('')
  const [kiki,setKiki] = useState('')
  const [menu, setMenu] = useState(0);
  const [category, setCat] = useState('Most Popular');
  const [book,setbk] = useState(null)
  const [down, setDown] = useState('')
  const [source, setSrc] = useState('')
useEffect(() => {
  fetch('https://som-quest.herokuapp.com/')
  .then(back =>{ return back.json()})
  .then(js =>{ setbk(js)})
  .catch(err => console.log(err))

}, [])



  const hclicker =() =>{
    if(menu == 0){
    setMenu(1);
    }else{
      setMenu(0);
    }
  }
  const cage = () =>{
    setMenu(0)
  }
  const searcher = () =>{

    
  }
  const searching = (e) =>{
    setValuer(e.target.value)
  }
  const hclickerc = () =>{
    setMenu(1)
  }
  return (
    <>

      <Routes>
      {(book && menu == 0) &&(
        <Route exact path='/' element={
     <>
     <Header>
      <Link to='/' onClick={cage}><h1 id='hdh' >Somquest</h1></Link>
    <span id='men' onClick={hclicker}>
    
      <span></span>
      <span></span>
    </span>
    </Header>
     <Bodier>
     <BooksLibrary setSrc={setSrc} setDown={setDown} setAuthor={setAuthor} setCaa={setCaa} setNamer={setNamer} setDee={setDee} category={category} books={book}/>
     </Bodier>
     </>
    }>
      </Route>
  )}


    {(book && menu == 1) &&(
        <Route exact path='/' element={
     <>
     <Header click={hclicker} notHome={true}>
     <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
    <span id='men' style={{backgroundColor: "grey"}} onClick={hclicker}>
    
    <i className="gg-close"></i>
    </span>

     </Header>
     <div id='cate'>
       <form onSubmit={searcher}>
     <input id='rec1' placeholder='Search: '   onChange={searching}/>
    <Link to={`/home/${valuer}` } > <button type='submit' id='rec2'><i className="gg-search"></i></button></Link>
     </form>
     <div id='menh'>
     <Link to='/categories' onClick={hclicker}><h1 id='menh1'>Categories</h1></Link>
     <h1 id='menh2'>About-Us</h1>
     </div>
</div>
     </>
    }>
      </Route>
  )}



<Route path='/home/:search'  element={
            <>
            <Header>
             <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
           <span id='men' onClick={hclickerc}>
           <Link to='/'>
             <span></span>
             <span></span>
             </Link>
           </span>
           
           </Header>
<Bodier>
<Searched books={book} setSrc={setSrc} setDown={setDown} setAuthor={setAuthor} setCaa={setCaa} setNamer={setNamer} setDee={setDee} category={category} />
</Bodier>
</>
} />


<Route exact path={`/s/:book`} element={
           <>
           <Header>
            <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
          <span id='men' onClick={hclickerc}>
          <Link to='/'>
            <span></span>
            <span></span>
            </Link>
          </span>
          
          </Header>
          <Bodier>
             <BookBody source={source} download={down} author={author} name={namer} category={caa} description={dee}/>
          </Bodier>
          </>
} />

  //Categories

   {(menu == 0) &&(
        <Route exact path='/Categories' element={
     <>
     <Header >
     <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
    <span id='men' onClick={hclicker}>
      <span></span>
      <span></span>
    </span>
     </Header>
     <Bodier>
     <Categories setCat={setCat} setKiki={setKiki}/>
     </Bodier>
     </>
    }>
      </Route>
  )}
  
     {(menu == 1) &&(
        <Route exact path='/categories' element={
     <>
    <Header click={hclicker} notHome={true}>
     <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
    <span id='men' style={{backgroundColor: "grey"}} onClick={hclicker}>
    
    <i className="gg-close"></i>
    </span>

     </Header>
     <div id='cate'>
       <form>
       <input id='rec1' placeholder='Search: '   onChange={searching}/>
     <Link to={`/home/${valuer}` } > <button type='submit' id='rec2'><i className="gg-search"></i></button></Link>
     </form>
     <div id='menh'>
     <Link to='/categories' onClick={hclicker}><h1 id='menh1'>Categories</h1></Link>
     <h1 id='menh2'>About-Us</h1>
     </div>
</div>
     </>
    }></Route>
     )}



<Route path='/categorizer/:searcher' element={
  
             <>
             {menu == 0 &&
               <>
             <Header>
              <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
            <span id='men' onClick={hclickerc}>
            <Link to={`/categorizer/${category}`} onClick={hclickerc}>
              <span></span>
              <span></span>
              </Link>
            </span>
            
            </Header>
            <Bodier>
               <Categorizer  books={book} setSrc={setSrc} setDown={setDown} setAuthor={setAuthor} setCaa={setCaa} setNamer={setNamer} setDee={setDee} category={category} />
            </Bodier>
            </>
}{menu ==1 &&
<>
    <Header click={hclicker} notHome={true}>
     <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
     <Link to={`/categorizer/${category}`} onClick={cage}>
    <span id='men' style={{backgroundColor: "grey"}} onClick={hclicker}>
    
    <i className="gg-close"></i>
    </span>
    </Link>
     </Header>
     <div id='cate'>
       <form>
       <input id='rec1' placeholder='Search: '   onChange={searching}/>
     <Link to={`/home/${valuer}` } > <button type='submit' id='rec2'><i className="gg-search"></i></button></Link>
     </form>
     <div id='menh'>
     <Link to='/categories' onClick={hclicker}><h1 id='menh1'>Categories</h1></Link>
     <h1 id='menh2'>About-Us</h1>
     </div>
</div>
     </>
}
            </>
} />


<Route path='/file/view/:name' element={<FileView/>} />
</Routes>
     

    </>
    )
}

export default App;
