"use client";

import RecipeContent from "@/components/recipe-content";
import RecipeInfo from "@/components/recipe-info";
import Title from "@/components/title";

import { Button } from "@/components/ui/button";
import {
 americanCuisines,
 chineseCuisines,
 filipinoCuisines,
 italianCuisines,
 veganCuisines,
} from "@/lib/data";
import { Heart } from "lucide-react";
import { useParams } from "next/navigation";

export default function TeamsSpecialtyInfo() {
 const params = useParams();

 let data = [],
  info = {};

 if (params.cuisine === "filipino") {
  data = filipinoCuisines.recipes;
  info = data.find((item) => item.id === Number(params.recipe));
 } else if (params.cuisine === "italian") {
  data = italianCuisines.recipes;
  info = data.find((item) => item.id === Number(params.recipe));
 } else if (params.cuisine === "american") {
  data = americanCuisines.recipes;
  info = data.find((item) => item.id === Number(params.recipe));
 } else if (params.cuisine === "chinese") {
  data = chineseCuisines.recipes;
  info = data.find((item) => item.id === Number(params.recipe));
 } else if (params.cuisine === "vegan") {
  data = veganCuisines.recipes; 
  info = data.find((item) => item.id === Number(params.recipe));
 }

 return (
  <section className="space-y-5">
   {/* title */}
   <div className="flex gap-3 items-center">
    <Title className="title text-7xl tracking-wide">{info.name}</Title>

    <Button variant={"orangeNiCarmel"} size={"icon"} className={"rounded-full"}>
     <Heart />
    </Button>
   </div>

   {/* content */}
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* recipe image and info */}
    <RecipeInfo data={info} />

    {/* Recipe Content */}
    <RecipeContent
     ingredients={info.ingredients}
     instructions={info.instructions}
    />
   </div>
  </section>
 );
}
