"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <div className="navbar flex items-center justify-between bg-secondary px-4 sm:px-6 lg:px-8 lg:py-4 lg:w-full lg:mt-[-30px]">
        <img
          src="/images/Informational-Websit.png"
          width={300}
          height={100}
          className="w-auto h-auto max-w-[150px] is:max-w-[250px] sd:max-w-[220px] im:max-w-[330px] lg:max-w-[300px] nhm:max-w-[400px] 2xl:max-w-[400px] 
                     is:mt-[-50px] sd:mt-[-25px] im:mt-[-25px] lg:mt-[-30px] lg:ml-[-24px] nh:mt-[-25px]
                     is:ml-[-55px] sd:ml-[-20px] im:ml-[-20px] nh:ml-[-35px] nh:w-[50%]"
          alt="Logo"
        />

        <div className="lg:hidden im:hidden sd:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            <FiMenu className="w-8 h-8 is:w-9 is:h-9 sd:w-12 sd:h-10 im:w-14 im:h-14 is:mt-[-40px] nh:text-[60px] im:mt-[-20px] sd:mt-[-20px]" />
          </button>
        </div>

        <ul className="hidden lg:flex lg:mt-[-40px] lg:mr-[150px] gap-8 lg:gap-[90px] lg:text-[24px] lg:ml-[160px] nh:ml-[10px] nh:text-[20px] nh:gap-[100px] nh:mt-[30px] ipad-mini:text-[23px] ipad-mini:mt-[-20px] ipad-air:text-[24px] zenbook:text-[15px] ipad-mini:flex ipad-air:flex zenbook:flex sd:flex sd:text-[15px] sd:mt-[-15px]">
          <li className="text-primary font-bold lg:text-[24px]">Home</li>
          <li className="text-white font-normal lg:text-[24px]">Features</li>
          <li className="text-white font-normal lg:text-[24px]">Team</li>
          <li className="text-white font-normal whitespace-nowrap lg:text-[24px]">Contact Us</li>
        </ul>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-secondary bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl im:text-[40px]"
            onClick={closeMenu}
          >
            <AiOutlineClose />
          </button>
          <ul className="flex flex-col items-center gap-6 text-white is:text-[18px] sd:text-[20px] im:text-[26px]">
            <li className="text-primary font-bold mb-4 is:mb-[15px] sd:mb-[20px] im:mb-[25px]">Home</li>
            <li className="font-normal mb-4 is:mb-[15px] sd:mb-[20px] im:mb-[25px]">Features</li>
            <li className="font-normal mb-4 is:mb-[15px] sd:mb-[20px] im:mb-[25px]">Team</li>
            <li className="font-normal mb-4 is:mb-[15px] sd:mb-[20px] im:mb-[25px]">Contact Us</li>
          </ul>
        </div>
      )}
    </main>
  );
}
