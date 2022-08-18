import React from 'react'
import './MainBody.css'
import google1 from '../Images/google1.png'
import search from '../Images/search.png'
import googlespeech from '../Images/voice.png'



function MainBody() {
  return (
    <div className="Fpage">

        <div className='Fpage2'>
            <img src={google1} alt="google1" />
            
            <div className="inpt">
                <div className="inpt1">
                    <img id="search" src={search} alt="Search here" />
                </div>
                    
        
                    <input placeholder="Search Google or type a URL"/> 
             
                <div className="inpt2" >
                    <img id="voice" src={googlespeech} alt="Voice"/>
                </div>
              
            </div>
        
            <p>
                <button> Google Search</button>  &nbsp; &nbsp; <button>I'm Feeling Lucky</button>
            </p>

            <p>Google offered in: <span>Hausa Igbo Ede Yoruba Nigerian Pidgin</span></p>
        </div>
   

        
    </div>
  )
}

export default MainBody;
