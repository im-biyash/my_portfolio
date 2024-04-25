import React from "react";
import myphoto from "./myphoto.png"; // Import your second photo

export default function AboutMe() {
  return ( 
    <div name="about" className="about-me flex justify-between items-center mt-10 h-screen w-full">
      <div className="left relative w-1/2">
        <div className="photo-frame absolute h-full w-60 border-4 border-white-500 rounded-full"></div>
        <img src={myphoto} alt="My Photo 2" className="h-60 w-60 object-cover rounded-full" />
      </div>
      <div className="right w-1/2 ml-5">
        <h2 className="text-3xl font-semibold mb-4 text-red-700">About Me</h2>
        <p className="text-lg text-white">
          Hello! I'm Biyash Shrestha, a dedicated and creative software engineer with a passion for crafting delightful digital experiences. My expertise lies in front-end development, where I specialize in creating user-friendly and responsive web applications.
        </p>
        <p className="text-lg mt-4 text-white">
          My journey in the world of technology has been a diverse one. I've explored various domains, from software engineering to network analysis, gaining a deep understanding of how technology shapes our lives. As a UX/UI Designer, I'm enthusiastic about crafting delightful user experiences through intuitive and visually appealing designs.
        </p>
        <p className="text-lg mt-4 text-white">
          I firmly believe that every line of code has its own unique story to tell. Feel free to connect with me on social media or download my CV to learn more about my experiences and the exciting projects I've been a part of.
        </p>
        <button className="bg-pink-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
          Read More
        </button>
      </div>
    </div>
  );
}
