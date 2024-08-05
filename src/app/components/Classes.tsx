"use client";
import React from "react";

const classes = [
  {
    title: "Holistic Healing Batch 1",
    description:
      "Yoga for thyroid, PCOD, PCOS, and diabetes. Gentle poses and breathing techniques to balance hormones and imporve health",
    timings: "Monday to Friday from 6:00 AM to 7:00 AM",
    benefits: "Balances hormones, regulates metabolism, reduces stress.",
    image: "/holistic-healing-batch.png",
  },
  {
    title: "Slim & Fit Batch",
    description:
      "Yoga for weight loss. Dynamic sequences to burn calories and tone your body",
    timings: "Monday to Friday from 7:00 AM to 8:00 AM",
    benefits: "Burns calories, increases metabolism, enhances muscle tone.",
    image: "/slim-fit-batch.png",
  },
  {
    title: "Holistic Healing Batch 2",
    description:
      "Yoga for thyroid, PCOD, PCOS, and diabetes. Gentle poses and breathing techniques to balance hormones and imporve health",
    timings: "Monday to Friday from 6:00 AM to 7:00 AM",
    benefits: "Balances hormones, regulates metabolism, reduces stress.",
    image: "/holistic-healing-batch.png",
  },
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
              <p>
                <strong>Timings:</strong> {cls.timings}
              </p>
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
