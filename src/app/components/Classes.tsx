import Link from "next/link";

const pricingPlans = [
  {
    title: "Half-Yearly Plan",
    price: "₹14,000",
    oldPrice: "₹20,000",
    discount: "30% OFF",
    timePeriod: "Valid for 180 Days",
    benefits: [
      "Yoga & Meditation Classes",
      "Personalized Diet Plans",
      "Healing Workshops",
      "Progress Tracking",
      "Flexible Batches",
      "Nutrition Sessions",
    ],
    bestValue: true,
  },
  {
    title: "Quarterly Plan",
    price: "₹7,500",
    oldPrice: "₹10,000",
    discount: "25% OFF",
    timePeriod: "Valid for 90 Days",
    benefits: [
      "Yoga & Meditation Classes",
      "Personalized Diet Plans",
      "Healing Workshops",
      "Progress Tracking",
      "Flexible Batches",
      "Nutrition Sessions",
    ],
    bestValue: false,
  },
  {
    title: "Monthly Plan",
    price: "₹3,000",
    oldPrice: "₹4,000",
    discount: "25% OFF",
    timePeriod: "Valid for 30 Days",
    benefits: [
      "Yoga & Meditation Classes",
      "Personalized Diet Plans",
      "Healing Workshops",
      "Progress Tracking",
      "Flexible Batches",
    ],
    bestValue: false,
  },
];

const Classes = () => (
  <div id="classes" className="pricing-section">
    <h1 className="section-title">Your Path to Inner Peace</h1>
    <p className="description">
      Choose from our plans to rejuvenate your mind, body, and soul.
    </p>
    <div className="pricing-grid">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`pricing-card ${plan.bestValue ? "best-value" : ""}`}
        >
          {plan.bestValue && <div className="popular-tag">Most Popular</div>}
          <h3>{plan.title}</h3>
          <div className="pricing">
            <span className="current-price">{plan.price}</span>
            <span className="old-price">{plan.oldPrice}</span>
          </div>
          <div className="discount-tag">{plan.discount}</div>
          <Link className="join-now-button" href="/join">
            Join Now
          </Link>
          <p className="time-period">{plan.timePeriod}</p>
          <ul className="benefits-list">
            {plan.benefits.map((benefit, idx) => (
              <li key={idx}>
                <span className="benefit-check">✔</span> {benefit}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Classes;
