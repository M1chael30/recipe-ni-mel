"use client";

import CuisineCard from "@/components/cuisine-cards";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import Link from "next/link";

import { filipinoCuisines } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Cuisine() {
 const pathName = usePathname();

 let data = [];
 let title = "",
  description = "";

 if (pathName === "/cuisines/filipino") {
  data = filipinoCuisines.recipes;
  title = filipinoCuisines.title;
  description = filipinoCuisines.description;
 }

 return (
  <section className="space-y-5">
   {/* title */}
   <div className="space-y-3">
    <Title className="title text-7xl tracking-wide">{title}</Title>

    <Subtitle>{description}</Subtitle>
   </div>

   {/* cuisine card */}
   <div className="grid auto-rows-min grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
    {/* dito mag mamap */}
    {data.map((item) => (
     <Link
      href={"/"}
      key={item.id}
      className="hover:-translate-y-1 duration-300"
     >
      <CuisineCard item={item} />
     </Link>
    ))}
   </div>
  </section>
 );
}
