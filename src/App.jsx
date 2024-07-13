

import About from './Components/About'
import Home from './Components/Home'
import Header from './Components/Header'
 import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'


function App() {
   
  return (
    <>
    
    <BrowserRouter>
    <Link to="/about">Hello</Link>
   <Routes>

<Route path='/about' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
    
    <About/>
    
    </>
  )
 
}

export default App
