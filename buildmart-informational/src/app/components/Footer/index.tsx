import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#263C5A] text-white pt-[70px] pb-[60px] mt-[50px] font-worksans">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="BuildMart Logo"
                width={75}
                height={50}
              />
              <h3 className="text-2xl font-bold ml-3">BuildMart</h3>
            </div>

            <p className="text-sm sm:text-base md:text-lg xl:text-[20px] leading-relaxed my-4 px-2 xl:w-[100%]">
              BuildMart is a cutting-edge marketplace for builders and
              construction professionals. We connect skilled tradespeople,
              suppliers, and industry experts across various sectors of the
              construction industry.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 xl:text-[20px]">
            <h4 className="text-[24px] font-semibold mb-4 text-[#F8B612]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F8B612] transition duration-300className text-sm lg:text-[14px] xl:text-[16px]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F8B612] transition duration-300 text-sm lg:text-[14px] xl:text-[16px]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F8B612] transition duration-300 text-sm lg:text-[14px] xl:text-[16px]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F8B612] transition duration-300 text-xl-1 text-sm lg:text-[14px] xl:text-[16px]"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#F8B612] transition duration-300 text-sm lg:text-[14px] xl:text-[16px]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-[24px] font-semibold mb-4 text-[#F8B612]xl:text-[24px] font-semibold mb-4 text-[#F8B612]">
              Social Info
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full p-2 flex items-center justify-center w-10 h-10"
              >
                <FaFacebookF className="w-7 h-8" />
              </a>

              <a
                href="#"
                className="rounded-full p-2 flex items-center justify-center w-12 h-12"
              >
                <FaXTwitter className="w-7 h-8" /> 
              </a>

              <a
                href="#"
                className="rounded-full p-2 flex items-center justify-center w-12 h-12"
              >
                <FaLinkedin className="w-7 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-gray-700 text-sm xl:text-[20px] xl:mt-[40px] xl:ml-[-40px]">
          <p>&copy; 2024 BuildMart. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;