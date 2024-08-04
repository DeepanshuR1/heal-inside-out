"use client";
import styled from 'styled-components';
 
const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;
 
const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
 
const TestimonialCard = styled.div`
  width: 250px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease-in-out;
 
  &:hover {
    transform: scale(1.05);
  }
 
  @media (max-width: 768px) {
    width: calc(100% - 2rem); /* Full width with some padding */
    max-width: 300px; /* Limit maximum width */
    margin: 0 auto 1.5rem; /* Center and add bottom margin */
  }
`;
 
const TestimonialImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;
 
const TestimonialContent = styled.div`
  margin-top: 1rem;
`;

import React from 'react';
 
const Testimonials = () => (
  <section className="testimonials-section">
    <h2 className="item__title">What Our Clients Say</h2>
    <div className="testimonials-grid">
      <div className="testimonial-card">
        <img className="testimonial-image" src="yogaGirl.jpg" alt="Testimonial 1" />
        <div className="testimonial-content">
          <h3>John Doe</h3>
          <p>&quot;Yoga has changed my life! I feel more energetic and focused.&quot;</p>
        </div>
      </div>
      <div className="testimonial-card">
        <img className="testimonial-image" src="yogaGirl.jpg" alt="Testimonial 2" />
        <div className="testimonial-content">
          <h3>Jane Smith</h3>
          <p>&quot;Best yoga studio ever. The instructors are amazing!&quot;</p>
        </div>
      </div>
      <div className="testimonial-card">
        <img className="testimonial-image" src="yogaGirl.jpg" alt="Testimonial 3" />
        <div className="testimonial-content">
          <h3>David Brown</h3>
          <p>&quot;Highly recommend Yoga Bliss to everyone. It&apos;s a life-changing experience!&quot;</p>
        </div>
      </div>
    </div>
  </section>
);
 
export default Testimonials;
