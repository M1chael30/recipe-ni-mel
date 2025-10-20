import Header from "@/components/about-us/header";
import { HoverCardProfile } from "@/components/about-us/hover-card-profile";
import { teamData } from "@/lib/data";

export default function AboutUs() {
 return (
  <section className="space-y-10">
   {/* title */}
   <Header />

   {/*content */}
   <div className="grid auto-rows-min gap-4 md:grid-cols-5">
    {teamData.map((item) => (
     <HoverCardProfile key={item.name} item={item} />
    ))}
   </div>
  </section>
 );
}
