import ContentCatalog from "@/components/shared/Catalog/ContentCatalog";
import LandingCatalog from "@/components/shared/Catalog/LandingCatalog";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen py-12 px-16 max-w-screen-xl mx-auto  w-full bg-cafe-background flex flex-col gap-12">
      <LandingCatalog />
      <ContentCatalog />
    </main>
  );
}
