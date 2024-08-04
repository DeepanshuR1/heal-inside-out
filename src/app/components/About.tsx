// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <div className="main-content">
//       <div className="content-wrapper">
//         <div className="text-content">
//           <h1 className="item__title">About me</h1>
//           <p className="hero__subtitle flex-1">
//             {/* Join our community and discover the power of yoga */}
//             Connect with yourself and build a stronger, healthier you through
//             yoga
//           </p>
//         </div>
//       </div>

//       <div className="image-content">
//         <Image
//           src="/yogaGirl.jpg"
//           alt="hero"
//           fill
//           className="object-contain "
//         />
//       </div>
//     </div>
//   );
// };

// export default About;
"use client";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const AboutText = styled.div`
  max-width: 600px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }
`;

// const About = () => (
//   <AboutSection>
//     <AboutImage src="/yogaGirl.jpg" alt="About Yoga" />
//     <AboutText>
//       <h2>About Us</h2>
//       <p>
//         We offer the best yoga classes to help you find your inner peace and
//         stay fit.
//       </p>
//     </AboutText>
//   </AboutSection>
// );

const About = () => (
  <section className="about-section"> 
  <div className="about-image">
    <img src="/yogaGirl.jpg" alt='about us'/>
  </div>
    <div className="about-content">
      <h2 className="item__title">About Us</h2>
      <p>
        We offer the best yoga classes to help you find your inner peace and
        stay fit.
      </p>
    </div>
  </section>
);

export default About;
