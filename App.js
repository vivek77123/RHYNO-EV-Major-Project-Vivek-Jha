import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import logo from './Rhino.png';
import image from './smart.png';
import Rhyyno from './Rhyyno.png';
import Android from './android.jpg';
import Apple from './apple.jpg';

import './App.css';

const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');
function Home() {
    return (
     <div>
      
        <div class="show">
            <img src={image}  width={130}  alt=""></img>         
                   
        </div>
      </div>
    );
  }
 
 
  function About() {
    return (
      <div style={{ padding: '15px 130px' ,top: '4px', color: 'white', backgroundColor: 'black',gap: '4rem',textAlign: 'left',margin: '0 auto'}}>
        <center>
         <div style={{ color: 'yellow' }}> <h2><b>About Rhyno-EV</b></h2></div>
        </center>
        <p style={{ textAlign: 'justify', textIndent: '2rem', fontSize: '1.2rem',marginBottom: '1.6rem'}}>
    Established in 2019 by an automotive engineer with a vision for sustainable and robust
    mobility solutions,
    <p>Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately </p>
    <p>Driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.</p>
  </p>
<p>
  <p style={{ textAlign: 'justify', textIndent: '2rem',fontSize: '1.2rem' ,marginBottom: '1.6rem'}}>
    With our first product, we've taken a bold step to create something more than just a vehicle.
    <p>It's a unique experience of elegance, comfort and style, addressing the pitfalls of  ensuring</p>
    <p>A longer battery lifespan with our battery technology.</p>
  </p>
</p>
  <p style={{ textAlign: 'justify', textIndent: '2rem' ,fontSize: '1.2rem', marginBottom: '1.6rem'}}>
    Perfectly suited for fleetoperators, especially in tourist-centric locations like Goa, our rugged yet
   <p> aestheticallyOur rugged yet aesthetically appealing scooters are engineered for longevity and reliability.</p> 
    <p>Join us as we pioneer a new era in sustainable anddependable electric transportation.</p>
  </p>
        <div style={{ textAlign: 'center' }}>
          <img src={Rhyyno} alt="Rhyno-EV Scooter" style={{ maxWidth: '18.5%', height: 'auto' }} />
        </div>
      </div>
    );
  };
  
  function Rentals(){
    return(
      <div className="rental-container">
      <h2 align="center" style={{color : '#FFF225'}}>Explore the roars of Rhyno at your own pace with our rental options!</h2>
      <p style={{textAlign: 'center', textIndent: '2rem', fontSize: '1.2rem',marginBottom: '1.6rem', marginTop: '3%'}}>Test the waters with our flexible rental model, available for a week or a month,</p> 
      <p  style={{textAlign: 'center', textIndent: '2rem', fontSize: '1.2rem',marginBottom: '1.6rem'}} >Allowing you to experience the Rhyno first hand before committing.Simply visit our authorized dealerships to unlock this opportunity.</p>
      <p style={{textAlign: 'center', textIndent: '2rem', fontSize: '1.2rem',marginBottom: '1.6rem'}}>Additionally, we're redefining campus commuting with our rental fleet tailored for college students.</p>
      <p style={{textAlign: 'center', textIndent: '2rem', fontSize: '1.2rem',marginBottom: '1.6rem'}} > Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app.</p> 
      <p style={{textAlign: 'center', textIndent: '2rem', fontSize: '1.2rem',marginBottom: '1.6rem'}}>Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.</p>
      
      <p style={{margin: '2%', textAlign: 'center'}}>Download our rental app : Android | Apple</p>
      <div className="download-buttons" style={{ borderRadius: '50%' }}>
        <a href="blank" className="download-button android">
        <img src={Android} width={40} alt=""></img> 
        </a>
        <a href="blank" className="download-button apple">
      <img src={Apple} width={40} alt=""></img>
        </a>
      </div>
    </div>
    )
  }
 
  function NoMatch() {
    return (
      <div style={{ padding: 20 }}>
        <center><h2>Home</h2></center>
        
      </div>
    
    );
  }
  function Product() {
    useEffect(() => {
      const scrollWindowToPosition = () => {
        const position = window.innerHeight * 2.21; // Scroll to 75% down the window
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      };
  
      scrollWindowToPosition();
    }, []);
  
    return (
      <div style={{ padding: 20 }}>
        <center><p>Rhyno EV Super Striker</p></center>
      </div>
    );
  }
  
  function PreBook() {
    const [quantity, setQuantity] = useState(1);
    const [vehicleName, setVehicleName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
  
    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value);
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * 10); // Update total price based on quantity
    };
    //prebook

  const handleInputChange = (event) => {
    setVehicleName(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
    const handlePayment = async () => {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_1xxxxxxxxxxxxxxx', quantity: quantity }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });
    
      if (error) {
        console.error("Error redirecting to Checkout:", error);
        
      }else{
        setPaymentSuccess(true); // Payment was initiated successfully
      }
    };
  
    return (
      <div className="pre-booking-form">
        <h2>Pre-book your item</h2>
        <div>
          <label htmlFor="quantity" style={{ marginRight: '10px' }}>Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
          />
          <p>
          <label htmlFor="Vehicle name"  style={{ marginRight: '13px' }}>Vehicle:
      <input 
        type="text"
        id="vehicle"
        value={vehicleName}
        onChange={handleInputChange}
        style={{ marginLeft: '16.6px' }}
      />
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value={vehicleName}>SEO3</option>
        <option value={vehicleName}>SEO Max</option>
        <option value={vehicleName}>SEO Lite</option>
      </select>
    </label>
          </p>
        </div>
        <div>
          <h3 style={{marginLeft: '19px'}}>Total Price: ${totalPrice}</h3>
        </div>
        {!paymentSuccess ? (
          <div className="payment-button-wrapper">
          <button onClick={handlePayment} style={{ position: 'absolute',marginInline: '10%',padding: '10px 18x', fontSize: '1.5rem', borderRadius: '16px' }}>Pay Now</button>
          </div>
        ) : (
          <p style={{ marginTop: 20 }}>Payment successful! Thank you for pre-booking.</p>
        )}
      </div>
    );
  }
  
  

  function Contact() {
    return (
      <div style={{padding: 20,backgroundColor: '#252525', color:'#f2f2f2'}}>
       <div class="contact-container">
  <div class="contact-info">
    <h2 style={{color:'#f2f2f2'}}>Contact Us</h2>
    <ul>
      <li><strong>Mail:</strong> info@rhyno.in</li>
      <li><strong>Mobile no.:</strong> +91-9023987528</li>
      <li><strong>Location:</strong> Rhyno Wheels Private Limited, Near UG Hostel Gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</li>
    </ul>
  </div>
  <div class="map-container">
    
  <iframe
  title="Google Maps Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1305615710947!2d72.64518641549873!3d23.197392884857543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834f1298477d%3A0x4d77b632d01968a9!2sRhyno%20Wheels%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1643251583540!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowfullscreen=""
  loading="lazy"
></iframe>

  </div>
</div>
        
      </div>
    )
  }
function App(){

 
    return (
      
      <div class="context">
      
   
        <Router>
        
                    <div  className="logo">
          <img src={logo} alt="" width={160} height={122}></img>
          <div  className="menu">
       <nav style={{ margin: 10 ,fontSize: '1.2rem'}}>
           <Link to="/" style={{ padding: 5 , color: 'white',fontSize: '1.2rem'}}>
           Home
           </Link>
           <Link to="/about" style={{ padding: 5 ,color: 'white',fontSize: '1.2rem'}}>
           About us
           </Link>
           <Link to="/contact" style={{padding: 5 ,color: 'white',fontSize: '1.2rem'}}>
            Contact us
           </Link>
           
           <Link to="/product" style={{padding: 5 ,fontSize: '1.2rem'}}>
        
             <select
        style={{ padding: 3, color: 'white', fontSize: '1.2rem'}}
       
        >
      
        <option value="/">Products</option>
        <option value="/product1">SE03 </option>
        <option value="/product2">SEO Max</option>
        <option value="/product3">SEO Lite</option>
  
      </select>
      
      
           </Link>
           <Link to="/prebook" style={{ padding: 5 , color: 'white',fontSize: '1.2rem'}}>
           Pre-Book
           </Link>
         
           <Link to="/rentals" style={{padding: 5 ,color: 'white',fontSize: '1.2rem'}}>
            Rentals 
           </Link>
       </nav>
       </div>
       </div>
       
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/product" element={<Product />} />
         <Route path="/prebook" element={<PreBook />} />
         <Route path="/rentals" element={<Rentals />} />
         <Route path="*" element={<NoMatch />} />
       </Routes>
      
     </Router>
    
    
        <div style={{ padding: 24, marginTop: 75, marginLeft: -600 ,borderRadius: '5px',color: 'black', letterSpacing: '1px', fontSize: "29px"}}>
      <h2  class="changing-text"style={{ textAlign: 'center', fontFamily: "Poppins"}}>
        <p id='apply' fontSize= '30px'>LET'S Elevate Your Ride
        <p>EXPERIENCE With Rhyno</p></p>
        <p>Where </p>
        <p style={{ color: '#F9ED32' }}>Superiority</p>
        <p>ELEGANCE</p>
        <p style={{ color: '#F9ED32' }}>COMFORT</p>
        
      </h2>
     
    </div>
  

        </div>
       
    )
}

export default App;