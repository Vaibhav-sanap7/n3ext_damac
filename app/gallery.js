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
      <div className="flex justify-end mt-8 mb-5 mr-48">
        <button className="font-Poppins rounded bg-[#00357b] text-white font-bold text-sm py-3 px-10 mr-4">
          EXTERIORS
        </button>
        <button className="font-Poppins text-[#00357b] border border-[#00357b] rounded bg-transparent py-3 px-10 font-bold text-sm">
          INTERIORS
        </button>
      </div>
      <div className=" ml-[161px] mr-[200px] grid grid-cols-4 gap-5 ">
        <div className="col-span-4 row-span-1">
          <Image src={image1} alt="" className="rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <Image src={image2} alt="" className="rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <Image src={image3} alt="" className="rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <Image src={image4} alt="" className="rounded-lg" />
        </div>
        <div className="col-span-1 row-span-1">
          <Image src={image5} alt="" className="rounded-lg" />
        </div>
      </div>
      <Image
        src={image6}
        alt=""
        className="absolute top-[320px] left-[200px] cursor-pointer z-10"
      />
      <Image
        src={image7}
        alt=""
        className="absolute top-[320px] right-[300px] cursor-pointer z-10"
      />
    </div>
  );
}

export default Gallery;
