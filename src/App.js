import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home1 from './pages/landingpage';
import Home from './pages/home';
import World from './pages/World';
import MemoryLane from './pages/memorylane';
import Contact from './pages/contact';
 
function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/landingpage' element={<Home1 />} />
                <Route path='/World' element={<World />} />
                <Route path='/memorylane' element={<MemoryLane />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route path='/home' element={<Home />} /> */}
            </Routes>

        </Router>
      
    );
}
 
export default App;