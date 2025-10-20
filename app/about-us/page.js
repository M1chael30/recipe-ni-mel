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
    <HoverCardProfile item={teamData[0]} />
    <HoverCardProfile />
    <HoverCardProfile />
    <HoverCardProfile />
    <HoverCardProfile />
   </div>
  </section>
 );
}
