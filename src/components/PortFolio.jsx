
// import React from "react";

// function PortFolio() {
//   const projects = [
//     {
//       id: 1,
//       image: "/electronic.png", // <-- from public folder
//       title: "Electronic Store Management System",
//       description:
//         "Backend application using Spring Boot for managing an electronics store.",
//     },
//     {
//       id: 2,
//       image: "/annulreport.png", // <-- from public folder
//       title: "Annual Report Portal",
//       description:
//         "Full-stack portal built with React and Spring Boot for managing annual reports.",
//     },
//     {
//       id: 3,
//       image: "/diningmesstoken.png", // <-- from public folder
//       title: "Mess Token System",
//       description:
//         "Node.js & Express based token system for efficient mess management.",
//     },
//   ];

//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
//         <span className="underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
//           {projects.map(({ id, image, title, description }) => (
//             <div
//               key={id}
//               className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
//             >
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-64 object-cover rounded-md mb-4"
//               />
//               <div className="font-bold text-xl mb-2">{title}</div>
//               <p className="text-gray-700 mb-4">{description}</p>
//               <div className="flex gap-4">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                   Video
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Source Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;


import React from "react";

function PortFolio() {
  const projects = [
    {
      id: 1,
      image: "/electronic.png",
      title: "Electronic Store Management System",
      description:
        "Backend application using Spring Boot for managing an electronics store.",
      sourceLink: "https://github.com/ShubhamRaj12345/ElectronicStore-with-Jwt.git",
      videoLink: "https://www.youtube.com/watch?v=example1", // replace with actual video
    },
    {
      id: 2,
      image: "/annulreport.png",
      title: "Annual Report Portal",
      description:
        "Full-stack portal built with React and Spring Boot for managing annual reports.",
      sourceLink: "https://github.com/ShubhamRaj12345/annualreportportal-backend-majorproject.git",
      videoLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      id: 3,
      image: "/diningmesstoken.png",
      title: "Mess Token System",
      description:
        "Node.js & Express based token system for efficient mess management.",
      sourceLink: "https://github.com/ShubhamRaj12345/5th-Sem-project-Mess-Token.git",
      videoLink: "https://www.youtube.com/watch?v=example3",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5 text-black text-center">
          Portfolio
        </h1>
        <span className="underline font-semibold text-black text-center block mb-6">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(({ id, image, title, description, sourceLink, videoLink }) => (
            <div
              key={id}
              className="border-2 rounded-xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="font-bold text-2xl mb-2 text-black">{title}</div>
              <p className="text-gray-700 mb-4">{description}</p>
              <div className="flex gap-4">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                >
                  Watch Video
                </a>
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
