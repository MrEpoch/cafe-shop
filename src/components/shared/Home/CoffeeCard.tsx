import Image from "next/image";
import React from "react";

export default function CoffeeCard({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-cafe-element p-10 w-full max-w-sm items-center justify-center text-white rounded-md flex flex-col gap-4">
      <Image
        src={imgSrc}
        alt="coffee"
        width={300}
        height={300}
        className="w-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold font-anton">{title}</h1>
        <p className="text-md font-poppins font-light">{description}</p>
      </div>
    </div>
  );
}
