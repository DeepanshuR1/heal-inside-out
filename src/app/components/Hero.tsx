"use client";

import Link from "next/link";
// import Image from "next/image";
// import CustomButton from "./CustomButton";

// const Hero = () => {
//   const handleScroll = () => {
//     const nextSection = document.getElementById("discover");

//     if (nextSection) {
//       nextSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="hero">
//       <div className="flex-1 pt-36">
//         <h1 className="hero__title">Find Your Inner Peace</h1>

//         <p className="hero__subtitle">
//           {/* Join our community and discover the power of yoga */}
//           Connect with yourself and build a stronger, healthier you through yoga
//         </p>

//         <CustomButton
//           title="Explore"
//           containerStyles="bg-primary-blue text-white rounded-full mt-10"
//           handleClick={handleScroll}
//         />
//       </div>
//       <div className="hero__image-container">
//         <div className="hero__image">
//           <Image
//             src="/yogaHome.jpg"
//             alt="hero"
//             fill
//             className="object-contain"
//           />
//         </div>

//         <div className="hero__image-overlay" />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    });
  };

  const handleLearnMore = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    });
  };

  // const handleJoinNow = () => {
  //   router.push("join");
  // };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Heal Inside Out</h1>
        <p className="hero-description">
          Discover the transformative power of yoga. Join us today to start your
          journey to a healthier and happier life.
        </p>
        <div className="hero-buttons">
          {/* <Link href="/join">
            <a className="hero-button">Join Now</a>
          </Link> */}
          <Link className="hero-button" href="/join">Join Now</Link>
          {/* <button className="hero-button" onClick={handleJoinNow}>
            Join Now
          </button> */}
          <button className="hero-button" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
      {/* <button className="scroll-down-button" onClick={handleScroll}>
        ↓
      </button> */}
    </section>
  );
};

export default Hero;
