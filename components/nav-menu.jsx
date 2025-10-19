"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { ChefHat, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

import CuisinesDropdown from "./cuisines-dropdown";

const cuisineLinks = [
 {
  title: "Filipino",
  url: "/cuisines/filipino",
 },
];

export default function NavMenu() {
 const urlPath = usePathname();

 return (
  <header className="py-4 mx-10">
   <div className="flex justify-between mx-auto items-center">
    <div className="">
     <ChefHat className="size-8 text-orange-ni-carmel" />
    </div>
    <nav>
     <ul className="flex gap-10 items-center">
      <li>
       <Link
        href="/"
        className={cn(urlPath === "/" && "text-orange-ni-carmel")}
       >
        Home
       </Link>
      </li>
      <li>
       <CuisinesDropdown links={cuisineLinks} />
      </li>
      <li>
       <Link
        href="/about-us"
        className={cn(urlPath === "/about-us" && "text-orange-ni-carmel")}
       >
        About Us
       </Link>
      </li>
     </ul>
    </nav>

    <div className="">
     <Heart className="size-8 text-orange-ni-carmel" />
    </div>
   </div>
  </header>
 );
}
