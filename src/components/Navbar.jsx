



// import React, { useEffect, useState } from "react";
// import pic from "../../public/FB_IMG_1669432647568.jpg";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = ["Home", "About", "Portfolio", "Experience", "Contact"];

//   // Scroll blur effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
//         ${
//           scrolled
//             ? "backdrop-blur-lg bg-black/70 shadow-lg"
//             : "bg-black"
//         }`}
//       >
//         <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center text-white">
          
//           {/* Logo Section */}
//           <div className="flex items-center space-x-3">
//             <img
//               src={pic}
//               alt="profile"
//               className="h-11 w-11 rounded-full border-2 border-green-500"
//             />
//             <div>
//               <h1 className="text-lg font-semibold">
//                 Shubham Raj
//               </h1>
//               <p className="text-sm text-green-400">
//                 Java Developer
//               </p>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-8 font-medium">
//             {navItems.map((item, index) => (
//               <li key={index} className="cursor-pointer">
//                 <Link
//                   to={item}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   className="hover:text-green-400 transition duration-200"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Icon */}
//           <div
//             className="md:hidden cursor-pointer"
//             onClick={() => setMenu(!menu)}
//           >
//             {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Slide Menu */}
//       <div
//         className={`fixed top-16 left-0 w-full h-screen bg-black text-white 
//         transform transition-transform duration-300 md:hidden
//         ${menu ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <ul className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-semibold">
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 onClick={() => setMenu(false)}
//                 className="hover:text-green-400 transition duration-200"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Navbar;



import React, { useEffect, useState } from "react";
import pic from "../../public/FB_IMG_1669432647568.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Portfolio", "Experience", "Contact"];

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-lg bg-black/70 shadow-lg" : "bg-black"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center text-white">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src={pic}
              alt="profile"
              className="h-11 w-11 rounded-full border-2 border-green-500"
            />
            <div>
              <h1 className="text-lg font-semibold">Shubham Raj</h1>
              <p className="text-sm text-green-400">Java Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-green-400 transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white z-50
        transform transition-transform duration-300 md:hidden ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-semibold">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenu(false)}
                className="hover:text-green-400 transition duration-200 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;

