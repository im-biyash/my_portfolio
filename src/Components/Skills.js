import React from "react";
import { Link } from "react-scroll";
import html from "./html.png";
import css from "./css.webp";
import javascript from "./javascript.png";
import react from "./react.jpeg";
import node from "./node.jpg";
import python from "./python.png";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen pt-20">
      <h2 className="text-3xl mt-4 font-semibold mb-4 text-red-500 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-6">
        {/* HTML */}
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
          <img src={html} alt="HTML" className="h-14 w-14 mx-auto" />
          <h1 className="text-white text-2xl mt-2">Html</h1>
          <p className="text-white mt-2 text-center">
            I have a solid foundation in HTML from my college education. I am
            proficient in creating the structure and layout of web pages using
            HTML tags, elements, and attributes.
          </p>
        </div>

        {/* CSS */}
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
          <img src={css} alt="CSS" className="h-14 w-14 mx-auto" />
          <h1 className="text-white text-2xl mt-2">CSS</h1>
          <p className="text-white mt-2 text-center">
            I possess strong skills in CSS, particularly in styling web pages. I
            can design visually appealing and responsive websites, ensuring they
            look great on various devices and screen sizes
          </p>
        </div>

        {/* JavaScript */}
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
          <img
            src={javascript}
            alt="JavaScript"
            className="h-14 w-14 mx-auto"
          />
          <h1 className="text-white text-2xl mt-2">JavaScript</h1>
          <p className="text-white mt-2 text-center">
            Proficient in JavaScript, specializing in interactive web
            experiences. Skilled in modern libraries and frameworks for
            responsive interfaces
          </p>
        </div>

        {/* React */}
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
          <img src={react} alt="React" className="h-14 w-14 mx-auto" />
          <h1 className="text-white text-2xl mt-2">React</h1>
          <p className="text-white mt-2 text-center">
            Experienced in React for creating single-page applications
            Proficient in state management, component lifecycle, and backend
            integration, ensuring efficient scalable web solutions.
          </p>
        </div>

        {/* Node.js */}
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
          <img src={node} alt="Node.js" className="h-14 w-14 mx-auto" />
          <h1 className="text-white text-2xl mt-2">Node.js</h1>
          <p className="text-white mt-2 text-center">
            I am proficient in Node.js, which allows me to build server-side
            applications. I can develop APIs and full-stack web applications
            using Node.js, making them fast, scalable, and efficient.
          </p>
        </div>

        {/* Python */}
        <div className="p-4 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-[#2e366c]">
          <img src={python} alt="Python" className="h-14 w-14 mx-auto" />
          <h1 className="text-white text-2xl mt-2">Python</h1>
          <p className="text-white mt-2 text-center">
            Proficient in Python for versatile applications. Skilled in web
            development, data analysis, and automation with Python. Effective
            problem-solving with this language
          </p>
        </div>
      </div>
    </div>
  );
}
