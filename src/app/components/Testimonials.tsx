// "use client";
// import React from "react";

// const testimonials = [
//   {
//     name: "John Doe",
//     review: "Yoga has changed my life! I feel more energetic and focused.",
//     image: "yogaGirl.jpg",
//   },
//   {
//     name: "Jane Smith",
//     review: "Best yoga studio ever. The instructors are amazing!",
//     image: "yogaGirl.jpg",
//   },
//   {
//     name: "David Brown",
//     review:
//       "Highly recommend Yoga Bliss to everyone. It&apos;s a life-changing experience!",
//     image: "yogaGirl.jpg",
//   },
// ];

// const Testimonials = () => (
//   <section className="testimonials-section">
//     <h1 className="item__title">What Our Clients Say</h1>
//     <div className="testimonials-grid">
//       {testimonials.map((testimonial, index) => (
//         <div className="testimonial-card" key={index}>
//           <img
//             className="testimonial-image"
//             src={testimonial.image}
//             alt={`${testimonial.name}'s photo`}
//           />
//           <div className="testimonial-content">
//             <h3>{testimonial.name}</h3>
//             <p>{testimonial.review}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Testimonials;

"use client";
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    review: "Yoga has changed my life! I feel more energetic and focused.",
    image: "yogaGirl.jpg",
    beforeImage: "yogaGirl.jpg",
    afterImage: "yogaGirl.jpg",
  },
  {
    name: "Jane Smith",
    review: "Best yoga studio ever. The instructors are amazing!",
    image: "yogaGirl.jpg",
    beforeImage: "yogaGirl.jpg",
    afterImage: "yogaGirl.jpg",
  },
  {
    name: "David Brown",
    review:
      "Highly recommend Yoga Bliss to everyone. It&apos;s a life-changing experience!",
    image: "yogaGirl.jpg",
    beforeImage: "yogaGirl.jpg",
    afterImage: "yogaGirl.jpg",
  },
];

const Testimonials = () => (
  <section className="testimonials-section">
    <h1 className="item__title">Transformation Stories</h1>
    <div className="testimonials-grid">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <div className="testimonial-slider">
            <div className="slider-images">
              <img
                className="before-image"
                src={testimonial.beforeImage}
                alt="Before yoga"
              />
              <img
                className="after-image"
                src={testimonial.afterImage}
                alt="After yoga"
              />
            </div>
            <div className="slider-handle"></div>
          </div>

          <div className="testimonial-content">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
