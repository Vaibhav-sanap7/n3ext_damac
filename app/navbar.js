import React from "react";
import capbg from "../public/images/capbg.svg";
import hamburger from "../public/images/hamburger.svg";
import Logo from "../public/images/Logo.svg";
import Image from "next/image";
import Hero_Desktop from "../public/images/Hero_Desktop.svg";

const Navbar = () => {
  return (
    <nav
      className="bg-cover bg-no-repeat  w-full  h-[650px]"
      style={{ backgroundImage: `url('images/Hero_Desktop.svg') ` }}
    >
      <div className="flex justify-between items-center w-full">
        <div className="ml-[161px]  mt-[57.57px]">
          <Image
            src={Logo}
            alt="Logo"
            width={165.84}
            height={20.864}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center mt-14 mr-40">
          <button className="text-[#17abff] text-[13.008px] font-bold bg-transparent border-2 border-[#17abff] rounded-md py-3 px-11 font-Poppins">
            ENQUIRE NOW
          </button>
          <a href="#" className="ml-4">
            {/*<Image
              src={hamburger}
              alt="Menu"
              className="hidden sm:block cursor-pointer"
            />*/}
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col text-white ml-40">
          <h1 className="text-4xl font-Oswald font-medium uppercase mt-[148px]">
            Harbour Lights <br />
            <span className="text-[#17abff]">de GRESOGONO</span>
          </h1>
          <p className="text-xl font-Poppins font-semibold mt-6">
            1, 2 & 3 Bedrooms Seaside Apartments <br />
            in Dubai Maritime City
          </p>
          <p className="text-base font-Poppins font-normal mt-16 z-10 px-3">
            Rental Returns of UPTO 11%**
          </p>
          <Image
            src={capbg}
            alt="Background"
            className="absolute top-[484px] z-0"
          />
          <p className="text-base font-Poppins font-normal mt-[18px] z-10 px-3">
            Capital Appreciation of UPTO 32%**
          </p>
          <Image
            src={capbg}
            alt="Background"
            className="absolute top-[530px]"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center text-white w-[350px] mr-44 mt-20">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-10 px-5">
            <h3 className="text-lg font-Poppins font-normal">
              PRICING STARTS FROM
            </h3>
            <h1 className="text-3xl font-Oswald font-medium">$ 425,000</h1>
            <h2 className="text-2xl font-Oswald font-light mt-2 mb-4">
              AED 1.3 Million
            </h2>
            <button className="bg-[#17abff] text-white font-Poppins font-bold text-sm rounded-md py-3 px-8">
              GET A PRESENTATION
            </button>
            <p className="text-center text-sm font-Poppins font-normal mt-8 max-w-[95%]">
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
