import React from 'react'
import './Footer.css'
import carbon2 from '../Images/carbon2.png'

function Footer() {
  return (
    <div className="Footer">
      <h3>Nigeria</h3>
      <hr/>

      <p><img src ={carbon2} alt="leaf"/> Carbon neutral since 2007</p>
      <div className="Footer1"> 
      
   
        <ul>
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search works</li>
          </ul>

      

        <ol>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ol>

      </div>
      <hr/>
      <div class="Footer2">
            ©Copyright Daniel A. Online Services 2022  |  Developed by   <a href="https://web.facebook.com/daniel.achilihu.9/">Achilihu Daniel Uchenna</a>                  
          </div>
    </div>
  )
}

export default Footer