
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Mpesapayment from './components/Mpesapayment';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar goes here  */}
        <Navbar />
        <header className="App-header">

       <h3 className='text-dark '>🪷Welcome to Bloom basket</h3>
        </header>

        {/* nav link  */}
        <nav className='bg-light'>
          <Link to="/" className='btn btn-info m-1'>Getproduct </Link>
          <Link to="/Signup" className='btn btn-info m-1'> Signup </Link>
          <Link to="/Signin" className='btn btn-info m-1'>Signin </Link>
          <Link to="/Addproduct" className='btn btn-info m-1'>Addproduct </Link>

        </nav>
        {/* Routes  */}
        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Mpesapayment />} />
        </Routes>
      </div>
  
    </BrowserRouter>
  );
}

export default App;
