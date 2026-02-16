
import React from "react";
import pic from "../../public/photo.jpg";
import { FaEnvelope, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <section
      name="Home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
    >
      {/* 🌌 FULL STAR SKY */}
      <div className="star-sky">
        {/* ⭐ STARS */}
        {Array.from({ length: 180 }).map((_, i) => (
          <span
            key={i}
            className={`star ${i % 4 === 0 ? "big" : "small"}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}

        {/* ☄️ SHOOTING STARS */}
        <span className="shooting-star one"></span>
        <span className="shooting-star two"></span>
        <span className="shooting-star three"></span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-20 py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14">

          {/* LEFT */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="text-gray-400 text-lg">
              Welcome to my portfolio
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Hi, I’m{" "}
              <span className="text-green-400 font-bold">
                <ReactTyped
                  strings={["Shubham Raj", "Java Developer", "Backend Engineer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
              Java backend developer passionate about building scalable,
              high-performance applications using Spring Boot.
            </p>

            {/* <div className="flex justify-center md:justify-start gap-6 pt-4">
              <FaSquareFacebook className="text-2xl hover:text-green-400 transition" />
              <FaLinkedin className="text-2xl hover:text-green-400 transition" />
              <IoLogoYoutube className="text-2xl hover:text-green-400 transition" />
              <FaTelegram className="text-2xl hover:text-green-400 transition" />
            </div> */}


           <div className="flex justify-center md:justify-start gap-6 pt-6">
  <a href="mailto:shubhamsinha20000@gmail.com" target="_blank" rel="noopener noreferrer">
    <FaEnvelope className="text-2xl text-white hover:text-green-400 hover:scale-125 transition-transform duration-300" />
  </a>

  <a href="https://www.linkedin.com/in/shubham-raj7061" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-2xl  to-white hover:text-green-400 hover:scale-125 transition-transform duration-300" />
  </a>
 
   <a
    href="https://github.com/ShubhamRaj12345"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="text-2xl text-white hover:text-green-400 hover:scale-125 transition-transform duration-300" />
  </a>



   {/* Download Resume Button */}
  <a
    href="/pdf/shubham__Resume.pdf" // replace with your resume path
    download
    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded transition duration-300"
  >
    Download Resume
  </a>
</div>


          </div>

          {/* RIGHT IMAGE */}
<div className="md:w-1/2 flex justify-center">
  <div
    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden
               cursor-pointer transform transition duration-500 ease-in-out
               hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(34,197,94,0.8)]
               hover:animate-image-rotate"
  >
    <img
      src={pic}
      alt="Shubham Raj"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        </div>
      </div>
    </section>
  );
}

export default Home;

