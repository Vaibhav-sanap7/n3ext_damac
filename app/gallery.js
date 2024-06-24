import React from "react";
import Image from "next/image";

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../public/images/index.js";

function Gallery() {
  return (
    <div className="relative">
      <div className="flex justify-center sm:justify-end mt-8 mb-5 mx-4 sm:mr-48">
        <button className="font-Poppins rounded bg-[#00357b] text-white font-bold text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-10 mr-2 sm:mr-4">
          EXTERIORS
        </button>
        <button className="font-Poppins text-[#00357b] border border-[#00357b] rounded bg-transparent py-2 sm:py-3 px-4 sm:px-10 font-bold text-xs sm:text-sm">
          INTERIORS
        </button>
      </div>
      <div className="mx-4 sm:ml-[161px] sm:mr-[200px] grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5">
        <div className="col-span-2 sm:col-span-4">
          <Image src={image1} alt="Image 1" className="rounded-lg" />
        </div>
        <div>
          <Image src={image2} alt="Image 2" className="rounded-lg" />
        </div>
        <div>
          <Image src={image3} alt="Image 3" className="rounded-lg" />
        </div>
        <div>
          <Image src={image4} alt="Image 4" className="rounded-lg" />
        </div>
        <div>
          <Image src={image5} alt="Image 5" className="rounded-lg" />
        </div>
      </div>
      <Image
        src={image6}
        alt="Arrow Left"
        className="hidden sm:block absolute top-[320px] left-[10px] sm:left-[200px] cursor-pointer z-10"
      />
      <Image
        src={image7}
        alt="Arrow Right"
        className="hidden sm:block absolute top-[320px] right-[10px] sm:right-[300px] cursor-pointer z-10"
      />
    </div>
  );
}

export default Gallery;
