import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter }
    from 'react-router-dom';
import Home1 from './pages/landingpage';
import Home from './pages/home';
import World from './pages/World';
import MemoryLane from './pages/memorylane';
import Contact from './pages/contact';
import Location from './pages/location/location';
function index_alt(){
    return(
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/landingpage' element={<Home1 />} />
                <Route path='/World' element={<World />} />
                <Route path='/memorylane' element={<MemoryLane />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/location" element={<Location/>} />
                {/* <Route path='/home' element={<Home />} /> */}
            </Routes>
           

  
        <Home1/>
        <World/>
        <MemoryLane/>
        <Contact/>
        {/* </BrowserRouter> */}
        </Router>
        <BrowserRouter>
            <Routes>
               <Route path="/location"  element={<Location/>} />
               </Routes>
            </BrowserRouter>
  
       </>
    );

}
 
export default index_alt;