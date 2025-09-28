import { teamsSpecialty } from "@/lib/data";
import Title from "../title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { TeamsSpecialtyCard } from "./home-cards";

export default function TeamsSpecialty() {
 return (
  <section className="w-full relative bg-cover bg-center bg-[url('/images/img2.jpg')]">
   {/* bg color */}
   <div className="absolute inset-0 bg-orange-ni-carmel/80" />

   {/* wrapper */}
   <div className="relative z-10 space-y-8 p-8">
    {/* title */}
    <div>
     <Title className="title text-4xl tracking-wide">Team's Specialty</Title>
    </div>

    {/* card content */}
    <div className="grid auto-rows-min gap-4 md:grid-cols-5">
     {teamsSpecialty.length &&
      teamsSpecialty.map((item, i) => (
       <TeamsSpecialtyCard data={item} key={i} />
      ))}
    </div>
   </div>
  </section>
 );
}
