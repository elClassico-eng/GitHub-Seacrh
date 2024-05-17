import React from "react";

import { useAppSelector } from "../../Hooks/redux";

export const FavoritePages = () => {
    const { favorites } = useAppSelector((state) => state.gitHub);

    return (
        <div className="flex flex-col w-full h-screen px-4 py-2 border-y overflow-hidden border-white text-white bg-blueBG">
            <div className="title">
                <h1 className="font-normal text-4xl text-white mt-4">
                    Featured repositories:
                </h1>
            </div>
            <div className="mt-7">
                <ul>
                    {favorites?.map((fav) => (
                        <a href={fav} target="_blank">
                            <li>{fav}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
};
