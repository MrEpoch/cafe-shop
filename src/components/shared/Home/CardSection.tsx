import React from "react";
import CoffeeCard from "@/components/shared/Home/CoffeeCard";

export default function CardSection() {
  return (
    <section className="w-full text-white flex flex-col justify-center gap-10 items-center pt-48 min-h-screen">
      <h1 className="text-5xl font-bold font-anton">Naše metody</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-10 h-full">
        <CoffeeCard
          title="Čerstvá zrna"
          description="Kavárna s cílem vytvoření čerstě a dobré kávi spolu s kvalitní obsluhou."
          imgSrc="/coffee-beans.jpg"
        />
        <CoffeeCard
          title="Čerstvá zrna"
          description="Kavárna s cílem vytvoření čerstě a dobré kávi spolu s kvalitní obsluhou."
          imgSrc="/coffee-beans.jpg"
        />
        <CoffeeCard
          title="Čerstvá zrna"
          description="Kavárna s cílem vytvoření čerstě a dobré kávi spolu s kvalitní obsluhou."
          imgSrc="/coffee-beans.jpg"
        />
      </div>
    </section>
  );
}
