"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== About Us Section Start ===== */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-gradient-to-r from-blue-700 to-green-400">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `ABOUT US`,
                subtitle: `G3 Cyber Space`,
              }}
            />
          </div>
          {/* Section Title End */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* About Us Item */}
            <div
              onClick={() => handleFlip(0)}
              className={`${
                flippedIndex === 0 ? "flipped scale-105" : ""
              } cursor-pointer transition-transform animate_spin group relative rounded-lg border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none card`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Who are we?
                  </h3>
                </div>
                <div className="card-back">
                  <p>
                    Founded by industry veterans with over 40 years of combined
                    expertise in cybersecurity, audits, BCM (Business Continuity
                    Management), TPRM, and regulatory compliance, G3 Cyberspace
                    stands at the forefront of delivering trusted solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision Item */}
            <div
              onClick={() => handleFlip(1)}
              className={`${
                flippedIndex === 1 ? "flipped scale-105" : ""
              } cursor-pointer transition-transform animate_spin group relative rounded-lg border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none card`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Our Vision
                  </h3>
                </div>
                <div className="card-back">
                  <p>
                    At G3 Cyberspace, we envision transforming Governance, Risk,
                    and Compliance (GRC) into a strategic advantage for businesses
                    worldwide. Our mission is to elevate GRC beyond regulatory
                    obligations, fostering trust, innovation, and sustainable growth
                    for our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Product Item */}
            <div
              onClick={() => handleFlip(2)}
              className={`${
                flippedIndex === 2 ? "flipped scale-105" : ""
              } cursor-pointer transition-transform animate_spin group relative rounded-lg border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none card`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    Our Product
                  </h3>
                </div>
                <div className="card-back">
                  <p>
                    Discover the power of Soltrisk, our comprehensive Compliance
                    suite product designed to govern global governance. We are
                    dedicated to helping businesses thrive in today's complex
                    compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== About Us Section End ===== */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        .animate_spin {
          animation: spin 1s ease-in-out;
        }

        .card {
          perspective: 1000px;
          width: 100%;
          max-width: 400px; /* Increased width */
          min-height: 300px; /* Increased height */
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .card.flipped .card-inner {
          transform: rotateY(180deg);
        }
        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .card-front {
          background-color: white;
        }
        .card-back {
          background-color: #f8f9fa;
          transform: rotateY(180deg);
        }
        .card-inner > div {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default Pricing;
