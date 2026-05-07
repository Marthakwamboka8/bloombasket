
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Mpesapayment from './components/Mpesapayment';
import Home from './components/Home';
import Chatbot from './components/Chatbot';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar goes here  */}
        <Navbar />
       

        {/* nav link  */}
        {/* <nav className='bg-light'>/npm *}
          <Link to="/products" className='btn btn-info m-1'>Getproduct </Link>
          <Link to="/Signup" className='btn btn-info m-1'> Signup </Link>
          <Link to="/Signin" className='btn btn-info m-1'>Signin </Link>
          <Link to="/Addproduct" className='btn btn-info m-1'>Addproduct </Link>
          <Link to="/" className='btn btn-info m-1'>Home</Link> 

{/* 
        </nav> */}
        {/* Routes  */}
        <Routes>
          <Route path='/products' element={<Getproducts />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Mpesapayment />} />
          <Route path='/' element={<Home />} />
          <Route path='/chatbot' element={<Chatbot/>}/>
        </Routes>
      </div>
      <Chatbot/>

    </BrowserRouter>
  );
}

export default App;
