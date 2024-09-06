"use client";

import React, { useState, useEffect, useRef } from "react";

const PopularPlanPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mostPopularRef = useRef(null); // Reference for "Most Popular" tag

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show popup after delay
    }, 1500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && mostPopularRef.current) {
      // Manually trigger animation when the popup becomes visible
      mostPopularRef.current.style.animation = "pulse 1.5s infinite";
    }
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  const handleScrollToClasses = () => {
    const classSection = document.getElementById("classes");
    if (classSection) {
      closePopup();
      classSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popupOverlay">
      <div className="popup">
        <button className="closeButton" onClick={closePopup}>
          ×
        </button>
        <span ref={mostPopularRef} className="mostPopularTag">
          Most Popular
        </span>
        <span className="discountTag">30% OFF</span>
        <h2 className="planTitle">Half-Yearly Plan</h2>
        <div className="priceContainer">
          <span className="discountPrice">₹14,000</span>
          <span className="originalPrice">₹20,000</span>
        </div>
        <p className="validity">Valid for 180 Days</p>
        <ul className="featuresList">
          <li>
            <span className="benefit-check">✔</span> Yoga & Meditation Classes
          </li>
          <li>
            <span className="benefit-check">✔</span> Personalized Diet Plans
          </li>
          <li>
            <span className="benefit-check">✔</span> Healing Workshops
          </li>
          <li>
            <span className="benefit-check">✔</span> Progress Tracking
          </li>
          <li>
            <span className="benefit-check">✔</span> Flexible Batches
          </li>
          <li>
            <span className="benefit-check">✔</span> Nutrition Sessions
          </li>
        </ul>
        <button className="ctaButton" onClick={handleScrollToClasses}>
          View Classes
        </button>
        <p className="noThanks" onClick={closePopup}>
          No thanks, I’ll choose later
        </p>
      </div>
    </div>
  );
};

export default PopularPlanPopup;
