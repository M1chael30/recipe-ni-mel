import Footer from "@/components/footer";
import {
 HeroSection,
 TeamsSpecialty,
 TasteTheWorld,
} from "@/components/home/index";
import { teamsSpecialty, tasteTheWorld } from "@/lib/data";

export default function Home() {
 return (
  <>
   <section className="space-y-10">
    <HeroSection />
    <TeamsSpecialty data={teamsSpecialty} />
    <TasteTheWorld data={tasteTheWorld} />
   </section>
   {/* footer */}
   <Footer />
  </>
 );
}
