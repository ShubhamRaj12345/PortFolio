import React from "react";
import pic from "../../public/mypic.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="relative w-full h-screen bg-black text-white overflow-hidden"
      >
        {/* Full-screen background stars animation */}
        <div className="stars"></div>

        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 relative z-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
              <span className="text-xl">Welcome In My Feed</span>
              <div className="flex space-x-1 text-2xl md:text-4xl">
                <h1>Hello, I'm a </h1>
                <ReactTyped
                  className="text-red-700 font-bold"
                  strings={["Shubham Raj", "Java Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <br />
              <p className="text-sm md:text-md text-justify">
                I'm Shubham Raj, a B.Tech CSE student aspiring to become a Java developer, specializing in backend
                development. I aim to master Java frameworks like Spring and Hibernate, focusing on building scalable
                applications. Through projects and internships, I will enhance my skills to create innovative software solutions for real-world challenges.
              </p>
              <br />
              <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                <div className="space-y-2">
                  <h1 className="font-bold text-center ">Available on</h1>
                  <ul className="flex space-x-5">
                    <li>
                      <a href="/" target="_blank">
                        <FaSquareFacebook className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/shubham-raj-70678829a" target="_blank">
                        <FaLinkedin className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_blank">
                        <IoLogoYoutube className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_blank">
                        <FaTelegram className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold text-center"> </h1>
                  <div className="flex space-x-5">
                    {/* Tech icons can be added here */}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
              {/* Image with bouncing effect */}
              <div
                className="relative w-[80vw] max-w-[480px] h-[80vw] max-h-[480px] flex items-center justify-center"
                style={{ animation: "bounce-continuous 3s ease-in-out infinite" }}
              >
                {/* Outer Dotted Border Frame */}
                <div className="absolute inset-0 rounded-full border-8 border-dotted border-indigo-500 shadow-[0_0_25px_rgba(75,0,130,0.8)]"></div>

                {/* Inner Image (continuously bouncing) */}
                <img
                  src={pic}
                  className="rounded-full w-[75vw] max-w-[450px] h-[75vw] max-h-[450px] border-4 border-transparent"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
