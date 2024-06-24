import React from "react";
import Image from "next/image";
import {
  build_check,
  percentage,
  hand_key,
  scale,
  Harbour,
  gym,
  river_pool,
  swimming_pool,
  sofa_sky,
} from "../public/images/index.js";

const Features = () => {
  return (
    <>
      <div className="bg-[#f4f9ff] flex flex-wrap items-center">
        <div className="flex flex-col items-center ml-[161px] py-3">
          <div></div>
          <Image src={build_check} alt="" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center">
            BOOK WITH
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-[30px] text-center">
            Only 20%
          </h1>
        </div>
        <div className="flex flex-col items-center ml-[230px]">
          <Image src={percentage} alt="" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center">
            PAYMENT PLAN
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-[30px] text-center">
            Easy 70/30
          </h1>
        </div>
        <div className="flex flex-col items-center ml-[230px]">
          <Image src={hand_key} alt="" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center">
            HANDOVER ON
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-[30px] text-center">
            Q2 2027
          </h1>
        </div>
        <div className="flex flex-col items-center ml-[230px]">
          <Image src={scale} alt="" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center">
            AREA STARTS FROM
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-[30px] text-center">
            700 sqmt
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-[30px]">
        <Image src={Harbour} alt="" />
        <h2 className="mt-[10px] font-Oswald font-medium text-[36px] text-[#00357b] mb-[10px]">
          Features & Amenities
        </h2>
        <p className="font-Poppins font-normal text-[16px] text-[#343434] mb-[10px]">
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront <br />
          lifestyle. Its maritime-inspired amenities provide an unmatched
          seaside experience, offering a <br />
          life of tranquility and bliss.
        </p>
      </div>

      <div className="flex items-center flex-wrap justify-evenly mx-[120px] my-[10px]">
        <div className="flex flex-col items-center text-center p-[10px] w-[227px] h-[271px] rounded-[20px] shadow-md">
          <Image src={river_pool} alt="" width={206} height={199.5} />
          <p className="font-Poppins font-semibold text-[14px] text-[#00357b] pt-[10px]">
            Floating <br /> Pools
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-[10px] w-[227px] h-[271px] rounded-[20px] shadow-md">
          <Image src={sofa_sky} alt="" width={206} height={199.5} />
          <p className="font-Poppins font-semibold text-[14px] text-[#00357b] pt-[10px]">
            Spacious Cabins <br /> Like Rooms
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-[10px] w-[227px] h-[271px] rounded-[20px] shadow-md">
          <Image src={swimming_pool} alt="" width={206} height={199.5} />
          <p className="font-Poppins font-semibold text-[14px] text-[#00357b] pt-[10px]">
            Sea Facing <br /> Swimming Pools
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-[10px] w-[227px] h-[271px] rounded-[20px] shadow-md">
          <Image src={gym} alt="" width={206} height={199.5} />
          <p className="font-Poppins font-semibold text-[14px] text-[#00357b] pt-[10px]">
            Gymnasium <br />& Fitness
          </p>
        </div>
      </div>

      <h4 className=" flex flex-wrap font-Poppins font-light text-[10px] text-[#686868] py-[30px]  pl-[870px] ">
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        <span className="underline cursor-pointer"> Source 1 | Source 2</span>
      </h4>
    </>
  );
};

export default Features;
