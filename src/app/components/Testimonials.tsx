"use client";
import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    review: "Yoga has changed my life! I feel more energetic and focused.",
    beforeImage: "yogaGirl.jpg",
    afterImage: "yogaHome.jpg",
  },
  {
    name: "Jane Smith",
    review: "Best yoga studio ever. The instructors are amazing!",
    beforeImage: "yogaHome.jpg",
    afterImage: "yogaGirl.jpg",
  },
  {
    name: "David Brown",
    review:
      "Highly recommend Yoga Bliss to everyone. It&apos;s a life-changing experience!",
    beforeImage: "yogaGirl.jpg",
    afterImage: "yogaHome.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h1 className="item__title">Transformation Stories</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial position at 50%

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-slider">
        <img
          className="after-image"
          src={testimonial.afterImage}
          alt="After yoga"
        />
        <div
          className="before-image-wrapper"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            className="before-image"
            src={testimonial.beforeImage}
            alt="Before yoga"
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider-range"
        />
      </div>
      <div className="testimonial-content">
        <h3>{testimonial.name}</h3>
        <p>{testimonial.review}</p>
      </div>
    </div>
  );
};

export default Testimonials;
