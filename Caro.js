
import React, { useState, useEffect } from 'react';
import './caro.css';
const contentData = [
  {
    id: 1,
    title: "LFP Battery",
    description: "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. Batteries boast a broader temperature range, ideal for the diverse Indian climate. Technology enhances Rhyno's longevity,  An Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!",
    image: "blue.png"
  },
  {
    id: 2,
    title: "Wider tyres",
    description: "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.",
    image: "blacktwo.png"
  },
  {
    id: 3,
    title: "Range prediction",
    description: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.",
    image: "golden.png"
  },
  {
    id: 4,
    title: "Extraordinary Experience",
    description: "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!",
    image: "grp.png"
  },
  {
    id: 5,
    title: "Rugged and simple Design",
    description: "We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home!",
    image: "white.png"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        (prevIndex + 1) % contentData.length
      );
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <img src={contentData[currentIndex].image} alt={contentData[currentIndex].title} />
        <div className="carousel-text">
          <h2>{contentData[currentIndex].title}</h2>
          <p>{contentData[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
