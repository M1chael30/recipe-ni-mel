"use client";

import CuisineCard from "@/components/cuisine-cards";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import Link from "next/link";

import {
    americanCuisines,
    chineseCuisines,
    filipinoCuisines,
    italianCuisines,
    veganCuisines,
} from "@/lib/data";
import { useParams } from "next/navigation";
import Filters from "@/components/cuisine/filters";
import { useState } from "react";

export default function Cuisine() {
    const params = useParams();

    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')

    let data = [];
    let title = "",
        description = "";

    if (params.cuisine === "filipino") {
        data = filipinoCuisines.recipes;
        title = filipinoCuisines.title;
        description = filipinoCuisines.description;
    } else if (params.cuisine === "american") {
        data = americanCuisines.recipes;
        title = americanCuisines.title;
        description = americanCuisines.description;
    } else if (params.cuisine === "chinese") {
        data = chineseCuisines.recipes;
        title = chineseCuisines.title;
        description = chineseCuisines.description;
    } else if (params.cuisine === "italian") {
        data = italianCuisines.recipes;
        title = italianCuisines.title;
        description = italianCuisines.description;
    } else if (params.cuisine === "vegan") {
        data = veganCuisines.recipes;
        title = veganCuisines.title;
        description = veganCuisines.description;
    }

    return (
        <section className="space-y-5">
            {/* filters */}
            <div className="flex justify-end">
                <Filters select={select} setSelect={setSelect} setSearch={setSearch} />
            </div>

            {/* title */}
            <div className="space-y-3">
                <Title className="title text-7xl tracking-wide">{title}</Title>

                <Subtitle>{description}</Subtitle>
            </div>

            {/* cuisine card */}
            <div className="grid auto-rows-min grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {/* dito mag mamap */}
                {data.filter(
                    item => {
                        const selectTerm = select ? select === item.difficulty && item.tags.toLowerCase().includes(search.toLowerCase()) : item

                        return selectTerm
                    }
                ).map((item) => (
                    <Link
                        href={`/cuisines/${params.cuisine}/${item.id}`}
                        key={item.id}
                        className="hover:-translate-y-1 duration-300"
                    >
                        <CuisineCard item={item} />
                    </Link>
                ))}
            </div>
        </section>
    );
}
