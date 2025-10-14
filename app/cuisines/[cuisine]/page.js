import CuisineCard from "@/components/cuisine-cards";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import Link from "next/link";

export default function Cuisine() {
 return (
  <section className="space-y-5">
   {/* title */}
   <div className="space-y-3">
    <Title className="title text-7xl tracking-wide">Filipino</Title>

    <Subtitle>
     Filipino cuisine is a comforting reflection of home, filled with flavors
     that remind us of family and tradition. From savory stews to crispy
     delights, each dish carries the essence of Filipino culture. Dive into our
     collection of Filipino favorites, guaranteed to bring back memories of
     home-cooked meals and the warm embrace of your loved ones.
    </Subtitle>
   </div>

   {/* cuisine card */}
   <div className="grid auto-rows-min grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
    {/* dito mag mamap */}
    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
     <Link
      href={"/"}
      key={index}
      className="hover:shadow-xl hover:-translate-y-1 duration-300"
     >
      <CuisineCard />
     </Link>
    ))}
   </div>
  </section>
 );
}
