"use client";
// import styled from 'styled-components';

// const ClassesSection = styled.section`
//   padding: 4rem 2rem;
//   background-color: #f9f9f9;
//   text-align: center;
// `;

// const ClassesGrid = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;

// const ClassCard = styled.div`
//   width: 200px;
//   padding: 1rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     width: 80%;
//   }
// `;

// const Classes = () => (
//   <ClassesSection>
//     <h2>Our Classes</h2>
//     <ClassesGrid>
//       <ClassCard>
//         <img src="/yogaGirl.jpg" alt="Class 1" />
//         <p>Beginner Yoga</p>
//       </ClassCard>
//       <ClassCard>
//         <img src="/yogaGirl.jpg" alt="Class 2" />
//         <p>Advanced Yoga</p>
//       </ClassCard>
//       <ClassCard>
//         <img src="/yogaGirl.jpg" alt="Class 3" />
//         <p>Meditation</p>
//       </ClassCard>
//     </ClassesGrid>
//   </ClassesSection>
// );

// export default Classes;

// import styled from 'styled-components';

// const ClassesSection = styled.section`
//   padding: 4rem 2rem;
//   background-color: #f9f9f9;
//   text-align: center;
// `;

// const ClassesGrid = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;

// const ClassCard = styled.div`
//   width: 200px;
//   padding: 1rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     width: 80%;
//   }
// `;

// const KnowMoreButton = styled.button`
//   padding: 10px 20px;
//   margin-top: 20px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;
//   border-radius: 5px;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const Classes = () => {
//   const handleKnowMoreClick = () => {
//     const element = document.getElementById('class-details');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <ClassesSection>
//       <h2>Our Classes</h2>
//       <ClassesGrid>
//         <ClassCard>
//           <img src="/yogaGirl.jpg" alt="Class 1" />
//           <p>Beginner Yoga</p>
//         </ClassCard>
//         <ClassCard>
//           <img src="/yogaGirl.jpg" alt="Class 2" />
//           <p>Advanced Yoga</p>
//         </ClassCard>
//         <ClassCard>
//           <img src="/yogaGirl.jpg" alt="Class 3" />
//           <p>Meditation</p>
//         </ClassCard>
//       </ClassesGrid>
//       <KnowMoreButton onClick={handleKnowMoreClick}>Know More</KnowMoreButton>
//     </ClassesSection>
//   );
// };

// export default Classes;

import React from "react";

const Classes = () => {
  return (
    <section className="classes-section">
      <h2 className="item__title">Our Classes</h2>
      <div className="classes-grid">
        <div className="class-card">
          <img className="class-image" src="/yogaGirl.jpg" alt="Class 1" />
          <div className="class-content">
            <h3>Beginner Yoga</h3>
            <p>
              Join our beginner-friendly yoga class to learn the basics of yoga
              postures and breathing techniques.
            </p>
            <p>
              <strong>Timings:</strong> Monday, Wednesday, Friday at 9:00 AM
            </p>
            <p>
              <strong>Benefits:</strong> Improves flexibility, reduces stress,
              enhances mindfulness.
            </p>
          </div>
        </div>
        <div className="class-card">
          <img className="class-image" src="/yogaGirl.jpg" alt="Class 2" />
          <div className="class-content">
            <h3>Advanced Yoga</h3>
            <p>
              Take your practice to the next level with our advanced yoga class
              focusing on strength, balance, and endurance.
            </p>
            <p>
              <strong>Timings:</strong> Tuesday, Thursday at 5:00 PM
            </p>
            <p>
              <strong>Benefits:</strong> Builds muscle, increases stamina,
              promotes mental clarity.
            </p>
          </div>
        </div>
        <div className="class-card">
          <img className="class-image" src="/yogaGirl.jpg" alt="Class 3" />
          <div className="class-content">
            <h3>Meditation</h3>
            <p>
              Discover the peace within through our meditation sessions,
              combining guided meditation and mindfulness exercises.
            </p>
            <p>
              <strong>Timings:</strong> Saturday at 10:00 AM
            </p>
            <p>
              <strong>Benefits:</strong> Reduces anxiety, improves focus,
              enhances emotional well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
