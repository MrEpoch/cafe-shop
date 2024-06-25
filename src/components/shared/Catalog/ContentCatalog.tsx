import { CatalogItems } from "@/lib/constants";
import React from "react";
import CoffeeCardCatalog from "./CoffeeCardCatalog";

export default function ContentCatalog() {
  return (
    <section className="w-full flex flex-wrap gap-16 2xl:flex-row flex-col justify-between items-center text-white">
      {CatalogItems.map((item) => (
        <CoffeeCardCatalog key={item.title} cardContent={item} />
      ))}
    </section>
  );
}
