import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function RecipeContent({ ingredients = [], instructions = [] }) {
 return (
  <div className="lg:col-span-2 space-y-8">
   {/* Ingredients */}
   <Card className={"border-0"}>
    <CardHeader>
     <CardTitle className="text-xl">Ingredients</CardTitle>
    </CardHeader>
    <CardContent>
     <ul className="list-disc pl-10">
      {ingredients && ingredients.map((item) => <li key={item}>{item}</li>)}
     </ul>
    </CardContent>
   </Card>

   {/* Instructions */}
   <Card className={"border-0"}>
    <CardHeader>
     <CardTitle className="text-xl">Instructions</CardTitle>
    </CardHeader>
    <CardContent>
     {" "}
     <ol className="px-10  ">
      {instructions && instructions.map((item, index) => <li key={item}>{index+1}. {item}</li>)}
     </ol>
    </CardContent>
   </Card>
  </div>
 );
}
