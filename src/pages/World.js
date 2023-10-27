import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useNavigate, Link } from 'react-router-dom';
import './landing.css';
import Location from './location/location'


  

const Article = () => {
  return (
      <div id="article">
          Let's Read some Articles
      </div>
  )
}

function World() {

  const navigateTo  = useNavigate();
    // const [selectedLocation, setSelectedLocation] = useState('0');
    // const navigate = useNavigate(); // Use useNavigate for navigation
    const [selectedOption, setSelectedOption] = useState(''); // Initialize the selected option state

    const handlePageChange = () => {
      // navigateTo(Location); // Navigate to the 'Location' page
      window.location.href = Location
    };
  
    
    const handleChange = (event) => {
      console.log(selectedOption)
      setSelectedOption(event.target.value);
      // setSelectedOption(Article);

    };

    //-------------------------------------------------------
  
    // const handleLocationChange = (location) => {
    //   setSelectedLocation(location);
    // };
  
    // const redirectToLocation = () => {
    //   if (selectedLocation === 'Location') {
    //     navigate(Location); // Use navigate instead of history.push
    //   }
    // };

    const handleButtonClick = () => {
      if (selectedOption) {
        // Use a conditional to check if an option is selected
        // You can implement your page-changing logic here (e.g., using React Router)
        alert(`Changing page to: ${selectedOption}`);
      } else {
        alert('Please select an option first.');
      }
    };

    return (
       
      <>

      <div id="world">
        <div class="container-fluid padding">
          <h3 class="heading"><br/></h3>
          <h3 class="heading">World</h3>
          
          <div class="row no-padding">
      
            <div class="col-md-6">
              <img class="portfolio" src="img/studio.jpg"/>
            </div>
              <div class="col-md-6">
                <p class="cap"> Search for hip hop artist throughout the world<br/>
                 Use options tool below to narrow your search</p>
                <div class="card ">
                  <div class="card-body">
                    <div class="card-step-1">
                        <h3>Choose Location</h3>
                        {/* <button onClick={redirectToLocation} className="c-butn butn--stripe">Discover</button>
                        <select onChange={(e) => handleLocationChange(e.target.value)} value={selectedLocation} > */}
                        {/* <select value={selectedLocation} onChange={handleLocationChange}> */}
                        {/* <select id="getLoc" onchange="adSelectCheck(this);"> */}
                        <Link to="/location">Go to About</Link>
                        <select value={selectedOption} onChange={handleChange}>
                          <option value="none" >select</option>
                          <option value="Location">Location</option>
                          <option value="Article">Article</option>
                          {/* <option value="SANFRANCISCOBAYAREA" value="4">USA-CA-SanFranciscoBayArea</option>
                          <option value="Ventura.html" value="4">USA-CA-VenturaCounty</option>
                          <option value="SanDiego.html" value="4">USA-CA-SanDiego</option>
                          <option value="HoustonTX.html" value="4">USA-TX-Houston</option>
                          <option value="Broward-CountyFL.html" value="4">USA-FL-BrowardCounty</option>
                          <option value="Miami-DadeCounty.html" value="4">USA-FL-Miami-DadeCounty</option>
                          <option value="Mexico.html" value="4">MEXICO</option>
                          <option value="Canada.html" value="4">CANADA</option>
                          <option value="Japan.html" value="4">JAPAN</option>
                          <option value="Germany.html" value="4">GERMANY</option>
                          <option value="UK.html" value="4">UNITEDKINGDOM</option> */}
                        </select>
                        {/* <button onClick={redirectToLocation} className="c-butn butn--stripe">Discover</button> */}
                        {/* <button onClick={redirectToLocation} className="c-butn butn--stripe">Discover</button> */}
                        <button onClick={handlePageChange}>Change Page</button>
                        {/* <button onClick={() => handleLocationChange(selectedLocation)}></button> */}
                        {/* <button id="Discover" class="c-butn butn--stripe">Discover</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>  
      {/* <!--End Row--> */}
      </div>
      {/* <!--End Container Fluid--> */}
      </div>
     {/* <!--End World Section--> */}
      </>
    );
};
 
export default World;