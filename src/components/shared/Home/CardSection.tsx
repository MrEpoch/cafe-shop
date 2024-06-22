import React from "react";
import CoffeeCard from "@/components/shared/Home/CoffeeCard";

export default function CardSection() {
  return (
    <section className="w-full flex justify-center items-center gap-10 pt-48 h-full">
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
    </section>
  );
}
