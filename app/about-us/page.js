import Header from "@/components/about-us/header";
import MyProfile from "../../public/profiles/angge.png";
import Image from "next/image";

export default function AboutUs() {
 return (
  <section className="space-y-10">
   {/* title */}
   <Header />

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
    <div className="bg-orange-ni-carmel aspect-square relative flex shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer">
     <Image
      priority
      alt="my profile"
      src={MyProfile}
      className="absolute inset-0 object-cover aspect-square size-full"
     />
     <img
      alt="my profile"
      src={"/profiles/angela.jpg"}
      className="absolute inset-0 aspect-square size-full object-cover hover:opacity-0 transition-opacity"
     />
    </div>
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
    <div className="bg-orange-ni-carmel aspect-square rounded-lg" />
   </div>
  </section>
 );
}
