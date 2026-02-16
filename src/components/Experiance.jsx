import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import java from "../../public/java.png";
import mysql from "../../public/pngwing.com.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import react from "../../public/react.png";
import tailwindcss from "../../public/tailwind.jpeg";
import docker from "../../public/docker.jpg";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: tailwindcss, name: "Tailwind CSS" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: react, name: "React" },
    { id: 6, logo: java, name: "Java" },
    { id: 7, logo: mysql, name: "MySQL" },
    { id: 8, logo: spring, name: "Spring Framework" },
    { id: 9, logo: springBoot, name: "Spring Boot" },
    { id: 10, logo: docker, name: "Docker" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3 to-black">Technologies & Skills</h1>
        <p className="to-black">
          Intern at{" "}
          <a
            href="https://www.sentrexconsultancy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline hover:text-green-700"
          >
            Sentrex Consultancy
          </a>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-xl transform transition duration-500 hover:scale-110 cursor-pointer"
          >
            <div className="w-24 h-24 mb-3">
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <h3 className="to-black font-semibold text-lg">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
