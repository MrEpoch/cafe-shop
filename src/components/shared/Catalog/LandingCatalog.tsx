import { CatalogLandingIcons } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { AnimatedDiv } from "../AnimatedElements";

export default function LandingCatalog() {
  return (
    <section className="w-full flex gap-16 2xl:flex-row flex-col justify-between items-center text-white">
      <div className="w-full flex flex-col gap-16 items-center">
        <div className="w-full">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl sm:text-start text-center font-bold font-anton xl:w-96 leading-snug">
            Káva jak má být
          </h1>
        </div>
        <AnimatedDiv animationLength={1} side="left" className="flex items-center justify-center gap-16 border-r-2 border-gray-300 shadow-2xl p-4 sm:p-6 ">
          {CatalogLandingIcons.map((item) => (
            <IconWithText
              key={item.text}
              SvgIcon={item.SvgIcon}
              text={item.text}
            />
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
}

function IconWithText({ SvgIcon, text }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image src={SvgIcon} width={30} height={30} alt={text} />
      <p className="text-sm font-poppins font-light">{text}</p>
    </div>
  );
}
