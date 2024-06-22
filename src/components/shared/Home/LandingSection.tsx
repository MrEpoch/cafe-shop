import Image from "next/image";
import React from "react";

export default function LandingSection() {
  return (
    <section className="w-full flex justify-between items-center max-w-screen-xl mx-auto text-white">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold font-anton w-96 leading-snug">
          Moderní káva ve stylu
        </h1>
        <p className="text-md font-poppins font-light w-[400px]">
          Moderní kavárna s cílem vytvoření čerstvé a dobré kávi spolu s
          kvalitní obsluhou.
        </p>
        <button className="bg-cafe-element rounded-full font-semibold w-fit px-6 py-4 hover:bg-cafe-element/90 transition">
          Do katalogu
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/StarBehindCoffee.svg"
          className="animate-spin-slow-reversed"
          alt="coffee"
          width={500}
          height={500}
        />
        <Image
          className="absolute animate-spin-slow"
          src="/coffee.png"
          alt="coffee"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
