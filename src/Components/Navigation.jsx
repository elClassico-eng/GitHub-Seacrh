import React from "react";

import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="flex justify-center items-center overflow-x-auto h-24 bg-black text-white px-10 py-5 ">
            <div className="flex justify-start w-6/12">
                <h3 className="font-bold text-xl">GitHub Search</h3>
            </div>

            <div className="flex justify-end w-6/12">
                <span>
                    <Link
                        to="/"
                        className="font-semibold px-2 hover:underline transition-all"
                    >
                        Home
                    </Link>
                    <Link
                        to="favorite"
                        className="font-semibold hover:underline transition-all"
                    >
                        Favorites
                    </Link>
                </span>
            </div>
        </nav>
    );
};
