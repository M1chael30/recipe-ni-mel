"use client";

import RecipeContent from "@/components/recipe-content";
import RecipeInfo from "@/components/recipe-info";
import Title from "@/components/title";

import { Button } from "@/components/ui/button";
import { teamsSpecialty } from "@/lib/data";
import { Heart } from "lucide-react";
import { useParams } from "next/navigation";

export default function TeamsSpecialtyInfo() {
 const params = useParams();

 const teamsSpecialtyInfo = teamsSpecialty.find(
  (item) => item.id === Number(params.teamsSpecialty)
 );

 return (
  <section className="space-y-5">
   {/* title */}
   <div className="flex gap-3 items-center">
    <Title className="title text-7xl tracking-wide">
     {teamsSpecialtyInfo.name}
    </Title>

    <Button variant={"orangeNiCarmel"} size={"icon"} className={"rounded-full"}>
     <Heart />
    </Button>
   </div>

   {/* content */}
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* recipe image and info */}
    <RecipeInfo data={teamsSpecialtyInfo} />

    {/* Recipe Content */}
    <RecipeContent />
   </div>
  </section>
 );
}
