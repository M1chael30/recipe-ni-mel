import Subtitle from "./subtitle";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CuisineCard({ item = {} }) {
 return (
  <Card className="bg-background-ni-carmel shadow-lg pt-0 gap-2 overflow-hidden">
   <CardHeader className="p-0">
    {/* image */}
    <img
     src={item.img}
     alt={item.name}
     className="aspect-video object-cover object-center"
    />
   </CardHeader>
   <CardContent className="flex justify-between">
    {/* left side */}
    <div className="space-y-2">
     <h1 className="text-xl">{item.name}</h1>
     <div>
      <Subtitle>Cooking Time</Subtitle>
      <Subtitle className="flex items-center gap-1 text-orange-ni-carmel">
       <Timer className="size-4" />
       {item.cookTime} Minutes
      </Subtitle>
     </div>
    </div>

    {/* right side */}
    <div className="flex items-end flex-col">
     <Badge
      variant="secondary"
      className={cn(
       "font-bold tracking-wide px-8",
       item.difficulty === "Easy" && "bg-[#C1F7CA] text-[#27B11D]",
       item.difficulty === "Medium" && "bg-[#f5f29e] text-[#f7aa46]",
       item.difficulty === "Hard" && "bg-[#F7C1C1] text-[#EC4D42]"
      )}
     >
      {item.difficulty}
     </Badge>
     <div className="mt-auto">
      <Subtitle className="flex items-center gap-1">
       {item.servings} Servings
       <Utensils className="size-4" />
      </Subtitle>
     </div>
    </div>
   </CardContent>
  </Card>
 );
}
