import Title from "../title";
import Subtitle from "../subtitle";

import { TasteTheWorldCard } from "./home-cards";

export default function TasteTheWorld({ data }) {
 return (
  <section className="px-8 py-4 space-y-4">
   {/* title */}
   <div>
    <Title className="title text-4xl tracking-wide">Taste the World</Title>
    <Subtitle>
     Browse recipes by cuisine and explore the diverse flavors that bring people
     together.
    </Subtitle>
   </div>

   {/* content */}
   <div className="grid auto-rows-min gap-4 sm:grid-cols-3 lg:grid-cols-5">
    {data && data.map((item, i) => <TasteTheWorldCard data={item} key={i} />)}
   </div>
  </section>
 );
}
