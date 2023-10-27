import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './landing.css';

const MemoryLane = () => {
    return (
        <>
       <div id="memory">
      <h3 class="heading">Memory Lane</h3>
  <div class ="row padding">
  <div className="col-md-6" style={{ color: 'green' }}>
      <div class="card text-center">
        <div class= "card-body">
          <h4>Go back In Time For Some Classics</h4>
          <p/>Use options tool below<br/>
          <div class="card">
              <div class="card-body">
                <div class="card-step-1">
                  <h3>Step 1: Choose Year</h3>
                </div>
                 <div class="card-selector">
                    <select id="yr">
                      <option value="2015.html">2015</option>
                      <option value="2014.html">2014</option>
                      <option value="2013.html">2013</option>
                      <option value="2012.html">2012</option>
                      <option value="2011.html">2011</option>
                      <option value="2010.html">2010</option>
                      <option value="2009.html">2009</option>
                      <option value="2008.html">2008</option>
                      <option value="2007.html">2007</option>
                      <option value="2006.html">2006</option>
                      <option value="2005.html">2005</option>
                      <option value="2004.html">2004</option>
                      <option value="2003.html">2003</option> 
                      <option value="2002.html">2002</option>
                      <option value="2001.html">2001</option> 
                      <option value="2000.html">2000</option>
                      <option value="1999.html">1999</option>
                      <option value="1998.html">1998</option>
                      <option value="1997.html">1997</option>
                      <option value="1996.html">1996</option>
                      <option value="1995.html">1995</option>
                      <option value="1994.html">1994</option>
                      <option value="1993.html">1993</option>
                      <option value="1992.html">1992</option>
                      <option value="1991.html">1991</option>       
                      <option value="1990.html">1990</option>
                      <option value="1989.html">1989</option>
                      <option value="1988.html">1988</option>
                      <option value="1987.html">1987</option>
                      <option value="1986.html">1986</option>
                      <option value="1985.html">1985</option> 
                     </select>
                    <button id= "Blast" class="c-butn butn--stripe">Blast to the Past</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        <div class="col-md-6">
          <img class="portfolio" src="img/memorylane.jpg" />
         </div>
         </div>
      </div>
          </>
    );
};
 
export default MemoryLane;