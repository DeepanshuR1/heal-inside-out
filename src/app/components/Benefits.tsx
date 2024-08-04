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
 
// const Benefits = () => (
//   <BenefitsSection>
//     <h2>Benefits of Yoga</h2>
//     <BenefitsGrid>
//       <BenefitCard>
//         <img src="/yogaGirl.jpg" alt="Benefit 1" />
//         <p>Improves flexibility</p>
//       </BenefitCard>
//       <BenefitCard>
//         <img src="/yogaGirl.jpg" alt="Benefit 2" />
//         <p>Increases muscle strength</p>
//       </BenefitCard>
//       <BenefitCard>
//         <img src="/yogaGirl.jpg" alt="Benefit 3" />
//         <p>Boosts mental health</p>
//       </BenefitCard>
//     </BenefitsGrid>
//   </BenefitsSection>
// );
 
// export default Benefits;

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
    <h2 className="item__title">Benefits of Yoga</h2>
    <div className="benefits-grid">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-card">
          <div className="benefit-icon">{benefit.icon}</div>
          <h3 className="benefit-title">{benefit.title}</h3>
          <p className="benefit-description">{benefit.description}</p>
        </div>
      ))}
    </div>
  </section>
);
 
export default Benefits;