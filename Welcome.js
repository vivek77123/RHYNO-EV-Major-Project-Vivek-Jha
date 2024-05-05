import React, { useState} from 'react';
import vehone from './black.png';
import vehtwo from './blue.png';
import vehthree from './red.png';
import vehfour from './white.png';
import './welcome.css';

function PaymentForm({ onClose }) {
  // Define state for payment details
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv) {
      console.log("Processing payment with details:", paymentDetails);
      // Simulate payment processing by closing the form after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      alert("Please fill all the fields.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  return (
    <div className="payment-form">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={paymentDetails.cardNumber}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={paymentDetails.expiryDate}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

function Display(){
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  // Function to handle "Buy Now" button click
  const handleBuyNowClick = () => {
    setShowPaymentForm(true);
  };

  // Function to handle closing the payment form
  const handleClosePaymentForm = () => {
    setShowPaymentForm(false);
  };
  return( 
    <div className='left-detail'>

     <hr id="horizontal"></hr>
     <div class="container">
  <h1>OUR ELECTRIC EV</h1>
  <h2 class="arange">SEO3 LITE</h2>
 <section>
 <div class="text-info">

  <h3>Battery
    <p> <b>1.8 K W H</b></p>
    <p>Battery Warranty 
      <b>3 Years</b></p>
      <p><i>MAX SPEED --1500W</i></p>
      <p><i>MAX RANGE (@ 30 Km/h) --100 Km</i></p>
      <p><i>MAX SPEED (@ 45 Km/h) --90 Km</i></p>
      <p><i>MAX SPEED (@ Full Speed) --70Km</i></p>
        
    <p><i>Features</i></p>
       <p><b><i>LFP with 1500 Cycles</i></b></p>
       <p><b><i>Active Balancing</i></b></p>
      <p><b><i>Water-Proof : IP67</i></b></p>

  </h3>
   <h3><b><p>BENEFITS</p></b></h3>
   <h3><p><i>Fire- Safe Battery</i></p>
   <p><i>Range Prediction </i></p>
   <p><i>Comfortable Ride</i></p>
   <p><i>Stable & Safe</i></p>
   </h3>
  
</div>

</section>
<button onClick={handleBuyNowClick}>Buy Now</button>
{showPaymentForm && <PaymentForm onClose={handleClosePaymentForm} />}
</div>

<div class="slideshow-container">
     <img src={vehone} class="slide"  width={500} height={350} alt="" ></img>
     <img src={vehtwo} class="slide"  width={500} height={350} alt=""></img> 
     <img src={vehthree} class="slide"  width={500} height={350} alt=""></img>
     <img src={vehfour} class="slide"  width={500} height={350} alt=""></img>
     </div>
    
    </div>
    
  )
}
export default Display;