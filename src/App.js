import React from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';
import { BrowserRouter, BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Listpage from './page/Listpage';
import Bookmarkpage from './page/Bookmarkpage';
import Menu from './component/side/Menu';


function App() {
  return (
    <BrowserRouter>
        <Header/>
        {/* <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/listpage' element={<Listpage/>} />
          <Route path='/bookmarkpage' element={<Bookmarkpage/>} />
        </Routes> */}
        <Main></Main>
      <Footer/>
    </BrowserRouter>

  );
}



export default App;
