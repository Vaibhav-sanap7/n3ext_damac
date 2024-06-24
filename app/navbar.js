import React from "react";
import capbg from "../public/images/capbg.svg";
import hamburger from "../public/images/hamburger.svg";
import Logo from "../public/images/Logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="bg-cover bg-no-repeat w-full h-[650px] sm:h-auto"
      style={{ backgroundImage: `url('images/Hero_Desktop.svg') ` }}
    >
      <div className="flex justify-between items-center w-full p-4 sm:p-8">
        <div className="ml-4 sm:ml-[161px] mt-4 sm:mt-[57.57px]">
          <Image
            src={Logo}
            alt="Logo"
            width={165.84}
            height={20.864}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center mt-4 sm:mt-14 mr-4 sm:mr-40">
          <button className="text-[#17abff] text-sm sm:text-[13.008px] font-bold bg-transparent border-2 border-[#17abff] rounded-md py-2 sm:py-3 px-6 sm:px-11 font-Poppins">
            ENQUIRE NOW
          </button>
          <a href="#" className="ml-4">
            <Image
              src={hamburger}
              alt="Menu"
              className="sm:hidden cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col text-white ml-8 sm:ml-40 mt-4 sm:mt-0">
          <h1 className="text-2xl sm:text-4xl font-Oswald font-medium uppercase mt-8 ">
            Harbour Lights <br />
            <span className="text-[#17abff]">de GRESOGONO</span>
          </h1>
          <p className="text-base sm:text-xl font-Poppins font-semibold mt-4 sm:mt-6">
            1, 2 & 3 Bedrooms Seaside Apartments <br />
            in Dubai Maritime City
          </p>
          <p className="text-sm sm:text-base font-Poppins font-normal mt-4 sm:mt-16 z-10 px-3">
            Rental Returns of UPTO 11%**
          </p>
          <Image
            src={capbg}
            alt="Background"
            className="absolute top-[484px] sm:top-[421px] z-0"
          />
          <p className="text-sm sm:text-base font-Poppins font-normal mt-4 sm:mt-[18px] z-10 px-3">
            Capital Appreciation of UPTO 32%**
          </p>
          <Image
            src={capbg}
            alt="Background"
            className="absolute top-[530px] sm:top-[463px]"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center text-white w-full sm:w-[350px] mr-4 sm:mr-44 mt-8 sm:mt-10 mb-24 ml-2">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 sm:p-10 px-4 sm:px-5">
            <h3 className="text-lg font-Poppins font-normal">
              git PRICING STARTS FROM
            </h3>
            <h1 className="text-2xl sm:text-3xl font-Oswald font-medium">
              $ 425,000
            </h1>
            <h2 className="text-xl sm:text-2xl font-Oswald font-light mt-2 mb-4">
              AED 1.3 Million
            </h2>
            <button className="bg-[#17abff] text-white font-Poppins font-bold text-sm rounded-md py-2 sm:py-3 px-6 sm:px-8">
              GET A PRESENTATION
            </button>
            <p className="text-center text-xs sm:text-sm font-Poppins font-normal mt-4 sm:mt-8 max-w-full sm:max-w-[95%]">
              Get an Expert’s Presentation of Real Estate in Dubai for Life and
              investment
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
