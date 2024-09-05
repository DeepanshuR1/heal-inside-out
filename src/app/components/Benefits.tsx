"use client";
import styled from 'styled-components';
 
const BenefitsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;
 
const BenefitsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
 
const BenefitCard = styled.div`
  width: 200px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
 
  @media (max-width: 768px) {
    width: 80%;
  }
`;

import React from 'react';
 
const benefits = [
  {
    icon: '🧘‍♀️',
    title: 'Improved Flexibility',
    description: 'Regular yoga practice stretches and tones the body muscles and makes them strong. It also helps improve your body posture when you stand, sit, sleep or walk.'
  },
  {
    icon: '🧘‍♂️',
    title: 'Increased Strength',
    description: 'Yoga poses require you to support the weight of your own body in new ways, which increases strength.'
  },
  {
    icon: '💆‍♀️',
    title: 'Stress Reduction',
    description: 'Yoga helps reduce stress through breathing exercises and meditation.'
  },
  {
    icon: '🧘',
    title: 'Better Mental Health',
    description: 'Yoga can have a positive effect on mood and anxiety.'
  }
];
 
const Benefits = () => (
  <section className="benefits-section">
    <h2>Benefits of Yoga</h2>
    <div className="benefits-grid">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-card">
          <div className="benefit-icon">{benefit.icon}</div>
          <h3 className="benefit-title">{benefit.title}</h3>
          <p className="benefit-description">{benefit.description}</p>
        </div>
      ))}
    </div>
    <div className="feature-banner">
        <h2>Exclusive Benefits</h2>
        <p>
          Join our classes and receive personalized plans to heal lifestyle
          diseases like thyroid, PCOD, PCOS, and diabetes.
        </p>
        <p>Includes a customized diet plan for holistic well-being.</p>
      </div>
  </section>

);
 
export default Benefits;