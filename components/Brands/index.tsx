"use client"
import React, { useEffect, useRef } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";

const Brands = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start = 0;
    const speed = 0.1; // Adjust speed here

    const slide = () => {
      start -= speed;
      if (slider) {
        if (start <= -100) {
          start = 0;
        }
        slider.style.transform = `translateX(${start}%)`;
      }
      requestAnimationFrame(slide);
    };

    slide();

    return () => {
      // Cleanup function if needed
      // For example, cancel animation frame
    };
  }, []);

  const containerStyle = {
    display: "flex",
    width: "calc(200%)", // Double the width to accommodate the sliding effect
  };

  const sliderWrapperStyle = {
    display: "flex",
    overflow: "hidden", // Hide overflow to prevent showing empty space
  };

  const singleBrandStyle = {
    flex: "0 0 auto", // Prevents the divs from shrinking
    width: "calc(200% / 12)", // Adjust to ensure even distribution
  };

  const headerInfo: any = {
    title: "Frameworks", // Add other properties as needed (subtitle, description)
  };

  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <SectionHeader headerInfo={headerInfo} />
        <div className="slider-wrapper" style={sliderWrapperStyle}>
          <div className="brand-slider" style={containerStyle} ref={sliderRef}>
            {brandData.concat(brandData).map((brand, key) => (
              <SingleBrand brand={brand} key={key} style={singleBrandStyle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
