import React from "react";
import { Button } from "../Button/Button";

export const FavCard = ({ fav }) => {
    return (
        <div className="flex bg-cardBG content-center items-center text-white shadow-lg overflow-hidden transform transition-transform rounded hover:scale-105 w-full max-w-xl h-[140px] p-5">
            <h2 className="text-xl font-bold">
                Link :{" "}
                <span className="font-normal">
                    <a href={fav} target="_blank">
                        {fav}
                    </a>
                </span>
            </h2>
        </div>
    );
};
