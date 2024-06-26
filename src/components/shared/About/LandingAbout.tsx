import Image from "next/image";
import React from "react";
import { AnimatedDiv } from "../AnimatedElements";

export default function LandingAbout() {
  return (
    <section className="text-white flex items-center lg:flex-row flex-col justify-center gap-16 lg:justify-between">
      <AnimatedDiv className="flex flex-col gap-4">
        <h1 className=" lg:text-5xl sm:text-4xl text-3xl font-bold font-anton leading-snug text-white">
          Tradice je ctí
        </h1>
        <p className="text-md font-poppins font-light md:w-[500px]">
          <span className="block">
            Jsme rodinná kavárna s hlubokým zájmem o tradici a umění přípravy
            kávy. Věříme, že káva není jen nápoj, ale zážitek, který by měl být
            vychutnáván.
          </span>
          <span className="block pt-2">
            Proto u nás najdete pouze tu nejkvalitnější kávu, pečlivě vybíranou
            z nejlepších plantáží po celém světě.
          </span>
          <span className="block pt-2">
            V naší nabídce najdete široký výběr kávových specialit – od
            klasického espressa přes jemné cappuccino až po moderní flat white.
          </span>
          <span className="block pt-2">
            Pro milovníky alternativních metod přípravy nabízíme také
            filtrovanou kávu a chemex. Každý nápoj je připravován s důrazem na
            detail a podle vašich přání.
          </span>
        </p>
      </AnimatedDiv>
      <AnimatedDiv side="right" className="">
        <Image src="/coffee-beans.jpg" width={400} height={400} alt="coffee" />
      </AnimatedDiv>
    </section>
  );
}
