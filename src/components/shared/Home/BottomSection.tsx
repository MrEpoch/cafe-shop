import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function BottomSection() {
  return (
    <section className="w-full py-16 text-white flex flex-col justify-center items-center gap-10 pt-48 min-h-screen">
      <h1 className="text-5xl font-bold font-anton">
        Přijď otestovat naší kávu
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-between h-full gap-8 w-full">
        <Image src="/coffee.png" alt="coffee" width={300} height={300} />
        <div className="bg-gray-50 py-10 px-16 flex flex-col gap-6 rounded-md">
          <CoffeCardElement Svg={MapPin} text="Berounová 521, Praha 3" />
          <CoffeCardElement Svg={Phone} text="+420 111 111 111" />
          <CoffeCardElement Svg={Mail} text="mail@mail.mail" />
        </div>
      </div>
    </section>
  );
}

function CoffeCardElement({ Svg, text }) {
  return (
    <div className="text-black flex items-center gap-4 w-full">
      <Svg width={30} height={30} />
      <p>{text}</p>
    </div>
  );
}
