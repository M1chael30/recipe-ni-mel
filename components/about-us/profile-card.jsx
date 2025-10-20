export default function ProfileCard() {
 return (
  <div className="bg-orange-ni-carmel aspect-square relative flex shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer">
   <img
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
 );
}
