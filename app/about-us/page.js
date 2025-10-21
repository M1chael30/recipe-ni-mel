import Header from "@/components/about-us/header";
import { HoverCardProfile } from "@/components/about-us/hover-card-profile";
import { teamData } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function AboutUs() {
    return (
        <section className="space-y-10">
            {/* title */}
            <Header />

            {/*content */}
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {teamData.filter(item => item.name !== "Angela Marie Guanio" && item.name !== "Carmel Loresiane Berber").map((item) => (
                    <HoverCardProfile key={item.name} item={item} />
                ))}
            </div>

            <div className="flex items-center justify-center">
                <div className="grid auto-rows-min md:grid-cols-2 gap-6">
                    {teamData.filter(item => item.name === "Angela Marie Guanio" || item.name === "Carmel Loresiane Berber").map((item) => (
                        <HoverCardProfile key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
