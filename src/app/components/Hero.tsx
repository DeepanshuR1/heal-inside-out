"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    });
  };

  const handleLearnMore = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Heal Inside Out</h1>
        <p className="hero-description">
          Discover the transformative power of yoga. Join us today to start your
          journey to a healthier and happier life.
        </p>
        <div className="hero-buttons">
          <Link className="hero-button" href="/join">Join Now</Link>
          <button className="hero-button" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
