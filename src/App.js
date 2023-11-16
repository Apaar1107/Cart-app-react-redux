import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import  './Styles/app.scss';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';
import Cart from './Components/Cart';
const App = () => {
  return (
    <Router>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
       </Routes>
       <Footer/>
       <Toaster/>
    </Router>
  )
}

export default App