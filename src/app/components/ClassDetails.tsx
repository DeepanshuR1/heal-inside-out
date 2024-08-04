
"use client";
import styled from 'styled-components';
 
const ClassDetailsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;
 
const ClassDetailsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
 
const ClassDetailCard = styled.div`
  width: 300px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
 
  @media (max-width: 768px) {
    width: 80%;
  }
`;
 
const ClassDetails = () => (
  <ClassDetailsSection id="class-details">
    <h2>Class Details</h2>
    <ClassDetailsGrid>
      <ClassDetailCard>
        <img src="/images/class1.jpg" alt="Class 1" />
        <h3>Beginner Yoga</h3>
        <p>Join our beginner-friendly yoga class to learn the basics of yoga postures and breathing techniques.</p>
        <p><strong>Timings:</strong> Monday, Wednesday, Friday at 9:00 AM</p>
        <p><strong>Benefits:</strong> Improves flexibility, reduces stress, enhances mindfulness.</p>
      </ClassDetailCard>
      <ClassDetailCard>
        <img src="/images/class2.jpg" alt="Class 2" />
        <h3>Advanced Yoga</h3>
        <p>Take your practice to the next level with our advanced yoga class focusing on strength, balance, and endurance.</p>
        <p><strong>Timings:</strong> Tuesday, Thursday at 5:00 PM</p>
        <p><strong>Benefits:</strong> Builds muscle, increases stamina, promotes mental clarity.</p>
      </ClassDetailCard>
      <ClassDetailCard>
        <img src="/images/class3.jpg" alt="Class 3" />
        <h3>Meditation</h3>
        <p>Discover the peace within through our meditation sessions, combining guided meditation and mindfulness exercises.</p>
        <p><strong>Timings:</strong> Saturday at 10:00 AM</p>
        <p><strong>Benefits:</strong> Reduces anxiety, improves focus, enhances emotional well-being.</p>
      </ClassDetailCard>
    </ClassDetailsGrid>
  </ClassDetailsSection>
);
 
export default ClassDetails;