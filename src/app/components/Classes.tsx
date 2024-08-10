"use client";
import React from "react";

const classes = [
  {
    title: "Holistic Healing Batch",
    description:
      "Yoga for thyroid, PCOD, PCOS, and diabetes. Gentle poses and breathing techniques to balance hormones and imporve health.",
    timings: ["Morning: 6:00 AM - 7:00 AM", "Evening: 6:00 PM - 7:00 PM"],
    benefits: "Balances hormones, regulates metabolism, reduces stress.",
    image: "/holistic-healing-batch.png",
  },
  {
    title: "Weight Loss Batch",
    description:
      "Yoga designed to promote weight loss through dynamic sequences that burn calories, increase metabolism, and enhance overall body tone.",
    timings: ["Morning: 7:00 AM - 8:00 AM", "Evening: 7:00 PM - 8:00 PM"],
    benefits: "Effective weight management, boosts metabolism, improves muscle tone and flexibility.",
    image: "/weight-loss.png",
  }
];

const Classes = () => {
  return (
    <section className="classes-section">
      <h1 className="item__title">Our Classes</h1>
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
                      <li key={idx} className="timing-item">{time}</li>
                    ))}
                  </ul>
              </div>
              <p>
                <strong>Benefits:</strong> {cls.benefits}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
