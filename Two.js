import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, { useState} from 'react';
import red from './redtwo.png';
import blue from './bluetwo.png';
import black from './blacktwo.png';
import yellow from './golden.png';

import './two.css';
function Pay() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the payment submission logic
    // For example, you can send the payment details to a server
    // or perform any other action you need.
  }

  return (
    <form className="payment-form-one" onSubmit={handleSubmit}>
      <label htmlFor="cardNumber" style={{ color: 'white' }}>Card Number</label>
      <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Enter card number" style={{ color: 'black' }} />
      <label htmlFor="expiryDate" style={{ color: 'white' }}>Expiry Date</label>
      <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" style={{ color: 'black' }} />
      <label htmlFor="cvv" style={{ color: 'white' , display: "flex", justifyContent: "center" }}>CVV</label>
      <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="CVV" style={{ color: 'black',margin: 0, padding: '-20px'}} />
     
    </form>
  );
}


function info(){
    return(
       <div className='right'>
       
         
           <b><h1 align='center'>SEO 3</h1></b>
           <div class="info">
            <Router>
    <h3>Battery
    <p> <b>2.7 K W H</b></p>
    <p>Battery Warranty  
      <b>3 Years</b></p>
      <p><i>MAX SPEED --1500W</i></p>
      <p>On Electronics With 1 Year Warranty</p>
      <p><i>MAX RANGE (@ 30 Km/h) -- 150 Km</i></p>
      <p><i>MAX SPEED (@ 45 Km/h) -- 110 Km</i></p>
      <p><i>MAX SPEED (@ Full Speed) -- 90Km</i></p>
        
    <p><i>Features</i></p>
       <p><b><i>LFP with 1500 Cycles</i></b></p>
       <p><b><i>Active Balancing</i></b></p>
      <p><b><i>Water-Proof : IP67</i></b></p>
      <b><p>Charging Time -- 4 hours[12A]</p></b>
      <p> Exclusive more info Check below</p>
      <Link to="/pay" style={{padding: 3,color: 'white',fontSize: '1.1rem'}}>
            <button>Buy Now</button>
           </Link>
      <Routes>
     
      <Route path="/pay" element={<Pay />} />
      </Routes>
    </h3>

 </Router>   
</div>


<div class="slideshow">
  <img src={red} class="slideone"  width={390} height={360} alt=""></img>
  <img src={blue} class="slideone"  width={390} height={360} alt=""></img>
  <img src={black} class="slideone"  width={390} height={360} alt=""></img>
  <img src={yellow} class="slideone"  width={390} height={360} alt=""></img>
</div>
<ol>

  <b>
    <p>
    <b>BEAST Provide ELECTRICFYING </b>
  <p>Journey at Every Turn</p>
  </p></b>

  <li><p> Offering an exhilarating experience with its robust 2000W motor</p></li>
  <li><p>An Impressive 80-100km range on a single charge</p></li>
  <li><p>Fire-safe advanced LFP battery</p></li>
  <li><p>A 2000W motor and a 2.7kWh battery</p></li>

</ol>

</div>

           
    )
}

export default info;