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
      <div className="bg-[#f4f9ff] flex flex-wrap items-center justify-around py-6 px-4 sm:px-8">
        <div className="flex flex-col items-center mb-6">
          <Image src={build_check} alt="Build Check" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center mt-2">
            BOOK WITH
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-2xl sm:text-3xl text-center">
            Only 20%
          </h1>
        </div>
        <div className="flex flex-col items-center mb-6">
          <Image src={percentage} alt="Percentage" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center mt-2">
            PAYMENT PLAN
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-2xl sm:text-3xl text-center">
            Easy 70/30
          </h1>
        </div>
        <div className="flex flex-col items-center mb-6">
          <Image src={hand_key} alt="Hand Key" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center mt-2">
            HANDOVER ON
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-2xl sm:text-3xl text-center">
            Q2 2027
          </h1>
        </div>
        <div className="flex flex-col items-center mb-6">
          <Image src={scale} alt="Scale" />
          <h2 className="text-[#00357b] font-Poppins font-normal text-center mt-2">
            AREA STARTS FROM
          </h2>
          <h1 className="text-[#00357b] font-Oswald font-medium text-2xl sm:text-3xl text-center">
            700 sqmt
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-8 px-4 sm:px-8">
        <Image src={Harbour} alt="Harbour" />
        <h2 className="mt-4 font-Oswald font-medium text-2xl sm:text-4xl text-[#00357b] mb-4">
          Features & Amenities
        </h2>
        <p className="font-Poppins font-normal text-base sm:text-lg text-[#343434] mb-4">
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mx-4 sm:mx-[120px] my-4 sm:my-[10px] gap-6">
        <div className="flex flex-col items-center text-center p-4 w-[227px] h-[271px] rounded-[20px] shadow-md bg-white">
          <Image src={river_pool} alt="River Pool" width={206} height={199.5} />
          <p className="font-Poppins font-semibold text-sm sm:text-base text-[#00357b] pt-4">
            Floating <br /> Pools
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 w-[227px] h-[271px] rounded-[20px] shadow-md bg-white">
          <Image src={sofa_sky} alt="Sofa Sky" width={206} height={199.5} />
          <p className="font-Poppins font-semibold text-sm sm:text-base text-[#00357b] pt-4">
            Spacious Cabins <br /> Like Rooms
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 w-[227px] h-[271px] rounded-[20px] shadow-md bg-white">
          <Image
            src={swimming_pool}
            alt="Swimming Pool"
            width={206}
            height={199.5}
          />
          <p className="font-Poppins font-semibold text-sm sm:text-base text-[#00357b] pt-4">
            Sea Facing <br /> Swimming Pools
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 w-[227px] h-[271px] rounded-[20px] shadow-md bg-white">
          <Image src={gym} alt="Gym" width={206} height={199.5} />
          <p className="font-Poppins font-semibold text-sm sm:text-base text-[#00357b] pt-4">
            Gymnasium <br />& Fitness
          </p>
        </div>
      </div>

      <h4 className="flex flex-wrap font-Poppins font-light text-[10px] text-[#686868] py-6 justify-end mr-40">
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        <span className="underline cursor-pointer ml-1 font-semibold">
          Source 1 | Source 2
        </span>
      </h4>
    </>
  );
};

export default Features;
