"use client";
import styled from "styled-components";

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

import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { LiaCheckCircle } from "react-icons/lia";

const benefits = [
  {
    title: "Improved Flexibility",
    description:
      "Regular yoga practice stretches and tones the body muscles and makes them strong. It also helps improve your body posture when you stand, sit, sleep or walk.",
  },
  {
    title: "Increased Strength",
    description:
      "Yoga poses require you to support the weight of your own body in new ways, which increases strength.",
  },
  {
    title: "Stress Reduction",
    description:
      "Yoga helps reduce stress through breathing exercises and meditation.",
  },
  {
    title: "Better Mental Health",
    description: "Yoga can have a positive effect on mood and anxiety.",
  },
];

const exclusiveBenefits = [
  "Personalized plans to heal lifestyle diseases",
  "Customized diet plan for holistic well-being",
  "Expert guidance for thyroid management",
  "Specialized support for PCOD and PCOS",
  "Tailored strategies for diabetes control"
];

const Benefits = () => (
  <section className="benefits-section">
    <h2>Benefits of Yoga</h2>
    <div className="benefits-grid">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-card">
          <h3 className="benefit-title">{benefit.title}</h3>
          <p className="benefit-description">{benefit.description}</p>
        </div>
      ))}
    </div>
    <div className="feature-banner">
        <h2>Exclusive Benefits</h2>
        <ul className="benefitsList">
          {exclusiveBenefits.map((exclusiveBenefit, index) => (
            <li key={index} className="benefitItem">
              <LiaCheckCircle className="benefitIcon"/>
              <span className="benefitText">{exclusiveBenefit}</span>
            </li>
          ))}
        </ul>
      </div>
  </section>
);

export default Benefits;
