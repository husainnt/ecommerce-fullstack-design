import smartwatchImg from "../assets/images/deal-smartwatch.png";
import laptopImg from "../assets/images/deal-laptop.png";
import cameraImg from "../assets/images/deal-camera.png";
import React, { useState, useEffect } from "react";
import "../styles/global.css";
const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 35,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
          } else if (days > 0) {
            days -= 1;
            hours = 23;
            minutes = 59;
            seconds = 59;
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    { id: 1, name: "Smart Watches", price: "$99", discount: "-25%", image: smartwatchImg },
    { id: 2, name: "Laptops", price: "$799", discount: "-15%", image: laptopImg },
    { id: 3, name: "GoPro Cameras", price: "$299", discount: "-40%", image: cameraImg },
  ];
  return (
    <div className="deals-section">
      <div className="deal-header">
        <h3>Deals and offers</h3>
        <p>Hygiene equipment</p>
        <div className="countdown">
          <span>{timeLeft.days} Days</span> :
          <span>{timeLeft.hours} Hours</span> :
          <span>{timeLeft.minutes} Min</span> :
          <span>{timeLeft.seconds} Sec</span>
        </div>
      </div>
      <div className="deal-items">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img src={deal.image} alt={deal.name} />
            <p>{deal.name}</p>
            <span className="discount">{deal.discount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
