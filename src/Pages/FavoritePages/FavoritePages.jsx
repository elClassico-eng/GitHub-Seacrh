import React from "react";

import { useAppSelector } from "../../Hooks/redux";
import { FavCard } from "../../Components/UI/Card/FavCard";

export const FavoritePages = () => {
    const { favorites } = useAppSelector((state) => state.gitHub);

    return (
        <div className="flex flex-col justify-center w-full min-h-screen relative overflow-hidden px-4 py-2 border-y border-white text-white bg-blueBG">
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center md:justify-start z-10">
                {favorites?.map((fav, index) => (
                    <FavCard key={index} fav={fav} />
                ))}
            </div>
            <div className="absolute text-[270px] uppercase text-stone-700 top-1/2 left-0 animate-move z-0">
                <h1>GitHub&nbsp;Search</h1>
            </div>
        </div>
    );
};
