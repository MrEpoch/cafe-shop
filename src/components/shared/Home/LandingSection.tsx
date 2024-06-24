import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LandingSection() {
  return (
    <section className=" w-full flex gap-16 2xl:flex-row flex-col justify-between items-center text-white">
      <div className="flex flex-col gap-6 w-full items-start 2xl:pt-0 pt-16">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold font-anton xl:w-96 leading-snug">
          Moderní káva ve stylu
        </h1>
        <p className="text-md font-poppins font-light w-full sm:w-[400px]">
          Moderní kavárna s cílem vytvoření čerstvé a dobré kávi spolu s
          kvalitní obsluhou.
        </p>
        <Link
          href="/catalog"
          className="relative inline-block text-lg group w-fit"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-black rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
            <span className="relative font-playwrite font-medium">
              Do katalogu
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-black rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/StarBehindCoffee.svg"
          className=" max-h-full max-w-full object-cover sm:block hidden md:animate-spin-slow-reversed"
          alt="coffe background"
          width={500}
          height={500}
        />
        <Image
          className="object-cover sm:absolute md:animate-spin-slow overflow-hidden"
          src="/coffee.png"
          alt="coffee"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
