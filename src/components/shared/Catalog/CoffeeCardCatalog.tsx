import Image from "next/image";
import React from "react";

export default function CoffeeCardCatalog({ cardContent }) {
  return (
    <div className="flex flex-col gap-2 max-w-[300px] w-full hover:shadow-md hover:shadow-cafe-secondary group rounded-md cursor-pointer p-4">
      <div className="p-[1px] bg-white shadow-2xl rounded-md items-center flex justify-center overflow-hidden">
        <Image
          src={cardContent.imgSrc}
          width={300}
          height={300}
          alt="coffee"
          className="group-hover:scale-105 transition group-hover:transition group-hover:duration-300 max-h-[300px] max-w-[300px] h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between w-full items-center">
          <h3 className="text-xl font-bold font-anton">{cardContent.title}</h3>
          <p className="text-md font-poppins">{cardContent.price}Kč</p>
        </div>
        <p className="font-poppins font-light text-sm w-full">
          {cardContent.description}
        </p>
        <div className="flex flex-wrap gap-2 w-full">
          {cardContent.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="text-sm font-poppins rounded-full bg-cafe-secondary p-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
