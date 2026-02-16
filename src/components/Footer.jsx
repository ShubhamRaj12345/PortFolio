// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa6";
// function Footer() {
//   return (
//     <>
//       <hr />
//       <footer className="py-12">
//         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
//           <div className=" flex flex-col items-center justify-center">
//             <div className="flex space-x-4">
//               <FaFacebook size={24} />
//               <FaTwitter size={24} />
//               <FaInstagram size={24} />
//               <FaLinkedinIn size={24} />
//             </div>
//             <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
//               <p className="text-sm">
//                 &copy; 2024 Your Company. All rights reserved.
//               </p>
//               <p className="text-sm">Supportive Partner ❤️ SHUBHAM RAJ</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;


import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/shubham-raj7061"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  size={24}
                  className="hover:text-green-400 hover:scale-125 transition-transform duration-300"
                />
              </a>

              <a
                href="https://github.com/ShubhamRaj12345"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={24}
                  className="hover:text-green-400 hover:scale-125 transition-transform duration-300"
                />
              </a>

              <a href="mailto:shubhamsinha20000@gmail.com">
                <HiOutlineMail
                  size={24}
                  className="hover:text-green-400 hover:scale-125 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2026 Shubham Raj. All rights reserved.</p>
              <p className="text-sm">Supportive Partner ❤️ SHUBHAM RAJ</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

