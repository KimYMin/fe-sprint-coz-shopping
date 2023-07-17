import React from 'react';
import Main from './page/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Listpage from './page/Listpage';
import Bookmarkpage from './page/Bookmarkpage';



function App() {
  return (
    <BrowserRouter>
     
        <Header/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/listpage' element={<Listpage/>} />
            <Route path='/bookmarkpage' element={<Bookmarkpage/>} />
          </Routes>
          {/* <Listpage></Listpage> */}
        <Footer/>
     
    </BrowserRouter>

  );
}



export default App;
