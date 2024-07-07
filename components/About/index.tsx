"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const TypingAnimation = ({ children }) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1, // Adjust this value to control the typing speed
      },
    },
  };

  return (
    <motion.span variants={textVariants} initial="hidden" animate="visible">
      {children.split("").map((char, index) => (
        <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const About = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section
        className="overflow-hidden pb-20 lg:pb-25 xl:pb-30"
        style={{
          background: "linear-gradient(to right, rgb(28, 80, 157), rgb(78, 244, 165))",
          color: "white",
          padding: "20px",
        }}
      >
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              animate={animationComplete ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="animate_left relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
            >
              <Image
                src="/images/about/Risk-Management.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              animate={animationComplete ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="animate_right w-full md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-white xl:text-hero">
             
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  <TypingAnimation> Risk Management</TypingAnimation>
                </span>
              </h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 1 } },
                }}
                initial="hidden"
                animate={animationComplete ? "visible" : "hidden"}
              >
               Soltrisk offers tailored Risk Management solutions, ensuring proactive identification, assessment, and mitigation of risks to protect your business operations and assets. Our expertise ensures compliance with stringent regulatory standards, bolstering resilience against potential threats in today's dynamic business environment. 
              </motion.p>

              {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-white">01</p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-white">
                    Comprehensive monitoring of customer contract compliance requirements.
                  </h3>
                </div>
              </div> */}
              {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-white">02</p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-white">
                    Access a unified, real-time dashboard displaying compliance status for timely
                    alerts.
                  </h3>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section style={{ backgroundColor: "transparent", padding: "20px" }}>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              animate={animationComplete ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.1 }}
              className="animate_left w-full md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                COMPREHENSIVE PLATFORM FOR COMPLETE COMPLIANCE{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  <TypingAnimation>MANAGEMENT</TypingAnimation>
                </span>
              </h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 1 } },
                }}
                initial="hidden"
                animate={animationComplete ? "visible" : "hidden"}
              >
                Centralized platform for managing and monitoring all compliance requirements,
                including global standards, TPRM, data privacy, statutory regulations, and due
                diligence.
              </motion.p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              animate={animationComplete ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 0.1 }}
              className="animate_right relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
            >
              <Image
                src="./images/about/complain.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
