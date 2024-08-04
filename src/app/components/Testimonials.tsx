"use client";
// import styled from 'styled-components';

// const TestimonialsSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
// `;

// const TestimonialsGrid = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;

// const TestimonialCard = styled.div`
//   width: 200px;
//   padding: 1rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     width: 80%;
//   }
// `;

// const Testimonials = () => (
//   <TestimonialsSection>
//     <h2>What Our Clients Say</h2>
//     <TestimonialsGrid>
//       <TestimonialCard>
//         <img src="/yogaGirl.jpg" alt="Testimonial 1" />
//         <p>Yoga has changed my life!</p>
//       </TestimonialCard>
//       <TestimonialCard>
//         <img src="/yogaGirl.jpg" alt="Testimonial 2" />
//         <p>Best yoga studio ever.</p>
//       </TestimonialCard>
//       <TestimonialCard>
//         <img src="/yogaGirl.jpg" alt="Testimonial 3" />
//         <p>Highly recommend to everyone.</p>
//       </TestimonialCard>
//     </TestimonialsGrid>
//   </TestimonialsSection>
// );

// export default Testimonials;

// import styled from "styled-components";

// const TestimonialsSection = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;
// `;

// const TestimonialsGrid = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;

// const TestimonialCard = styled.div`
//   width: 250px;
//   padding: 1rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 1.5rem;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (max-width: 768px) {
//     width: 80%;
//   }
// `;

// const TestimonialImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 50%;
// `;

// const TestimonialContent = styled.div`
//   margin-top: 1rem;
// `;

// const Testimonials = () => (
//   <TestimonialsSection>
//     <h2>What Our Clients Say</h2>
//     <TestimonialsGrid>
//       <TestimonialCard>
//         <TestimonialImage src="/yogaGirl.jpg" alt="Testimonial 1" />
//         <TestimonialContent>
//           <h3>John Doe</h3>
//           <p>"Yoga has changed my life! I feel more energetic and focused."</p>
//         </TestimonialContent>
//       </TestimonialCard>
//       <TestimonialCard>
//         <TestimonialImage src="/yogaGirl.jpg" alt="Testimonial 2" />
//         <TestimonialContent>
//           <h3>Jane Smith</h3>
//           <p>"Best yoga studio ever. The instructors are amazing!"</p>
//         </TestimonialContent>
//       </TestimonialCard>
//       <TestimonialCard>
//         <TestimonialImage src="/yogaGirl.jpg" alt="Testimonial 3" />
//         <TestimonialContent>
//           <h3>David Brown</h3>
//           <p>
//             "Highly recommend Yoga Bliss to everyone. It's a life-changing
//             experience!"
//           </p>
//         </TestimonialContent>
//       </TestimonialCard>
//     </TestimonialsGrid>
//   </TestimonialsSection>
// );

// export default Testimonials;

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
 
// const Testimonials = () => (
//   <TestimonialsSection>
//     <h2>What Our Clients Say</h2>
//     <TestimonialsGrid>
//       <TestimonialCard>
//         <TestimonialImage src="/images/testimonial1.jpg" alt="Testimonial 1" />
//         <TestimonialContent>
//           <h3>John Doe</h3>
//           <p>"Yoga has changed my life! I feel more energetic and focused."</p>
//         </TestimonialContent>
//       </TestimonialCard>
//       <TestimonialCard>
//         <TestimonialImage src="/images/testimonial2.jpg" alt="Testimonial 2" />
//         <TestimonialContent>
//           <h3>Jane Smith</h3>
//           <p>"Best yoga studio ever. The instructors are amazing!"</p>
//         </TestimonialContent>
//       </TestimonialCard>
//       <TestimonialCard>
//         <TestimonialImage src="/yogaGirl.jpg" alt="Testimonial 3" />
//         <TestimonialContent>
//           <h3>David Brown</h3>
//           <p>"Highly recommend Yoga Bliss to everyone. It's a life-changing experience!"</p>
//         </TestimonialContent>
//       </TestimonialCard>
//     </TestimonialsGrid>
//   </TestimonialsSection>
// );
 
// export default Testimonials;

import React from 'react';
 
const Testimonials = () => (
  <section className="testimonials-section">
    <h2 className="item__title">What Our Clients Say</h2>
    <div className="testimonials-grid">
      <div className="testimonial-card">
        <img className="testimonial-image" src="yogaGirl.jpg" alt="Testimonial 1" />
        <div className="testimonial-content">
          <h3>John Doe</h3>
          <p>"Yoga has changed my life! I feel more energetic and focused."</p>
        </div>
      </div>
      <div className="testimonial-card">
        <img className="testimonial-image" src="yogaGirl.jpg" alt="Testimonial 2" />
        <div className="testimonial-content">
          <h3>Jane Smith</h3>
          <p>"Best yoga studio ever. The instructors are amazing!"</p>
        </div>
      </div>
      <div className="testimonial-card">
        <img className="testimonial-image" src="yogaGirl.jpg" alt="Testimonial 3" />
        <div className="testimonial-content">
          <h3>David Brown</h3>
          <p>"Highly recommend Yoga Bliss to everyone. It's a life-changing experience!"</p>
        </div>
      </div>
    </div>
  </section>
);
 
export default Testimonials;
