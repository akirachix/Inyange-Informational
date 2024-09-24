"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface HamburgerMenuProps {
  toggleMenu: () => void; 
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggleMenu }) => {
  const menuItems = [
    { href: "#home", text: "Home" },
    { href: "#features", text: "Features" },
    { href: "#pricing", text: "Pricing" },
    { href: "#about", text: "About" },
  ];

  return (
    <ul className="flex flex-col items-center gap-6 text-white text-[20px]">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="text-white font-medium mb-4 hover:text-primary"
            onClick={toggleMenu}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

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
      <div className="navbar flex items-center justify-between bg-secondary px-4 sm:px-6 lg:px-8 lg:py-4 lg:w-full lg:mt-[-30px] font-worksans">
        <Image
          src="/images/Informational-Websit.png"
          width={300}
          height={100}
          className="w-auto h-auto max-w-[300px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[300px] 2xl:max-w-[400px] ml-[-43px] mt-[-30px] sm:ml-[-16px] md:ml-[-40px]  lg:ml-[-24px]  lg:mt-[-30px] md:w-[100%]"
          alt="Logo"
        />

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            <FiMenu className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ml-[-30px] sm:ml-[-35px] md:ml-[-40px] mt-[-30px]" />
          </button>
        </div>

        <ul className="hidden lg:flex lg:mt-[-40px] lg:mr-[150px] md:flex md:text-[22px] md:gap-[40px] gap-8 lg:gap-[90px] lg:text-[24px] lg:ml-[80px] md:mt-[-20px]">
          <li>
            <a
              href="#home"
              className="text-white hover:text-primary font-medium lg:text-[24px]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-white font-medium lg:text-[24px] hover:text-primary"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="text-white font-medium lg:text-[24px]  hover:text-primary"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text-white font-medium lg:text-[24px]  hover:text-primary"
            >
              Team
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-secondary bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeMenu}
          >
            <AiOutlineClose />
          </button>
          <HamburgerMenu toggleMenu={closeMenu} />
        </div>
      )}
    </main>
  );
}