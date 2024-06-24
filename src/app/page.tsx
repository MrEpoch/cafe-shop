import BottomSection from "@/components/shared/Home/BottomSection";
import CardSection from "@/components/shared/Home/CardSection";
import LandingSection from "@/components/shared/Home/LandingSection";

export default function Home() {
  return (
    <main className=" min-h-screen px-16 max-w-screen-xl mx-auto  w-full bg-cafe-background flex flex-col gap-12">
      <LandingSection />
      <CardSection />
      <BottomSection />
    </main>
  );
}
