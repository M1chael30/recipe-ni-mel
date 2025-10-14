import { cn } from "@/lib/utils";

export default function Subtitle({ className, children }) {
 return (
  <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
 );
}
