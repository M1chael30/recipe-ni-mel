import { cn } from "@/lib/utils";
import React from "react";

export default function Subtite({ className, children }) {
 return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
}
