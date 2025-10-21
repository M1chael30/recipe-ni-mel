export default function ProfileCard({ item = {} }) {
    return (
        <div className="bg-orange-ni-carmel size-100 aspect-square relative flex shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
                alt={item.name}
                src={item.img}
                className="absolute inset-0 object-cover aspect-square size-full"
            />
            <img
                alt={item.name}
                src={item.img2}
                className="absolute inset-0 aspect-square size-full object-cover hover:opacity-0 transition-opacity"
            />
        </div>
    );
}
