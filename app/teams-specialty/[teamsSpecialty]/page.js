"use client";

import RecipeContent from "@/components/teams-specialty-info/recipe-content";
import RecipeImageAndInfo from "@/components/teams-specialty-info/recipe-image-and-info";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Clock, Heart, Users } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function TeamsSpecialtyInfo() {
 const params = useParams();

 return (
  <section className="space-y-5">
   {/* title */}
   <div className="flex gap-3 items-center">
    <Title className="title text-7xl tracking-wide">Mel's Sisig </Title>

    <Button variant={"orangeNiCarmel"} size={"icon"} className={"rounded-full"}>
     <Heart />
    </Button>
   </div>

   {/* content */}
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* recipe image and info */}
    <RecipeImageAndInfo />

    {/* Recipe Content */}
    <RecipeContent />
   </div>
  </section>
 );
}
