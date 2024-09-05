"use client";
import Image from "next/image";

const About = () => (
  <section className="about-section">
    <div className="about-image">
      <Image src="/yogaGirl.jpg" alt="about us" width={400} height={400}/>
    </div>
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        Elevate your well-being with Heal Inside Out. Our certified Yoga
        Counselor, boasting 5 years of hands-on expertise, blends the timeless
        power of yoga with modern wellness strategies to help you thrive. Every
        session is a tailored experience, designed to unlock your full
        potential, boost your energy, and bring harmony to your life. Discover
        the transformative power of yoga—ignite your journey to vibrant health
        and inner bliss with us.
      </p>
    </div>
  </section>
);

export default About;
