import Subtitle from "../subtitle";
import Title from "../title";

export default function Header() {
 return (
  <div className="flex flex-col items-center justify-center">
   <Title className="title text-5xl tracking-wide">Meet the Creators</Title>
   <Subtitle>
    At MMACC, our team of chefs, developers, and food enthusiasts blend culinary
    passion with technical expertise to bring you a seamless cooking experience.
    From testing recipes to refining features, we’re dedicated to making your
    cooking journey as fun and easy as possible.
   </Subtitle>
  </div>
 );
}
