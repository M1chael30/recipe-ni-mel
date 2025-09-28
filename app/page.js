import Footer from "@/components/footer";
import {
 HeroSection,
 TeamsSpecialty,
 TasteTheWorld,
} from "@/components/home/index";

export default function Home() {
 return (
  <>
   <section className="space-y-10">
    <HeroSection />
    <TeamsSpecialty />
    <TasteTheWorld />
   </section>
   {/* footer */}
   <Footer />
  </>
 );
}
