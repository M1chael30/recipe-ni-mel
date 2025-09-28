import React from "react";
import Title from "../title";
import Subtite from "../subtitle";
import { tasteTheWorld } from "@/lib/data";
import { TasteTheWorldCard } from "./home-cards";

export default function TasteTheWorld() {
 return (
  <section className="px-8 py-4 space-y-4">
   {/* title */}
   <div>
    <Title className="title text-4xl tracking-wide">Taste the World</Title>
    <Subtite>
     Browse recipes by cuisine and explore the diverse flavors that bring people
     together.
    </Subtite>
   </div>

   {/* content */}
   <div className="grid auto-rows-min gap-4 md:grid-cols-5">
    {tasteTheWorld.length &&
     tasteTheWorld.map((item, i) => <TasteTheWorldCard data={item} key={i} />)}
   </div>
  </section>
 );
}
