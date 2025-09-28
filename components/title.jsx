import { cn } from "@/lib/utils";
import React from "react";

export default function Title({ className, children }) {
 return <h1 className={cn("text-3xl", className)}>{children}</h1>;
}
