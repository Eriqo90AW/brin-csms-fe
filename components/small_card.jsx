import React from "react";
import Image from "next/image";

export default function small_card({image_src, title, value}) {
  return (
    <div className="w-45 h-20 bg-white rounded-md box-shadow relative">
      <div className="w-10 h-10 absolute top-[-1.5rem] left-[1.5rem]">
        <Image
          src={image_src}
          fill={true}
          alt="Active CS"
          className="object-contain hover:scale-110 transition-all ease-in-out"
        />
      </div>
      <div className="w-full h-full px-5 py-5 pt-4">
        <h1 className="text-end text-[#464255] text-xl font-bold mb-1 cursor-default">{value}</h1>
        <p className="text-end text-[#464255] text-xs cursor-default">{title}</p>
      </div>
    </div>
  );
}
