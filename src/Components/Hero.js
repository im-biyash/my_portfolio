import React, { useState } from "react";
import myphoto from "./myphoto.png";
import github from "./github.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"; 

export default function Hero() {
  const [isTyping, setIsTyping] = useState(true);

  const handleDone = () => {
    setIsTyping(true); // Set isTyping to true to trigger another loop
  };

  const redTextStyle = {
    color: "red", // Set the text color to red
  };
  
  const fadeInVariant = {
    hidden: { opacity: 0, y: 21 }, // Start slightly below the original position
    show: {
      opacity: 1,
      y: 0, // Return to the original position
      transition: { duration: 3, ease: "easeInOut" }, // Use "easeInOut" for smooth animation
    },
  };

  // Create a separate set of variants for the right-side photo
  const rightPhotoVariant = {
    hidden: { opacity: 0, y: -20 }, // Start slightly above the original position
    show: {
      opacity: 1,
      y: 0, // Return to the original position
      transition: { duration: 2, ease: "easeInOut" }, // Use "easeInOut" for smooth animation
    },
  };
  
  return (
    <div name ='home'className="hero   h-screen overflow-hidden ">
      <div className="left absolute top-2/4 left-14 transform -translate-y-1/2  text-white pl-8 pr-16 mt-8 ml-7">
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          animate="show"
          className="text-2xl lg:text-3xl font-semibold mt-2 "
        >
        <span className="text-3xl text-pink-600"> Hi! </span> I'm
        </motion.h2>
        <motion.h1
          variants={fadeInVariant}
          initial="hidden"
          animate="show"
          className="text-4xl lg:text-5xl font-semibold mt-4"
        >
          Biyash Shrestha
        </motion.h1>
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          animate="show"
          className="text-2xl lg:text-3xl font-semibold mt-2"
        >
          And I'm a{" "}
          {isTyping ? (
            <span style={redTextStyle}>
              <Typewriter
                words={[
                  "frontend developer",
                  "software engineer",
                  "network analyst",
                  "UI/UX Designer",
                ]}
                loop="true"
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
              />
            </span>
          ) : (
            "photographer" // You can set your default text here
          )}
        </motion.h2>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="show"
          className="icons flex px-4 mt-4"
        >
          <img
            src={github}
            alt="github"
            className="h-9 w-auto mr-2 transition-transform transform hover:scale-110 hover:bg-[#2e366c]"
          />
          <img
            src={instagram}
            alt="instagram"
            className="h-9 w-auto mr-2 transition-transform transform hover:scale-110 hover:bg-[#2e366c]"
          />
          <img
            src={linkedin}
            alt="linkedin"
            className="h-9 w-auto mr-2 transition-transform transform hover:scale-110 hover:bg-[#2e366c]"
          />
          <img
            src={twitter}
            alt="twitter"
            className="h-9 w-auto transition-transform transform hover:scale-110 hover:bg-[#2e366c]"
          />
        </motion.div>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="show"
          className="buttongroup mt-5 flex space-x-3"
        >
          <motion.button
            variants={fadeInVariant}
            initial="hidden"
            animate="show"
            className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-full"
          >
            Download CV
          </motion.button>
          <motion.button
            variants={fadeInVariant}
            initial="hidden"
            animate="show"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Hire me
          </motion.button>
        </motion.div>
      </div>
      <motion.div
  variants={rightPhotoVariant}
  initial="hidden"
  animate="show"
  className="right absolute top-1/3 transform -translate-y-1/2 right-20 h-80 w-80 overflow-hidden flex items-center justify-center"
>
  <div className="rounded-full overflow-hidden bg-slate-300 h-full w-full">
    <img src={myphoto} alt="My Photo" className="h-full w-full object-cover" />
  </div>
</motion.div>



    </div>
  );
}
