import Footer from "@/components/shared/Footer";
import BottomSection from "@/components/shared/Home/BottomSection";
import CardSection from "@/components/shared/Home/CardSection";
import LandingSection from "@/components/shared/Home/LandingSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-cafe-background flex flex-col gap-12">
      <LandingSection />
      <CardSection />
      <BottomSection />
      <Footer />
    </main>
  );
}
