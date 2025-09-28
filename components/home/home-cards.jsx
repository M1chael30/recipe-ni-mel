import Image from "next/image";
import Title from "../title";
import { Card, CardContent, CardFooter } from "../ui/card";

function TasteTheWorldCard({ data, ...props }) {
 return (
  <Card
   {...props}
   className="w-full relative aspect-square overflow-hidden bg-cover bg-center transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
   style={{ backgroundImage: `url('${data.img}')` }}
  >
   {/* bg color */}
   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />

   {/* wrapper */}
   <div className="relative z-10 h-full flex items-end justify-center">
    <Title className={"text-primary-foreground text-lg"}>{data.name}</Title>
   </div>
  </Card>
 );
}

function TeamsSpecialtyCard({ data, ...props }) {
 return (
  <Card
   {...props}
   className="bg-background-ni-carmel border-0 aspect-square transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
  >
   <CardContent>
    <Image src={data.img} alt={data.name} width={320} height={320} />
   </CardContent>
   <CardFooter className={"justify-center"}>
    <p className="font-bold">{data.name}</p>
   </CardFooter>
  </Card>
 );
}

export { TasteTheWorldCard, TeamsSpecialtyCard };
