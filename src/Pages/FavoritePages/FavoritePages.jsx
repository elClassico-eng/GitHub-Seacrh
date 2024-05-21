import React from "react";

import { useAppSelector } from "../../Hooks/redux";
import { FavCard } from "../../Components/FavCard";

import { useActions } from "../../Hooks/actions";

export const FavoritePages = () => {
    const { favorites } = useAppSelector((state) => state.gitHub);

    return (
        <div className="flex flex-col justify-center w-full h-screen px-4 py-2 border-y overflow-hidden border-white text-white bg-blueBG">
            <div className="title mb-2">
                <h1 className="font-normal text-4xl text-white mt-4">
                    Featured repositories:
                </h1>
            </div>
            <div className="flex flex-col gap-6">
                {favorites?.map((fav) => (
                    <FavCard fav={fav} />
                ))}
            </div>
        </div>
    );
};
