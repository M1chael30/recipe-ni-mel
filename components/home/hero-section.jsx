import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
 return (
  <section className="flex items-center justify-between">
   {/* left side */}
   <div className="rotate overflow-hidden md:block hidden">
    <Image
     src={"/images/img1.png"}
     width={420}
     height={420}
     className="scale-x-[-1]"
     alt="recipe book"
    />
   </div>

   {/* right side */}
   <div className="space-y-3 mx-10">
    {/* title */}
    <div className="flex flex-col items-end">
     <Title className="title text-7xl">
      Good <span className="text-orange-ni-carmel">Food</span>
     </Title>
     <Title className="title text-7xl">
      Good <span className="text-orange-ni-carmel">Company</span>
     </Title>
    </div>

    {/* subtitle */}
    <div className="space-y-5 flex flex-col items-end">
     <Subtitle>
      Every recipe brings people together, turning every meal into a memorable
      moment.
     </Subtitle>
     <Button variant="orangeNiCarmel">
      Explore Now
      <ArrowRight />
     </Button>
    </div>
   </div>
  </section>
 );
}
