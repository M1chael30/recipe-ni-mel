import { ChefHat, Clock, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function RecipeImageAndInfo() {
 return (
  <div className="lg:col-span-1">
   <div className="relative h-80 rounded-lg overflow-hidden mb-6">
    <Image
     src={"/images/img3.png"}
     alt={"recipe image"}
     fill
     className="object-cover"
    />
   </div>

   <div className="space-y-4">
    <div className="flex items-center gap-4 text-sm">
     <div className="flex items-center gap-1">
      <Clock className="h-4 w-4 text-muted-foreground" />
      <span>30 minutes</span>
     </div>
     <div className="flex items-center gap-1">
      <Users className="h-4 w-4 text-muted-foreground" />
      <span>4 servings</span>
     </div>
     <div className="flex items-center gap-1">
      <ChefHat className="h-4 w-4 text-muted-foreground" />
      <span>Asian</span>
     </div>
    </div>
    <Card className={"border-0 bg-brown-ni-carmel"}>
     <CardHeader>
      <CardTitle className={"text-accent"}>
       Keyword:{" "}
       <span className="font-medium" style={{ fontStyle: "italic" }}>
        Pork, Sizzling, Filipino
       </span>
      </CardTitle>
     </CardHeader>
    </Card>
   </div>
  </div>
 );
}
