import { ChefHat, Clock, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function RecipeImageAndInfo({ data }) {
 return (
  <div className="lg:col-span-1">
   <div className="relative h-80 rounded-lg overflow-hidden mb-6">
    <Image src={data.img} alt={"recipe image"} fill className="object-cover" />
   </div>

   <div className="space-y-4">
    <div className="flex items-center gap-4 text-sm">
     <div className="flex items-center gap-1">
      <Clock className="h-4 w-4 text-muted-foreground" />
      <span>{data.cookTime} minutes</span>
     </div>
     <div className="flex items-center gap-1">
      <Users className="h-4 w-4 text-muted-foreground" />
      <span>{data.servings} servings</span>
     </div>
     <div className="flex items-center gap-1">
      <ChefHat className="h-4 w-4 text-muted-foreground" />
      <span>{data.category}</span>
     </div>
    </div>
    <Card className={"border-0 bg-brown-ni-carmel"}>
     <CardHeader>
      <CardTitle className={"text-accent"}>
       Keyword:{" "}
       <span className="font-medium" style={{ fontStyle: "italic" }}>
        {data.tags}
       </span>
      </CardTitle>
     </CardHeader>
    </Card>
   </div>
  </div>
 );
}
