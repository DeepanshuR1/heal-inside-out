"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeartbeat, FaLeaf } from "react-icons/fa";

const classes = [
  {
    title: "Holistic Healing Batch",
    description:
      "Yoga for thyroid, PCOD, PCOS, and diabetes. Gentle poses and breathing techniques to balance hormones and improve health.",
    timings: ["Morning: 6:00 AM - 7:00 AM", "Evening: 6:00 PM - 7:00 PM"],
    benefits: [
      "Balances hormones",
      "Regulates metabolism",
      "Reduces stress",
      "Healing lifestyle diseases: Thyroid, PCOD, PCOS, Diabetes",
      "Personalized diet plan",
    ],
    image: "/holistic-healing-batch.png",
    pricing: {
      monthly: "₹3000",
      threeMonths: "₹7500",
      sixMonths: "₹14000",
    },
  },
  {
    title: "Weight Loss Batch",
    description:
      "Yoga designed to promote weight loss through dynamic sequences that burn calories, increase metabolism, and enhance overall body tone.",
    timings: ["Morning: 7:00 AM - 8:00 AM", "Evening: 7:00 PM - 8:00 PM"],
    benefits: [
      "Effective weight management",
      "Boosts metabolism",
      "Improves muscle tone and flexibility",
      "Healing lifestyle diseases: Thyroid, PCOD, PCOS, Diabetes",
      "Personalized diet plan",
    ],
    image: "/weight-loss.png",
    pricing: {
      monthly: "₹3000",
      threeMonths: "₹7500",
      sixMonths: "₹14000",
    },
  },
];

const Classes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="classes-section">
      <div className="feature-banner">
        <h2>Exclusive Benefits</h2>
        <p>
          Join our classes and receive personalized plans to heal lifestyle
          diseases like thyroid, PCOD, PCOS, and diabetes.
        </p>
        <p>Includes a customized diet plan for holistic well-being.</p>
      </div>

      <h1 className="class-title">Our Classes</h1>
      <div className="classes-grid">
        {classes.map((cls, index) => (
          <div className="class-card" key={index}>
            <img className="class-image" src={cls.image} alt={`${cls.title}`} />
            <div className="class-content">
              <h1 className="font-bold">{cls.title}</h1>
              <p>{cls.description}</p>
              <div className="class-timings">
                <strong>Timings:</strong>
                <ul>
                  {cls.timings.map((time, idx) => (
                    <li key={idx} className="timing-item">
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="class-benefits">
                <strong>Benefits:</strong>
                <ul>
                  {cls.benefits.map((benefit, idx) => (
                    <li key={idx} className="benefit-item">
                      {idx < 3 ? (
                        <FaHeartbeat className="benefit-icon" />
                      ) : (
                        <FaLeaf className="benefit-icon" />
                      )}
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="accordion">
                <div
                  className="accordion-title"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>Healing & Wellness Plans</h3>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>
                      <strong>Monthly Plan:</strong> {cls.pricing.monthly}
                    </p>
                    <p>
                      <strong>3-Month Plan:</strong> {cls.pricing.threeMonths}
                    </p>
                    <p>
                      <strong>6-Month Plan:</strong> {cls.pricing.sixMonths}
                    </p>
                  </div>
                )}
              </div>
              <Link className="join-now-button" href="/join">
                Start Your Healing Journey
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
