import logo from './logo.svg';
import {React, useState} from 'react'
import './App.css';
import Header from './Semantics/Header';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import BooksLibrary from './Semantics/BooksLibrary';
import img1 from './images/-5789516285107877536_121.jpg'
import Bodier from './combo/Bodier'
import Categories from './Semantics/Categories';
import Searched from './Semantics/Searched';
import BookBody from './Semantics/BookBody';

function App() {
  const [caa, setCaa] = useState('')
  const [author, setAuthor] = useState('')
  const [dee, setDee] = useState('')
  const [namer, setNamer] = useState('')
  const [valuer,setValuer] = useState('')
  const [actval,setAct] = useState('')
  const [menu, setMenu] = useState(0);
  const [category, setCat] = useState('Most Popular');
  const [book,setbk] = useState([
{
  name:'Harry Potter',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Saancadle'
},
{
  name:'Hawaale Waran',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Hadraawi'
},
{
  name:'Alsiraac',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Mustafe'
},
{
  name:'Harry Potter',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Saancadle'
},
{
  name:'Hawaale Waran',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Hadraawi'
},
{
  name:'Alsiraac',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Mustafe'
},
{
  name:'Harry Potter',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Saancadle'
},
{
  name:'Hawaale Waran',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Hadraawi'
},
{
  name:'Alsiraac',
  src:img1,
  category:'Novel',
  description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere hic omnis alias. Assumenda consequatur corporis adipisci ullam veniam pariatur placeat ab explicabo aspernatur! Quae enim quaerat reiciendis minima illum doloribus.',
  author:'Mustafe'
},
  ])

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
    <Router>
      <Routes>
      {(menu == 0) &&(
        <Route exact path='/' element={
     <>
     <Header>
      <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
    <span id='men' onClick={hclicker}>
    
      <span></span>
      <span></span>
    </span>
    </Header>
     <Bodier>
     <BooksLibrary setAuthor={setAuthor} setCaa={setCaa} setNamer={setNamer} setDee={setDee} category={category} books={book}/>
     </Bodier>
     </>
    }>
      </Route>
  )}


    {(menu == 1) &&(
        <Route exact path='/' element={
     <>
     <Header click={hclicker} notHome={true}>
     <Link to='/' onClick={cage}><h1 id='hdh'>Somquest</h1></Link>
    <span id='men' onClick={hclicker}>
    
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
     <Categories />
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
    <span id='men' onClick={hclicker}>
    
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
<Searched books={book} />
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
             <BookBody author={author} name={namer} category={caa} description={dee}/>
          </Bodier>
          </>
} />
     </Routes>
     </Router>
      
    </>
    )
}

export default App;
