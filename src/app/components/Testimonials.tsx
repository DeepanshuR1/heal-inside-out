"use client";
import React, { useState } from "react";

interface Testimonial {
  name: string;
  review: string;
  beforeImage: string;
  afterImage: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Shalu",
    review: `After battling asthma for 10 years, especially during winter, yoga has made a world of difference. 
    My asthama attacks have nearly disappeared, and I haven't had one since starting yoga.`,
    beforeImage: "yogaGirl.jpg",
    afterImage: "yogaHome.jpg",
  },
  {
    name: "Manju",
    review: "I've had PCOD for 3 years, but thanks to yoga, my cycle has been regular for the past 7 months.",
    beforeImage: "yogaHome.jpg",
    afterImage: "yogaGirl.jpg",
  },
  {
    name: "Goldy",
    review:
      `Yoga has been transformative for me. I used to feel lethargic due to my weight, 
      but since practicing yoga, I've lost weight and my energy levels are now like that of a 14-year old`,
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial position at 50%

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
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
