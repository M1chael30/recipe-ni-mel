import Liempo from "../public/images/img5.jpg";
import Image from "next/image";
import Subtitle from "./subtitle";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, Utensils } from "lucide-react";

export default function CuisineCard() {
 return (
  <Card className="bg-background-ni-carmel shadow-lg pt-0 gap-2 overflow-hidden">
   <CardHeader className="p-0">
    {/* image */}
    <Image
     src={Liempo}
     alt="liempo"
     className="aspect-video object-cover object-center"
    />
   </CardHeader>
   <CardContent className="flex justify-between">
    {/* left side */}
    <div className="space-y-2">
     <h1 className="text-xl">Liempo</h1>
     <div>
      <Subtitle>Cooking Time</Subtitle>
      <Subtitle className="flex items-center gap-1 text-orange-ni-carmel">
       <Timer className="size-4" />
       30 Minutes
      </Subtitle>
     </div>
    </div>

    {/* right side */}
    <div className="flex items-end flex-col">
     <Badge
      variant="secondary"
      className="bg-[#C1F7CA] text-[#27B11D] font-bold tracking-wide px-8"
     >
      Easy
     </Badge>
     <div className="mt-auto">
      <Subtitle className="flex items-center gap-1">
       4 Servings
       <Utensils className="size-4" />
      </Subtitle>
     </div>
    </div>
   </CardContent>
  </Card>
 );
}
