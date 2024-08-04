"use client";
import React from "react";

const Classes = () => {
  return (
    <section className="classes-section">
      <h2 className="item__title">Our Classes</h2>
      <div className="classes-grid">
        <div className="class-card">
          <img className="class-image" src="/yogaGirl.jpg" alt="Class 1" />
          <div className="class-content">
            <h3>Beginner Yoga</h3>
            <p>
              Join our beginner-friendly yoga class to learn the basics of yoga
              postures and breathing techniques.
            </p>
            <p>
              <strong>Timings:</strong> Monday, Wednesday, Friday at 9:00 AM
            </p>
            <p>
              <strong>Benefits:</strong> Improves flexibility, reduces stress,
              enhances mindfulness.
            </p>
          </div>
        </div>
        <div className="class-card">
          <img className="class-image" src="/yogaGirl.jpg" alt="Class 2" />
          <div className="class-content">
            <h3>Advanced Yoga</h3>
            <p>
              Take your practice to the next level with our advanced yoga class
              focusing on strength, balance, and endurance.
            </p>
            <p>
              <strong>Timings:</strong> Tuesday, Thursday at 5:00 PM
            </p>
            <p>
              <strong>Benefits:</strong> Builds muscle, increases stamina,
              promotes mental clarity.
            </p>
          </div>
        </div>
        <div className="class-card">
          <img className="class-image" src="/yogaGirl.jpg" alt="Class 3" />
          <div className="class-content">
            <h3>Meditation</h3>
            <p>
              Discover the peace within through our meditation sessions,
              combining guided meditation and mindfulness exercises.
            </p>
            <p>
              <strong>Timings:</strong> Saturday at 10:00 AM
            </p>
            <p>
              <strong>Benefits:</strong> Reduces anxiety, improves focus,
              enhances emotional well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
