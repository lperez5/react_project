
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../pages/landing.css'; // Import your custom CSS
 
const Navbar = () => {
    return (
        <>
            {/* <Nav>
                <NavMenu>
                    <NavLink to="/landingpage" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/World" activeStyle>
                        World
                    </NavLink>
                    <NavLink to="/MemoryLane" activeStyle>
                       MemoryLane
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav> */}

              {/* <!--Navigation--> */}
  <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hip Hop Universe</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=
    "#menu">
    <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="menu">
    <ul class="navbar-nav ml-auto">
      <li class ="nav-item">
        <a class="nav-link" href="#home">Home</a>
      </li>
      
      <li class ="nav-item">
        <a class="nav-link"  href="#world">World</a>
      </li>
      <li class ="nav-item">
        <a class="nav-link" href="#memory">Memory Lane</a>
      </li>
      <li class ="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
  </div> 
  </nav>
        </>
    );
};
 
export default Navbar;