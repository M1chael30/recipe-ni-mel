"use client";

import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CuisinesDropdown({ links = [] }) {
 const params = useParams();
 let name = "";

 if (params.cuisine === "italian") {
  name = "Italian";
 } else if (params.cuisine === "filipino") {
  name = "Filipino";
 } else if (params.cuisine === "chinese") {
  name = "Chinese";
 } else if (params.cuisine === "american") {
  name = "American";
 } else if (params.cuisine === "vegan") {
  name = "Vegan";
 } else {
  name = "Cuisine";
 }

 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button
     className="bg-background-ni-carmel hover:bg-background-ni-carmel text-base"
     variant="ghost"
    >
     {name}
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent>
    {links &&
     links.map((link) => (
      <DropdownMenuItem key={link.title}>
       <Link href={link.url} className="w-full">
        {link.title}
       </Link>
      </DropdownMenuItem>
     ))}
   </DropdownMenuContent>
  </DropdownMenu>
 );
}
