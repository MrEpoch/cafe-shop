import LandingAbout from "@/components/shared/About/LandingAbout";
import BottomSection from "@/components/shared/Home/BottomSection";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen py-12 px-16 max-w-screen-xl mx-auto  w-full bg-cafe-background flex flex-col gap-12">
      <LandingAbout />
      <BottomSection notTitle />
    </main>
  );
}
