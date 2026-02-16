import React from "react";

function About() {
  return (
    <section
      name="About"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20"
    >
      <div className="space-y-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-black text-center md:text-left">
          About Me
        </h1>

        {/* Introduction */}
        <p className="text-black text-justify md:text-left text-base md:text-lg leading-relaxed">
          Hello, I'm <span className="font-semibold text-green-500">Shubham Raj</span>, a passionate 
          Java Backend Developer. I specialize in building scalable, high-performance applications 
          using <span className="font-semibold">Java, Spring Boot, Hibernate</span>, and microservices. 
          I enjoy solving complex problems and writing clean, efficient, and maintainable code.
        </p>

        {/* Education & Training */}
        <div>
          <h2 className="text-green-500 font-semibold text-xl mb-2">Education & Training</h2>
          <ul className="list-disc list-inside text-black space-y-1 text-sm md:text-base">
            <li>B.Tech in Computer Science, Sagar Institute Of Science and Technology, 2026</li>
            <li>
              Java & Spring Boot Certification,{" "}
              <a
                href="https://www.learncodewithdurgesh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline hover:text-green-700"
              >
                Learn Code With Durgesh
              </a>, 2025
            </li>
            <li>
              Microservices and Docker Training,{" "}
              <a
                href="https://www.learncodewithdurgesh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline hover:text-green-700"
              >
                Learn Code With Durgesh
              </a>, 2025
            </li>
          </ul>
        </div>

        {/* Skills & Expertise */}
        <div>
          <h2 className="text-green-500 font-semibold text-xl mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside text-black space-y-1 text-sm md:text-base">
            <li>Proficient in Java, Spring Boot, Hibernate, SQL, and RESTful APIs</li>
            <li>Experience with Microservices, Docker, and CI/CD pipelines</li>
            <li>Strong problem-solving, debugging, and optimization skills</li>
            <li>Effective communicator and team player in agile environments</li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div>
          <h2 className="text-green-500 font-semibold text-xl mb-2">Professional Experience</h2>
          <ul className="list-disc list-inside text-black space-y-1 text-sm md:text-base">
            <li>
              Java Developer Intern,{" "}
              <a
                href="https://www.sentrexconsultancy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline hover:text-green-700"
              >
                Sentrex Consultancy
              </a>, Jan 2026 - Present  
              <span className="text-gray-700">
                {" — Developed microservices-based backend modules and APIs using Spring Boot."}
              </span>
            </li>
          </ul>
        </div>

        {/* Achievements & Awards */}
        <div>
          <h2 className="text-green-500 font-semibold text-xl mb-2">Achievements & Awards</h2>
          <ul className="list-disc list-inside text-black space-y-1 text-sm md:text-base">
            <li>
              Certified Java Programmer,{" "}
              <a
                href="https://www.udemy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline hover:text-green-700"
              >
                Udemy
              </a>, 2025
            </li>
            {/* <li>Winner of College Hackathon – Developed inventory management app, 2024</li> */}
          </ul>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-green-500 font-semibold text-xl mb-2">Mission Statement</h2>
          <p className="text-black text-justify md:text-left text-base md:text-lg leading-relaxed">
            My mission is to leverage my skills in Java and backend development to build scalable 
            and efficient software solutions. I aim to continuously learn and implement modern 
            technologies like Spring Boot, Microservices, and Docker, delivering high-quality 
            applications that positively impact businesses and end-users.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
