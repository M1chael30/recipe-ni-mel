import Subtite from "@/components/subtitle";
import Title from "@/components/title";

export default function AboutUs() {
 return (
  <section className="space-y-10">
   {/* title */}
   <div className="flex flex-col items-center justify-center">
    <Title className="title text-5xl tracking-wide">Meet the Creators</Title>
    <Subtite>
     At MMACC, our team of chefs, developers, and food enthusiasts blend
     culinary passion with technical expertise to bring you a seamless cooking
     experience. From testing recipes to refining features, we’re dedicated to
     making your cooking journey as fun and easy as possible.
    </Subtite>
   </div>

   {/*content */}
   <div className="grid auto-rows-min gap-4 md:grid-cols-5">
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
   </div>
  </section>
 );
}
