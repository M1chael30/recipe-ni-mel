import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
// import Image from "next/image";
// import MyProfile from "../../public/my_profile.jpg";

export default function AboutUs() {
 return (
  <section className="space-y-10">
   {/* title */}
   <div className="flex flex-col items-center justify-center">
    <Title className="title text-5xl tracking-wide">Meet the Creators</Title>
    <Subtitle>
     At MMACC, our team of chefs, developers, and food enthusiasts blend
     culinary passion with technical expertise to bring you a seamless cooking
     experience. From testing recipes to refining features, we’re dedicated to
     making your cooking journey as fun and easy as possible.
    </Subtitle>
   </div>

   {/* <div
    className={
     "relative flex size-40 shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer"
    }
   >
    <Image
     priority
     alt="my profile"
     src={MyProfile}
     className="absolute inset-0 object-cover aspect-square size-full"
    />
    <img
     alt="my profile"
     src={"/my_profile2.jpg"}
     className="absolute inset-0 aspect-square size-full object-cover hover:opacity-0 transition-opacity"
    />
   </div> */}

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
