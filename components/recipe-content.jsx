import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function RecipeContent() {
 return (
  <div className="lg:col-span-2 space-y-8">
   {/* Ingredients */}
   <Card className={"border-0"}>
    <CardHeader>
     <CardTitle className="text-xl">Ingredients</CardTitle>
    </CardHeader>
    <CardContent>lalagyan pa</CardContent>
   </Card>

   {/* Instructions */}
   <Card className={"border-0"}>
    <CardHeader>
     <CardTitle className="text-xl">Instructions</CardTitle>
    </CardHeader>
    <CardContent>lalagyan pa</CardContent>
   </Card>
  </div>
 );
}
