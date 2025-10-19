import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CuisinesDropdown({ links = [] }) {
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button
     className="bg-background-ni-carmel hover:bg-background-ni-carmel text-base"
     variant="ghost"
    >
     Cuisines
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
