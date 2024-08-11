"use client";
import React, { useState, useRef, useEffect } from "react";

interface Testimonial {
  name: string;
  review: string;
  beforeImage: string;
  afterImage: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Shalu",
    review: `After battling asthma for 10 years, especially during winter, yoga has made a world of difference. My asthma attacks have nearly disappeared, and I haven't had one since starting yoga.`,
    beforeImage: "ShaluBefore.jpeg",
    afterImage: "ShaluAfter.jpeg",
  },
  {
    name: "Manju",
    review:
      "I've had PCOD for 3 years, but thanks to yoga, my cycle has been regular for the past 7 months.",
    beforeImage: "ManjuBefore.jpeg",
    afterImage: "ManjuAfter.jpeg",
  },
  {
    name: "Goldy",
    review: `Yoga has been transformative for me. I used to feel lethargic due to my weight, but since practicing yoga, I've lost weight, and my energy levels are now like that of a 14-year-old.`,
    beforeImage: "GoldyBefore.jpeg",
    afterImage: "GoldyAfter.jpeg",
  },
  {
    name: "Purnima",
    review: `Yoga and a balanced diet helped me overcome the weakness from a vitamin B12 deficiency. Now, I feel stronger, energized, and healthier than ever!`,
    beforeImage: "PurnimaBefore.jpeg",
    afterImage: "PurnimaAfter.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Transformation Stories</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <BeforeAfterCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

const BeforeAfterCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef(0);
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      const windowHeight = window.innerHeight;

      if (
        scrollTop + windowHeight > elementTop &&
        scrollTop < elementTop + rect.height
      ) {
        const offsetRatio =
          (scrollTop + windowHeight - elementTop) /
          (windowHeight + rect.height);
        setOffset(offsetRatio * 100);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newSliderPosition =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const newSliderPosition =
        ((touch.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (containerRef.current) {
      const touchEndX = e.changedTouches[0].clientX;
      const distance = touchEndX - touchStartX.current;

      if (distance > 50) {
        setSliderPosition((prev) => Math.max(0, prev - 10));
      } else if (distance < -50) {
        setSliderPosition((prev) => Math.min(100, prev + 10));
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      className="testimonial-card"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={containerRef}
    >
      <div
        className="testimonial-slider"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="after-image"
          style={{
            backgroundImage: `url(${testimonial.afterImage})`,
            transform: `translateY(-${offset * 0.1}px)`,
          }}
        />
        <div
          className="before-image"
          style={{
            backgroundImage: `url(${testimonial.beforeImage})`,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transform: `translateY(-${offset * 0.1}px)`,
          }}
        />
        <div
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => e.preventDefault()}
          onTouchStart={(e) => e.preventDefault()}
        />
        <div className="slider-progress">
          <div
            className="slider-progress-inner"
            style={{ width: `${sliderPosition}%` }}
          />
        </div>
        <div className="tooltip" style={{ left: `${sliderPosition}%` }}>
          Drag to compare
        </div>
      </div>
      <div className="testimonial-content">
        <h3>{testimonial.name}</h3>
        <p>{testimonial.review}</p>
      </div>
    </div>
  );
};

export default Testimonials;
