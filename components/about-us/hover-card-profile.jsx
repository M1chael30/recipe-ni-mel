import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
 HoverCard,
 HoverCardContent,
 HoverCardTrigger,
} from "@/components/ui/hover-card";
import ProfileCard from "./profile-card";

export function HoverCardProfile({ item = {} }) {
 return (
  <HoverCard>
   <HoverCardTrigger>
    <ProfileCard item={item} />
   </HoverCardTrigger>
   <HoverCardContent className="w-80">
    <div className="flex gap-4">
     <Avatar>
      <AvatarImage src={item.img2} />
      <AvatarFallback>{item.name}</AvatarFallback>
     </Avatar>
     <div className="space-y-1">
      <h4 className="text-sm font-semibold">{item.name}</h4>
      <p className="text-sm">{item.role}</p>
      <div className="text-muted-foreground text-xs">{item.socials}</div>
     </div>
    </div>
   </HoverCardContent>
  </HoverCard>
 );
}
